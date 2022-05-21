<template lang="pug">
header.navbar
  .container
    .navbar-content
      router-link(class="navbar-logo" to="/") {{ logo }}
      ul.navbar-list
        li(class="navbar-item" v-for="link in links" :key="link.alias")
          router-link(class="navbar-link" :to="link.url") {{ link.title }}
</template>

<script>
import {listNavMenu, site} from "@/_config"
export default {
  name: 'Header-m',
  data() {
    return {
      links: listNavMenu,
      logo: site.title
    }
  }
}
</script>

<style lang="scss" scoped>

</style>