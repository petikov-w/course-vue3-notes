<template lang="pug">
.notes-list
  .note-item(v-for="(note, index) in items" :key="index")
    .note-header
      p {{ note }}
      p(style="cursor: pointer;" @click="$emit('onRemove',index)") &#10005

</template>

<script>
export default {
  name: "vList",
  props: {items: {
            item: Array,
            required: true
    }
  }

}
</script>

<style lang="scss" scoped>
//.item-list {
//  padding: 15px 20px;
//  margin-top: 15px;
//  border: 2px solid blue;
//  border-radius: 12px;
//  color: #606266;
//  max-width: 600px;
//  width: 100%;
//}
//.list__wrapper {
//  display: flex;
//  flex-direction: column;
//  align-items: center;
//}
.notes-list {
  padding: 40px 0;
}
.note-item {
  width: 100%;
  padding: 18px 20px;
  margin-bottom: 20px;
  border-radius: 14px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.note-footer {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
</style>