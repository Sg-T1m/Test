<template>
  <div class="TextBtnContant">
    <div>
      <Menubar></Menubar>
    </div>
    <div class="SecondPartmeny">
      <div>
        <RestBtn>О компании</RestBtn>
      </div>
      <div>
        <RestBtn>Акции</RestBtn>
      </div>
      <div>
        <RestBtn>Хиты сезона</RestBtn>
      </div>
      <div>
        <RestBtn>Новинки</RestBtn>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Menubar from "./MenuBar.vue";
import RestBtn from "./RestBtn.vue";
</script>
<style lang="scss" scoped>
.TextBtnContant {
  width: 730px;
  height: 88px;
  align-items: center;
  justify-content: space-between;
  display: flex;

}
.SecondPartmeny {
  display: flex;
  align-items: center;
  width: 500px;
  justify-content: space-between;

}
</style>