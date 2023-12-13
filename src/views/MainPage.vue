<template>
  <div class="mainPage">

    <CardProduct v-model:CardProduct="product"></CardProduct>

  </div>
</template>
<script lang="ts" setup>
import { Options, Vue } from 'vue-class-component';
import CardProduct from '@/components/UI/CardProduct.vue';
import { onBeforeMount, ref } from 'vue';
import { IProducts } from '@/interface/IProducts';
import { GetReqestNoAutg } from '@/utils/requestServices/RequestServices';
const product = ref<IProducts[]>(
  [{
    Id: 0,
    CategoriesId: 0,
    Name: "",
    Price: 0,
    UserId: null,
    Img: "",
    Description: "",
    Categories: null,
    User: null
  }])
var products: IProducts[]
onBeforeMount(async () => {
  const response = await GetReqestNoAutg(
    "https://localhost:7217/api/Product"

  );
  if (response.status > 200) {
    console.log("ошибка")
    console.log(response.status)
  } else {

    product.value = response.data;


  }
})

</script>

<style>
.mainPage {
  margin: 0 auto;
  max-width: 1300px;
}
</style>