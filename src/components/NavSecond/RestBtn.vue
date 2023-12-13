<template>
     <div class="RestBtnContent">
  
    <TextWhiteMore> <slot></slot> </TextWhiteMore>
  </div>
</template>
<script lang="ts" setup>
import TextWhiteMore from "../UI/TextWhiteMore.vue";
</script>
<style lang="scss" scoped>
.RestBtnContent {

  padding: 16px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;

}
.RestBtnContent:hover{
    border: 1px solid rgba(240, 90, 0, 1);
    cursor: pointer;
}
</style>