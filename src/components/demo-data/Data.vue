<script>
export default {
  data() {
    return {
      message: "Hello, Vue!"
    }
  },
  created() {
    console.log(this.$data.message); // 输出: Hello, Vue!
  }
}
</script>

<template>
  <div>
    <div>demo: data</div>
    <div>data的数据是: {{ message }}</div>
  </div>
</template>

<style scoped>

</style>

