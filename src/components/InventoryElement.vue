<template>
  <div
    v-for="item in items"
    :key="item?.id"
    class="inventory__elem droppable"
    @drop="$emit('ondrop', $event)"
    @dragover.prevent
    @dragenter.prevent
    @click="$store.commit('openRightMenu', item)"
  >
    <div
      @dragstart="$emit('ondrag', $event, item, items)"
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
</template>

<script>
export default {
  props: {
    items: Array,
  },
};
</script>

<style lang="scss" scoped>
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
  img {
    width: 70%;
  }
}
</style>
