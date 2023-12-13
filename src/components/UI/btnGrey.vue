<template>
    <div>
        <button class="ContainerBtnRegistration"><slot></slot></button>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Prosto+One&family=Raleway&family=Roboto:ital,wght@1,900&display=swap');
.ContainerBtnRegistration {
        width: 100%;
        height: 50px;
        background: #212526;
        color: #ffffff;
        font-family: Raleway;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;

    }
    .ContainerBtnRegistration:hover{
        background: #F05A00;

    }
</style>
