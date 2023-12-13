<template>
    <div class="productList">

        <div v-for="product in props.CardProduct" class="CardProductBg">
            <div class="CardProductImg">
                <img :src="product.Img" alt="">
            </div>
            <div class="CardProductName">
                {{ product.Name }}
            </div>
            <div class="CardProductFooter">
                <div class="CardProductPrise">
                    {{ product.Price }} ₽
                </div>
                <div class="CardProductInfo">
                    В наличии
                </div>
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
import { IProducts } from '@/interface/IProducts';

const props = withDefaults(defineProps<props>(), {
    CardProduct: () => {
        return [{
            Id: 0,
            CategoriesId: 0,
            Name: "",
            Price: 0,
            UserId: null,
            Img: "",
            Description: "",
            Categories: null,
            User: null
        }]
    }
})
interface props {

    CardProduct: IProducts[]
}
</script>
<style lang="scss" scoped>
.CardProductBg {
    width: 310px;
    height: 340px;
    background: #FFFFFF;
    padding: 10px;
    margin-top: 30px;

}

.CardProductImg {
    width: 100%;
    display: flex;
    justify-content: center;

}

.CardProductImg img {
    width: 212px;
    height: 184px;


}

.CardProductName {
    margin-top: 10px;
    font-family: Raleway;
    font-size: 16px;
    font-weight: 800;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;


}

.CardProductPrise {
    font-family: Raleway;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;


}

.CardProductFooter {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
}

.CardProductInfo {

    font-family: Raleway;
    font-size: 14px;
    font-weight: 800;
    line-height: 16px;
    letter-spacing: 0em;
    color: #126935;




}

.productList {

    width: 1400px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>
