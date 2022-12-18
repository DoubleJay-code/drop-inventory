<template>
  <div class="wrapper">
    <div class="flex">
      <SideBar />
      <div class="inventory">
        <div
          @drop="onDrop($event)"
          v-for="item in items"
          :key="item?.id"
          class="inventory__elem droppable"
          @dragover.prevent
          @dragenter.prevent
          @click="openRightMenu(item)"
        >
          <div
            @dragstart="onDrug($event, item, items)"
            v-if="item?.img"
            class="conteiner draggable"
            draggable="true"
          >
            <img :src="item.img" alt="item-image" />
            <div v-if="item.count" class="inventory__count">
              {{ item.count }}
            </div>
          </div>
        </div>
        <ModalItem
          @closeModal="closeModal"
          @delete="deleteCount"
          :openModalWindow="openModalWindow"
        />
        <div
          v-if="fullItemOpen"
          :class="{ openRight: fullItemOpen }"
          class="right-menu"
        >
          <div class="cross-div">
            <img
              class="cross"
              src="../src/sourse/icons/cross.svg"
              alt="image"
              @click="fullClose"
            />
          </div>
          <img :src="ClickElement?.img" alt="image" />
          <div class="line"></div>
          <h2>Lorem ipsum, dolor.</h2>
          <p>
            Lorem ipsum, dolor amet consectetur sitt adisiciing elit. Officia
            error illo proiivident constetur porro pariatur suutreyh.
          </p>
          <div class="line"></div>
          <button @click="openModal">Удалить предмет</button>
        </div>
      </div>
    </div>
    <GhostElement />
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';
import GhostElement from './components/GhostElement.vue';
import ModalItem from './components/UI/ModalItem.vue';
import { ref } from 'vue';

export default {
  data() {
    return {
      fullItemOpen: false,
      ClickElement: {},
      openModalWindow: false,
    };
  },

  components: { SideBar, GhostElement, ModalItem },
  methods: {
    openRightMenu(item) {
      this.fullItemOpen = true;
      this.ClickElement = item;
    },
    fullClose() {
      this.fullItemOpen = false;
      this.openModalWindow = false;
    },
    openModal() {
      this.openModalWindow = true;
    },
    closeModal() {
      this.openModalWindow = false;
    },
    deleteCount(count) {
      this.items.forEach((el, i) => {
        if (el === this.ClickElement) {
          this.items[i].count = this.items[i].count - count;
        }
      });
      this.openModalWindow = false;
      this.fullItemOpen = false;
    },
  },

  setup() {
    const items = ref([
      { id: 1, img: require('../src/sourse/item1.png'), count: 4 },
      { id: 2, img: require('../src/sourse/item2.png'), count: 2 },
      { id: 3, img: require('../src/sourse/item3.png'), count: 5 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
      { id: 12 },
      { id: 13 },
      { id: 14 },
      { id: 15 },
      { id: 16 },
      { id: 17 },
      { id: 18 },
      { id: 19 },
      { id: 20 },
      { id: 21 },
      { id: 22 },
      { id: 23 },
      { id: 24 },
      { id: 25 },
    ]);

    function onDrug(event, item) {
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('itemId', item.id.toString());
    }
    function onDrop(event) {
      const itemId = parseInt(event.dataTransfer.getData('itemId'));
      const dropId = event.srcElement.__vnode.key;
      [items.value[itemId - 1], items.value[dropId - 1]] = [
        items.value[dropId - 1],
        items.value[itemId - 1],
      ];
      [items.value[itemId - 1].id, items.value[dropId - 1].id] = [
        items.value[dropId - 1].id,
        items.value[itemId - 1].id,
      ];
      localStorage.items = JSON.stringify(items.value);
    }
    return {
      items,
      onDrug,
      onDrop,
    };
  },
  mounted() {
    if (localStorage.items) {
      this.items = JSON.parse(localStorage.items);
    }
  },
};
</script>

<style lang="scss">
#app {
  background: #1e1e1e;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper {
  width: 849px;
  margin: 0 auto;
  background: inherit;
  height: 660px;
  padding: 32px;
}
.flex {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}

.inventory {
  width: 525px;
  height: 500px;
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
  .inventory__elem {
    width: 20%;
    height: 20%;
    border: 1px solid #4d4d4d;
    position: relative;
    .inventory__count {
      width: 16px;
      height: 16px;
      position: absolute;
      bottom: 0;
      right: 0;
      font-family: 'Inter';
      font-weight: 500;
      font-size: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      opacity: 0.4;
      border: 1px solid #4d4d4d;
      border-radius: 6px 0px 0px 0px;
    }
  }
  .conteiner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
.right-menu {
  width: 250px;
  height: 500px;
  position: absolute;
  right: -250px;
  top: 0;
  background: rgba(38, 38, 38, 0.5);
  border-left: 1px solid #4d4d4d;
  backdrop-filter: blur(8px);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  .cross-div {
    display: flex;
    justify-content: end;
    width: 100%;
    .cross {
      width: 12px;
      cursor: pointer;
      margin-bottom: 24px;
    }
  }
  img {
    width: 130px;
    margin-bottom: 30px;
  }
  .line {
    width: 220px;
    height: 1px;
    background: #4d4d4d;
    margin-bottom: 16px;
  }
  h2 {
    width: 190px;
    height: 26px;
    font-size: 18px;
    border-radius: 8px;
    text-align: center;
    padding-top: 4px;
    margin-bottom: 20px;
    opacity: 0.4;
  }
  p {
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    opacity: 0.4;
  }
  button {
    width: 220px;
    height: 39px;
    background: #fa7272;
    border-radius: 8px;
    font-family: 'Inter';
    font-size: 14px;
    color: #ffffff;
  }
}
.openRight {
  animation: open 1s ease-in-out both;
}
@keyframes open {
  0% {
    right: -250px;
  }
  100% {
    right: 0;
  }
}
</style>

<!-- РАБОЧИЙ

if (itemId != dropId) {
        [items.value[itemId - 1], items.value[dropId - 1]] = [
          items.value[dropId - 1],
          items.value[itemId - 1],
        ];
        [items.value[itemId - 1].id, items.value[dropId - 1].id] = [
          items.value[dropId - 1].id,
          items.value[itemId - 1].id,
        ];
      } -->
