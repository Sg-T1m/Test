<template>
    <div class="MainPageProfile">
        <div class="MainPageProfileHeader">
            <HeaderText>Личный Кабинет</HeaderText>
        </div>
        <div class="MainPageProfileContent">
            <div>
                <NavBarProfilePage />
            </div>
            <div>
                <div>
                    <PersonalDataProfilePage v-model:personalData="personalData" />
                </div>

                <div>
                    <ChangePasswordProfilePage />
                </div>
            </div>

        </div>
        <div class="btnLogout">
            <btnGrey @click="logout">Выйти</btnGrey>
        </div>
    </div>
</template>
<script lang="ts" setup>
import NavBarProfilePage from '@/components/componentsProfilePage/NavBarProfilePage.vue';
import PersonalDataProfilePage from '@/components/componentsProfilePage/PersonalDataProfilePage.vue';
import HeaderText from '@/components/UI/HeaderText.vue';
import ChangePasswordProfilePage from '@/components/componentsProfilePage/ChangePasswordProfilePage.vue';
import { onBeforeMount, ref } from 'vue';
import { GetReqest } from '@/utils/requestServices/RequestServices';
import store from '@/store';
import btnGrey from '@/components/UI/btnGrey.vue';
const personalData = ref<PersonalDataUser>(
    {
        Id: 0,
        Login: 'string',
        TypeUsers: 'string',
        Name: 'string',
        Sname: 'string',
        MidellName: 'string'
    }
)


import { PersonalDataUser } from "@/interface/personalDataUser";
import router from '@/router';
onBeforeMount(async () => {

    const response = await GetReqest(
        "https://localhost:7217/api/DataUsers",
        localStorage.getItem('token')!
    );
    if (response.status > 200) {
        store.commit("SetAuthStatus", false);
        store.commit("SetRoleUser", "guest");
    } else {

        personalData.value.Id = response.data[0].Id
        personalData.value.Login = response.data[0].Login
        personalData.value.TypeUsers = response.data[0].TypeUsers
        personalData.value.Name = response.data[0].Name
        personalData.value.Sname = response.data[0].Sname
        personalData.value.MidellName = response.data[0].MidellName

    }
})
function logout() {
    store.commit("SetAuthStatus", false);
    store.commit("SetRoleUser", "guest");
    localStorage.setItem('token', '')
    router.push('/')
}
</script>
<style lang="scss" scoped>
.MainPageProfile {
    margin: 0 auto;
    max-width: 1300px;

    padding-top: 50px;
}

.MainPageProfileContent {
    display: flex;
    justify-content: space-between;
    margin-top: 33px;
}

.btnLogout {
    margin: 0 auto;
    width: 400px;
}
</style>