<template>
    <div class="NavBarProfilePage">
        <div class="NavBarProfilePageHistoruBtn">
            <p class="NavBarProfilePageText">История заказов</p>
        </div>
        <div class="NavBarProfilePagePersonalData">
            <p class="NavBarProfilePageText">Личная информация</p>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.NavBarProfilePage {
    width: 310px;
    height: 144px;
    border-radius: 5px;
    background: #212526;

}

.NavBarProfilePageHistoruBtn,
.NavBarProfilePagePersonalData {
    height: 72px;
    width: 100%;
    display: flex;
    align-items: center;

    border-bottom: 1px solid #3B3B3B;
    padding-left: 24px;
}

.NavBarProfilePageText {
    color: #ffffff;
    font-family: Prosto One;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
}

.NavBarProfilePageHistoruBtn:hover .NavBarProfilePageText,
.NavBarProfilePagePersonalData:hover .NavBarProfilePageText {
    color: #F05A00;

}

.NavBarProfilePageHistoruBtn:hover,
.NavBarProfilePagePersonalData:hover {
    cursor: pointer;
}
</style>