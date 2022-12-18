<template>
  <div class="wrapper">
    <div class="flex">
      <SideBar />
      <div class="inventory">
        <InventoryElement
          :items="this.items"
          @ondrop="onDrop"
          @ondrag="onDrag"
        />
        <ModalItem
          @delete="
            () => {
              deleteCount(count);
              $store.commit('closeRightModel');
            }
          "
        />
        <ModelRight />
      </div>
    </div>
    <GhostElement />
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';
import GhostElement from './components/GhostElement.vue';
import ModalItem from './components/UI/ModalItem.vue';
import ModelRight from './components/ModelRight.vue';
import InventoryElement from './components/InventoryElement.vue';
import { ref } from 'vue';

export default {
  data() {
    return {
      clickElem: this.$store.state.clickElement,
    };
  },
  components: {
    SideBar,
    GhostElement,
    ModalItem,
    ModelRight,
    InventoryElement,
  },
  methods: {
    deleteCount() {
      this.items = this.items.map((el, i) => {
        if (el === this.$store.state.clickElement) {
          return { ...el, count: el.count - this.$store.state.inputCount };
        } else {
          return el;
        }
      });
    },
  },

  setup() {
    const items = ref([
      { id: 1, img: require('../src/sourse/meat.png'), count: 4 },
      { id: 2, img: require('../src/sourse/sword_icon.png'), count: 2 },
      { id: 3, img: require('../src/sourse/gold_Ingot.png'), count: 5 },
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

    function onDrag(event, item) {
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
      onDrag,
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
}
</style>
