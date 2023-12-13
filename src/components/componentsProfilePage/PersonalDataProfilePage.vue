<template>
    <div class="personalDataProfilePage">
        <div class="personalDataProfilePageHeader">
            <p class="personalDataProfilePageHeaderText">Личные данные</p>
        </div>
        <div class="personalDataProfilePageBlock">
            <div class="personalDataProfilePageBlockLeft">

                <div class="personalDataProfilePageInputs">

                    <TextRegistrationAndLogin>Фамилия</TextRegistrationAndLogin>
                    <InputMore v-model="props.personalData.Sname" />
                </div>
                <div class="personalDataProfilePageInputs">
                    <TextRegistrationAndLogin>Имя</TextRegistrationAndLogin>
                    <InputMore v-model="props.personalData.Name" />
                </div>
                <div class="personalDataProfilePageInputs">
                    <TextRegistrationAndLogin>Отчество</TextRegistrationAndLogin>
                    <InputMore v-model="props.personalData.MidellName" />
                </div>
                <div class="personalDataProfilePageInputs">
                    <TextRegistrationAndLogin>Логин</TextRegistrationAndLogin>
                    <InputMore v-model="props.personalData.Login" />
                </div>
            </div>
            <div class="personalDataProfilePageBlockRight">
                <div class="personalDataProfilePageInputs">

                    <TextRegistrationAndLogin>Город</TextRegistrationAndLogin>
                    <InputMore />
                </div>
                <div class="personalDataProfilePageInputs">
                    <TextRegistrationAndLogin>улица</TextRegistrationAndLogin>
                    <InputMore />
                </div>
                <div class="personalDataProfilePageInputs">
                    <TextRegistrationAndLogin>дом</TextRegistrationAndLogin>
                    <InputMore />
                </div>
                <div class="personalDataProfilePageInputs">
                    <TextRegistrationAndLogin>квартира</TextRegistrationAndLogin>
                    <InputMore />
                </div>
            </div>
        </div>
      
    </div>
</template>
<script lang="ts" setup>
import InputMore from "@/components/UI/InputMore.vue";
import TextRegistrationAndLogin from "@/components/UI/TextRegistrationAndLogin.vue";
import { PersonalDataUser } from "@/interface/personalDataUser";
const props = withDefaults(defineProps<props>(), {
    personalData: () => {
        return {
            Id: 0,
            Login: '',
            TypeUsers: '',
            Name: '',
            Sname: '',
            MidellName: ''
        }
    }
})
interface props {

    personalData: PersonalDataUser
}
function Test() {
    console.log(props.personalData.Sname)
}

</script>
<style lang="scss" scoped>
.personalDataProfilePage {
    width:
        970px;
    background: #FFFFFF;
    padding: 40px 48px;
}

.personalDataProfilePageHeaderText {

    font-family: Prosto One;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

}

.personalDataProfilePageBlock {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
}

.personalDataProfilePageBlockLeft,
.personalDataProfilePageBlockRight {
    width: 310px;
}

.personalDataProfilePageInputs {
    margin-top: 20px;
}
</style>