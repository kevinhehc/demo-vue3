<script>
export default {
  props: {
    msg: {
      type: String,
      required: false
    }
  },
  mounted() {
    console.log('案例 props 打印的日志:', this.$props.msg);
    console.log(this.$parent.message);
  }
}
</script>

<template>
  <div>
    <div>demo: props</div>
    <div>父组件传递过来的信息: {{ $props.msg }}</div>
  </div>
</template>

<style scoped>

</style>

