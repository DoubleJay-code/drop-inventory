import { createStore } from 'vuex';

export default createStore({
  state: {
    openRightModel: false,
    openBottomModel: false,
    clickElement: {},
    items: [
      { id: 1, img: '../sourse/item1.png', count: 4 },
      { id: 2, img: '../sourse/item2.png', count: 2 },
      { id: 3, img: '../sourse/item3.png', count: 5 },
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
    ],
  },
  getters: {},
  mutations: {
    openRightMenu(state, item) {
      state.clickElement = item;
      if (item.img) {
        state.openRightModel = true;
      }
    },
    closeRightModel(state) {
      state.openRightModel = false;
      state.openBottomModel = false;
    },
    openBottomModal(state) {
      state.openBottomModel = true;
    },
    closeBottomModal(state) {
      state.openBottomModel = false;
    },
    /* onDrug(event, item) {
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('itemId', item.id.toString());
    },
    onDrop(event) {
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
    }, */
  },
  actions: {},
});
