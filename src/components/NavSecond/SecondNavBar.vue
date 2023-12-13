<template>
  <div class="main">
    <div class="MainContent">
      <div>
        <TextBtnNav></TextBtnNav>
      </div>
      <div>
        <inputSearch></inputSearch>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import TextBtnNav from "./TextBtnNav.vue";
import inputSearch from "../UI/inputSearch.vue";
</script>
<style lang="scss" scoped>
.main {
  height: 88px;
  width: 100vw;
  background: rgba(0, 0, 0, 1);
  .MainContent {
    width: 1300px;
    height: 88px;
    margin: 0 auto;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
}
</style>