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
      </div>
    </div>
    <GhostElement />
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';
import GhostElement from './components/GhostElement.vue';
import { ref } from 'vue';

export default {
  data() {
    return {
      fullItemOpen: false,
    };
  },

  components: { SideBar, GhostElement },

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
      if (itemId != dropId) {
        [items.value[itemId - 1], items.value[dropId - 1]] = [
          items.value[dropId - 1],
          items.value[itemId - 1],
        ];
        [items.value[itemId - 1].id, items.value[dropId - 1].id] = [
          items.value[dropId - 1].id,
          items.value[itemId - 1].id,
        ];
      }
    }
    return {
      items,
      onDrug,
      onDrop,
    };
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
