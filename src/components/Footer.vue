<template lang="pug">
footer.footer
  .container
    ul.navbar-list
      li(class="navbar-item" v-for="link in links" :key="link.alias")
        router-link(class="navbar-link" :to="link.url") {{ link.title }}
</template>

<script>
import {listNavMenu} from "@/_config"
export default {
  name: 'Footer-m',
  data() {
    return {
      links: listNavMenu,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>