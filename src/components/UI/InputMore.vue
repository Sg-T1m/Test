<template>
  <input :type="props.type" :value="props.modelValue" @input="updateInput" class="InputRegistrationAndLogin" />
</template>
<script lang="ts" setup>

const emit = defineEmits([
'update:modelValue', 
])
const props = withDefaults(defineProps<props>(), {
  modelValue: "",
  type: "text"
})
interface props{
  modelValue: string
  type: string
}
function updateInput(event:any): void{
  emit('update:modelValue', event.target.value )

}

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Prosto+One&family=Raleway&family=Roboto:ital,wght@1,900&display=swap');
.InputRegistrationAndLogin {
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  height: 30px;
  border-bottom: 1px solid rgba(222, 219, 219, 1);
  width: 100%;
}
.InputRegistrationAndLogin:focus{
    border-bottom: 1px solid rgba(0, 0, 0, 1);
  
}
</style>