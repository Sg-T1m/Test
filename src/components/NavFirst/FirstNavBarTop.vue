<template>
  <div class="FirstNavTop">
    <div class="FirstNavTopMain">
      <div>
        <FirstNavBarTopLeftContent></FirstNavBarTopLeftContent>
      </div>
  <div>
    <FirstNavBarTopRightContent></FirstNavBarTopRightContent>
  </div>
 
    </div>
  </div>
</template>
<script lang="ts" setup>

import FirstNavBarTopLeftContent from "./FirstNavBarTopLeftContent.vue";
import FirstNavBarTopRightContent from "./FirstNavBarTopRightContent.vue";

</script>
<style lang="scss" scoped>
.FirstNavTop {
  background: rgba(33, 37, 38, 1);
  height: 96px;
  width: 100vw;

  .FirstNavTopMain {
    width: 1300px;
    margin: 0 auto;
  
    display: flex;
    justify-content: space-between;
  }
}
.FirstNavTopContentLeft {
  width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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