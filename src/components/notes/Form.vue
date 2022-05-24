<template lang="pug">
form(@submit.prevent="onSubmit")
  textarea(
    required
    v-model=value
    placeholder="Введите заметку")
  button(type="submit") Добавить заметку

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Form",
  setup()  {
    return {
      value : ''
    }
  }
}
</script>

<style scoped>

</style>