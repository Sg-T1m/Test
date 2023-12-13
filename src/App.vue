<template>
  <main class="main">
    <FirstNavBarTop></FirstNavBarTop>
    <SecondNavBar></SecondNavBar>
    <router-view />

  
  
  </main>
</template>
<script lang="ts" setup>
import FirstNavBarTop from "./components/NavFirst/FirstNavBarTop.vue";
import SecondNavBar from "./components/NavSecond/SecondNavBar.vue";

import { onBeforeMount, ref } from "vue";
import store from "./store";

onBeforeMount(()=>{
  store.dispatch('checkAuth', localStorage.getItem('token'))
})
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Prosto+One&family=Raleway&family=Roboto:ital,wght@1,900&display=swap');

* {
  padding: 0;
  margin: 0;
  border: 0;
}

*,
:after,
:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:active,
:focus {
  outline: none;
}

a:active,
a:focus {
  outline: none;
}

aside,
footer,
header,
nav {
  display: block;
}

body,
html {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

button,
input,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

.main {
  width: 100%;
  background-color: #F2F5F7;
}

body {
  background-color: #F2F5F7;
}
</style>
