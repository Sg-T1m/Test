<template>
  <p class="TextMoreUI"><slot></slot></p>
</template>
<script>
export default {
  name: "TextMore",
};
</script>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.TextMoreUI {
  color: rgba(255, 255, 255, 1);

  font-family: Raleway;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;

}
</style>