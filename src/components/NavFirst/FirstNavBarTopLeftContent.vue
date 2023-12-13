<template>
  <div class="FirstNavTopContentLeft">
    <img src="@/assets/Logo.svg" alt="Logo" @click="$router.push('/')" />

    <div class="FirstNavTopContentLeftTimeWorck">
      <TextWhiteMore>Время работы: 10:00–20:00</TextWhiteMore>
    </div>
    <div class="FirstNavTopContentLeftNumber">
      <TextWhiteMore>+7 495 120-32-14</TextWhiteMore>
      <p class="FirstNavTopContentLeftNumberTextBott">Заказать звонок</p>
    </div>
    <InputMore></InputMore>
  </div>
</template>
<script lang="ts" setup>
import TextWhiteMore from "../UI/TextWhiteMore.vue";

components: {
  TextWhiteMore;
}
</script>
<style lang="scss" scoped>
.FirstNavTopContentLeft {
  width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  .FirstNavTopContentLeftNumberTextBott {
    font-family: Raleway;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    text-align: left;
    color: rgba(252, 87, 59, 1);
    margin-top: 5px;
    width: 100px;
    align-items: center;
  }
}

.FirstNavTopContentLeftNumberTextBott:hover {
  border-bottom: 1px solid rgba(252, 87, 59, 1);
}
</style>