<template>
  <div
    v-if="$store.state.openRightModel"
    :class="{ openRight: $store.state.openRightModel }"
    class="right-menu"
  >
    <div class="cross-div">
      <img
        class="cross"
        src="../sourse/icons/cross.svg"
        alt="image"
        @click="$store.commit('closeRightModel')"
      />
    </div>
    <img :src="$store.state.clickElement?.img" alt="image" />
    <div class="line"></div>
    <h2>Lorem ipsum, dolor.</h2>
    <p>
      Lorem ipsum, dolor amet consectetur sitt adisiciing elit. Officia error
      illo proiivident constetur porro pariatur suutreyh.
    </p>
    <div class="line"></div>
    <button @click="$store.commit('openBottomModal')">Удалить предмет</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
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
