<template lang="pug">
.is404 404
.title Страница не найдена
.btn-main
  router-link(to="/" class="btn btnPrimary") Вернуться на главную
</template>

<script>
export default {
  name: "NotFoundPage"
}
</script>

<style scoped>
    .is404 {
      font-size: 200px;
      font-weight: 900;
      text-align: center;
      margin-bottom: -20px;
    }
    .title {
      text-align: center;
      color: #ec9b3b;
      font-size: 36px;
    }
    .btn-main {
      text-align: center;
      margin-top: 40px;
    }

</style>