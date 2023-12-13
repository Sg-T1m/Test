<template>
    <div>
        <p class="HeaderText">
            <slot></slot>
        </p>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Prosto+One&family=Raleway&family=Roboto:ital,wght@1,900&display=swap');
.HeaderText {
    font-family: 'Prosto One', sans-serif;
    font-size: 40px;
    font-weight: 400;
    line-height: 48px;
    text-align: left;
    color: #000000;
}
</style>
