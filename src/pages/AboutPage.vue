<template lang="pug">

h1.article-title {{ content.article01.title }}
ul(v-for="(item,index) in content.article01.list_task" :key="index")
  li {{ item }}
.gdd
  p {{ content.article01.subtitle }}
  a(:href = 'link') {{ content.article01.kurs.title }}

</template>

<script>
import {contentAbout} from "@/_config";
export default {
  name: "AboutPage",
  data() {
    return {
      content: contentAbout,
      link: contentAbout.article01.kurs.link
    }
  },
}
</script>

<style lang="scss" scoped>
    ul {
      margin-left: 40px;
    }
    li {
      list-style-type: disc;
      margin-top: 15px;
    }
    p {
      display: inline;
    }
    a {
      margin-left: 10px;
      color: blue;
      border-bottom: 2px solid blue;
      padding-bottom: 5px;
      //opacity: 0.7;
    }
    .gdd {
      margin-top: 20px;
    }
</style>