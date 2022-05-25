<template lang="pug">
.md-body
  Form(@onSubmit="handleSubmit")
  List(@onRemove="handleRemove" :items="items")
</template>

<script>
import {ref} from "vue";
import Form from "@/components/notes/Form";
import List from "@/components/notes/List";

export default {
  name: "HomePage",
  components: {Form, List},
  setup() {
    const items = ref([])
    const handleSubmit = note => items.value.push(note)
    const handleRemove = index => items.value.splice(index, 1)
    return {items,handleSubmit, handleRemove}
  }
}

</script>

<style lang="scss" scoped>

</style>