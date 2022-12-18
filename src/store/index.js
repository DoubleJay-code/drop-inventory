import { createStore } from 'vuex';

export default createStore({
  state: {
    openRightModel: false,
    openBottomModel: false,
    clickElement: {},
    inputCount: 0,
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
    inputCount(state, event) {
      state.inputCount = Number(event.target.value);
    },
  },
  actions: {},
});
