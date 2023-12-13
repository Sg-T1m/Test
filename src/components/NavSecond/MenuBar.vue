<template>
  <div @click="$router.push('/Catalog')" class="MenuBarContent">
    <img src="@/assets/Burger.svg" alt="" />
    <TextWhiteMore   >Каталог товаров</TextWhiteMore>
  </div>
</template>
<script lang="ts" setup>
import TextWhiteMore from "../UI/TextWhiteMore.vue";
</script>
<style lang="scss" scoped>
.MenuBarContent {
  width: 200px;
  padding: 16px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
}
.MenuBarContent:hover{
    border: 1px solid rgba(240, 90, 0, 1);
    cursor: pointer;
}
</style>