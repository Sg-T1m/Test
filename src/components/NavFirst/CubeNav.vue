<template >
  <div class="CubeNavMain">
    <div class="CubeNavContent">
      <img class="img" src="@/assets/Heard.svg" alt="Likes" />
    </div>
    <div class="CubeNavContent">
      <img class="img" src="@/assets/KakaTaHuina.svg" alt="" />
    </div>
    <div @click="ClickProfileBlock()" class="CubeNavContent">
      <img class="img" src="@/assets/Profile.svg" alt="Profile" />
    </div>
    <div class="CubeNavContent">
      <img class="img" src="@/assets/shoppingCart.svg" alt="" />
    </div>
  </div>
  <MyDialog v-model:show="stateModel.showModalRegistration.value">
    <RegistrationModalContent v-model:showLogin="stateModel.showModalLogin.value"
      v-model:show="stateModel.showModalRegistration.value" />
  </MyDialog>
  <MyDialog v-model:show="stateModel.showModalLogin.value">
    <LoginModalContent v-model:showRegistr="stateModel.showModalRegistration.value"
      v-model:show="stateModel.showModalLogin.value" />
  </MyDialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import router from "@/router";

import MyDialog from "../UI/MyDialog.vue";
import RegistrationModalContent from "../modalWindows/RegistrationModal/RegistrationModalContent.vue";
import LoginModalContent from "../modalWindows/LoginModal/LoginModalContent.vue";
import store from "@/store";
import checkAuth from "@/mixins/checkAuth";
import { mixins } from "vue-class-component";
const stateModel = {
  showModalLogin: ref<boolean>(false),
  showModalRegistration: ref<boolean>(false),
}

const showRegistr = ref<boolean>(false)
const showLogin = ref<boolean>(false)


async function ClickProfileBlock(): Promise<void> {

  if (store.getters.getStatusAuts) {
    router.push("/Profile")
  } else {
    stateModel.showModalLogin.value = true

  }

}
</script>
<style lang="scss" scoped>
.CubeNavMain {
  display: flex;
  justify-content: space-between;
  width: 100%;

  .CubeNavContent {
    width: 96px;
    height: 96px;
    background: rgba(59, 59, 59, 1);
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .CubeNavContent:hover {
    background: rgba(240, 90, 0, 1);
  }

}
</style>