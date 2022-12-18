<template>
  <div :class="{ open: $store.state.openBottomModel }" class="modal">
    <input v-model="count" placeholder="Введите количество" type="text" />
    <button @click="$store.commit('closeBottomModal')" class="white">
      Отмена
    </button>
    <button @click="$store.commit('closeBottomModal')" class="red">
      Подтвердить
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  z-index: 10;
  right: -2px;
  bottom: -133px;
  width: 252px;
  height: 133px;
  background: rgba(38, 38, 38, 0.6);
  border: 1px solid #4d4d4d;
  backdrop-filter: blur(8px);
  padding: 20px;
  font-size: 14px;
  input {
    display: block;
    width: 100%;
    background: #262626;
    border: 1px solid #4d4d4d;
    border-radius: 4px;
    font-weight: 500;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
    opacity: 0.6;
    padding: 12px 0;
    margin-bottom: 20px;
  }
  .white {
    width: 88px;
    height: 33px;
    background: #ffffff;
    border-radius: 8px;
    color: #2d2d2d;
    margin-right: 10px;
  }
  .red {
    width: 112px;
    height: 33px;
    background: #fa7272;
    border-radius: 8px;
    color: #ffffff;
  }
}
.open {
  animation: open 1s ease-in-out both;
}
@keyframes open {
  0% {
    bottom: -133px;
  }
  100% {
    bottom: 0;
  }
}
</style>
