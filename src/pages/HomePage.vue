<template lang="pug">
.md-body
  Form(@onSubmit="handleSubmit()")
</template>

<script>
import {ref} from "vue";
import Form from "@/components/notes/Form";

export default {
  name: "HomePage",
  components: {Form},
  setup() {
    const title = ref('Привет');
    const handleSubmit = (note) => { console.log(note)};

    return {title, handleSubmit}
  }

}
</script>

<style lang="scss" scoped>

</style>