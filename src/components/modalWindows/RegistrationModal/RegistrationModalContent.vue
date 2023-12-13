<template>
    <div class="loginMidalContetn">
        <div class="loginMidalContetnTextheader">
            <p>Регистрация</p>
        </div>
        <div class="loginMidellContetnInputs">

            <div class="loginMidellContetnInputsBlocks">
                <TextRegistrationAndLogin>Фамилия</TextRegistrationAndLogin>
                <InputMore v-model="RegistrationData.SName.value"></InputMore>
            </div>

            <div class="loginMidellContetnInputsBlocks">
                <TextRegistrationAndLogin>Имя</TextRegistrationAndLogin>
                <InputMore v-model="RegistrationData.Name.value"></InputMore>
            </div>

            <div class="loginMidellContetnInputsBlocks">
                <TextRegistrationAndLogin>Отчество</TextRegistrationAndLogin>
                <InputMore v-model="RegistrationData.MidellName.value"></InputMore>
            </div>

            <div class="loginMidellContetnInputsBlocks">
                <TextRegistrationAndLogin>Логин</TextRegistrationAndLogin>
                <InputMore v-model="RegistrationData.Login.value"></InputMore>
            </div>

            <div class="loginMidellContetnInputsBlocks">
                <TextRegistrationAndLogin>Пароль</TextRegistrationAndLogin>
                <InputMore v-bind:type="TypePassword" v-model="RegistrationData.Password.value"></InputMore>
            </div>

            <div class="loginMidellContetnInputsBlocks">
                <TextRegistrationAndLogin>Подтверждение паролся</TextRegistrationAndLogin>
                <InputMore v-bind:type="TypePassword" v-model="RegistrationData.PasswordConfirmation.value"></InputMore>
            </div>
        </div>
        <div class="LoginModalContentContainerBtn">
            <div><btnGrey @click="PostRegistrationData()">Зарегистрироваться</btnGrey></div>
            <div class="btnLogin"><btnGrey @click="OpenLoginModal()">Войти</btnGrey></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import InputMore from '@/components/UI/InputMore.vue';
import TextRegistrationAndLogin from '@/components/UI/TextRegistrationAndLogin.vue';
import btnGrey from '@/components/UI/btnGrey.vue';



import { ref } from 'vue';
import setIdMixin from '@/mixins/setIdMixin';
import { mixins } from 'vue-class-component';
import { RegistrationDataUser } from '@/interface/RegistrationDataUserInterface';
import store from '@/store';
const TypePassword = ref<string>("password")

mixins: [setIdMixin];
const emit = defineEmits([
    'update:show',
    'update:showLogin'
])
const props = withDefaults(defineProps<props>(), {
    show: false,
    showLogin: false
})
interface props {
    show: boolean
    showLogin: boolean
}
const RegistrationData = {
    Name: ref<string>(""),
    SName: ref<string>(""),
    MidellName: ref<string>(""),
    Login: ref<string>(""),
    Password: ref<string>(""),
    PasswordConfirmation: ref<string>(""),
    id: ref<number>(setIdMixin.methods.SetId())
}

var RegistrationDataUser: RegistrationDataUser = {
    Id: 0,
    PersonalDataId: 0,
    Login: "",
    UserId: 0,
    Password: "",
    TypeUsers: "",
    Name: "",
    Sname: "",
    MidellName: "",


}
function PostRegistrationData() {
    RegistrationDataUser = {
        Id: RegistrationData.id.value,
        PersonalDataId: RegistrationData.id.value,
        Login: RegistrationData.Login.value,
        UserId: RegistrationData.id.value,
        Password: RegistrationData.Password.value,
        TypeUsers: "User",
        Name: RegistrationData.Name.value,
        Sname: RegistrationData.SName.value,
        MidellName: RegistrationData.MidellName.value,


    }
    store.dispatch('fetchRegistration', RegistrationDataUser)
    console.log("улетел в стор")

    emit('update:show', false)
}
function OpenLoginModal() {
    emit('update:show', false)
    emit('update:showLogin', true)
}
</script>
<style lang="scss" scoped>
.loginMidalContetn {
    @import url('https://fonts.googleapis.com/css2?family=Lato&family=Prosto+One&family=Raleway:wght@500&family=Roboto:ital,wght@1,900&display=swap');
    width: 310px;


    margin: 0 auto;

    .loginMidalContetnTextheader {

        font-family: 'Prosto One', sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
        color: #000000;



    }

    .loginMidellContetnInputs {
        margin-top: 50px;
    }
}

.LoginModalContentContainerBtn {
    margin-top: 40px;

    .ContainerBtnRegistration {
        width: 309px;
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
}

.loginMidellContetnInputsBlocks {
    margin-top: 15px;
}
.btnLogin{
    margin-top: 20px;
}
</style>