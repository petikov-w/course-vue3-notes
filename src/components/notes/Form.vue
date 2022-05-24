<template lang="pug">
.note-form__wrapper
  form(class="note-form" @submit.prevent="onSubmit")
    textarea(
      required
      v-model="input_value"
      placeholder="Введите заметку")
    button(class="btn btn-primary" type="submit") Добавить заметку

</template>

<script>
import {ref} from "vue";

export default {
  name: "vForm",
  setup()  {
    let input_value = ref('');
    const onSubmit = () => {
      this.$emit("onSubmit",input_value.value)
      input_value.value = "";
      console.log(input_value.value)};

    return {
      input_value,
      onSubmit
    }
  }
}
</script>

<style lang="scss" scoped>
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  .note-form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 100%;
  }
}
</style>