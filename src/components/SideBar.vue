<template>
  <div class="side-bar">
    <img src="@/sourse/sideBar-img.png" alt="image" />
    <h2>Lorem ipsum, dolor.</h2>
    <p>
      Lorem ipsum, dolor amet consectetur sitt adisiciing elit. Officia error
      illo proiivident constetur porro pariatur suutreyh.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.side-bar {
  width: 236px;
  height: 500px;
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 14px 0;
  color: #ffffff;
  img {
    margin-bottom: 20px;
  }
  h2 {
    width: 190px;
    height: 26px;
    font-size: 18px;
    border-radius: 8px;
    text-align: center;
    padding-top: 4px;
    margin-bottom: 24px;
    opacity: 0.4;
  }
  p {
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    opacity: 0.4;
  }
}
</style>
