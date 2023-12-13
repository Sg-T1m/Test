<template>
  <div class="LoginModalContentMain">
    <div class="LoginModalHeader">
      <p>Вход</p>
    </div>
    <div class="LoginModalInputContainer">
      <div class="InpustLogin">
        <TextRegistrationAndLogin>Логин</TextRegistrationAndLogin>
        <InputMore v-model="RegistrationData.Login.value"></InputMore>
      </div>
      <div class="InpustLogin">
        <TextRegistrationAndLogin>Пароль</TextRegistrationAndLogin>
        <InputMore v-bind:type="TypePassword" v-model="RegistrationData.Password.value"></InputMore>
      </div>
    </div>
    <div class="BntLogin">
      <btnGrey @click="Login()">Вход</btnGrey>
    </div>
    <div class="BntRegistr">
      <btnGrey @click="Registration()">Регистрация</btnGrey>
    </div>
    <div class="ErrorMessenge" v-if="ErrorMessenge">Неверный логин или пароль</div>
  </div>
</template>
<script lang="ts" setup>
import InputMore from "@/components/UI/InputMore.vue";
import TextRegistrationAndLogin from "@/components/UI/TextRegistrationAndLogin.vue";
import btnGrey from "@/components/UI/btnGrey.vue";

import { ref } from "vue";

import { LoginPostReqiest } from "@/utils/requestServices/RequestServices";


const ErrorMessenge = ref<boolean>(false)

const TypePassword = ref<string>("password");
const emit = defineEmits([
  'update:show',
  'update:showRegistr'
])


const props = withDefaults(defineProps<props>(), {
  show: false,
  showRegistr: false
})

const RegistrationData = {
  Login: ref<string>(""),
  Password: ref<string>(""),

};

import { loginData } from "@/interface/LoginData";
import store from "@/store";

async function Login(): Promise<void> {

  var data: loginData = {
    Username: RegistrationData.Login.value,
    Password: RegistrationData.Password.value
  }
  store.dispatch('authAction', data)
  var response = await LoginPostReqiest("https://localhost:7217/api/Login?", data)
  if (response.status > 200) {
    store.dispatch('authAction', response)
    console.log("Ошибка")
    ErrorMessenge.value = true;

  } else {
    store.dispatch('authAction', response)
    console.log(response.data)
    ErrorMessenge.value = false;
    emit('update:show', false)
  }
}
function Registration() {
  emit('update:show', false)
  emit('update:showRegistr', true)
}




interface props {
  show: boolean
  showRegistr: boolean
}
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Prosto+One&family=Raleway:wght@500&family=Roboto:ital,wght@1,900&display=swap");

.LoginModalHeader {
  text-align: center;
  font-family: Prosto One;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;

}

.LoginModalContentMain {
  padding: 100px;
}

.LoginModalInputContainer {

  margin: 0 auto;
}

.InpustLogin {
  margin-top: 50px;
}

.BntLogin {
  margin-top: 40px;

}

.BntRegistr {
  margin-top: 25px;
}
</style>
