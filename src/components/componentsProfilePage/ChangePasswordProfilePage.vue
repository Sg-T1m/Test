<template>
    <div class="chagePasswordProfilePage">
        <div class="chagePasswordProfilePageHeader">
            <p class="chagePasswordProfilePageText">Изменение пароля</p>
        </div>
        <div class="chagePasswordProfilePageContent">
            <div class="chagePasswordProfilePageInpust">

                <TextRegistrationAndLogin>Новый пароль</TextRegistrationAndLogin>
                <InputMore />
            </div>
            <div class="chagePasswordProfilePageInpust">

                <TextRegistrationAndLogin>Подтвердить пароль</TextRegistrationAndLogin>
                <InputMore />
            </div>
           
        </div>
    </div>
</template>
<script setup lang="ts">
import InputMore from "@/components/UI/InputMore.vue";
import TextRegistrationAndLogin from "@/components/UI/TextRegistrationAndLogin.vue";
</script>
<style lang="scss" scoped>
.chagePasswordProfilePage {
    width: 970px;
    background: #FFFFFF;
    padding: 40px 48px;

    .chagePasswordProfilePageText {
        font-family: Prosto One;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;

    }

    .chagePasswordProfilePageInpust {
        margin-top: 24px;
        width: 310px;
    }
}
</style>