<template>
  <div class="ghost">
    <input type="text" />
    <img src="@/sourse/icons/cross.svg" alt="cross" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.ghost {
  width: 785px;
  height: 72px;
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  padding: 18px;
  display: flex;
  position: relative;
  input {
    background: linear-gradient(
      90deg,
      #3c3c3c 0%,
      #444444 51.04%,
      #333333 100%
    );
    border-radius: 12px;
    width: 100%;
    height: 100%;
    margin-right: 42px;
    padding: 15px;
    color: #ffffff;
    opacity: 0.4;
  }
  img {
    width: 12px;
    position: absolute;
    right: 14px;
    top: 14px;
    cursor: pointer;
  }
}
</style>
