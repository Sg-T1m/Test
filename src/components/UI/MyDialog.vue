<template>
    <div class="ModalBaground" v-if="props.show" @click="emit('update:show', false)">
        <div @click.stop class="ModalMain">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>



const emit = defineEmits([
    'update:show'
])
const props = withDefaults(defineProps<props>(), {
    show: false
})
interface props {
    show: boolean
}

</script>
<style lang="scss" scoped>
.ModalBaground {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}

.ModalMain {
    width: 630px;
    border-radius: 5px;
    border: Mixed solid rgba(222, 219, 219, 1);
    background:
        #FFFFFF;
    margin: 0 auto;
    margin-top: 169px;
    padding-top: 40px;
    height: 700px;
}
</style>
  
