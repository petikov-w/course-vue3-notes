<template lang="pug">
.md-body
  Form
</template>

<script>
import {ref} from "vue";
import Form from "@/components/notes/Form";

export default {
  name: "HomePage",
  components: {Form},
  setup() {
    const title = ref('Привет');


    return { title}
  }

}
</script>

<style lang="scss" scoped>

</style>