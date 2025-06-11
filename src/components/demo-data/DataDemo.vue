<template>
  <div @click="count++">点击次数：{{ count }}</div>
</template>

<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered
} from 'vue'

const count = ref(0)

onBeforeMount(() => {
  console.log('组件即将挂载')
})

onMounted(() => {
  console.log('组件挂载完成')
})

onBeforeUpdate(() => {
  console.log('组件即将更新')
})

onUpdated(() => {
  console.log('组件已更新')
})

onBeforeUnmount(() => {
  console.log('组件即将卸载')
})

onUnmounted(() => {
  console.log('组件已卸载')
})

onActivated(() => {
  console.log('组件已激活（<KeepAlive>）')
})

onDeactivated(() => {
  console.log('组件已停用（<KeepAlive>）')
})

onErrorCaptured((err, instance, info) => {
  console.warn('捕获错误：', err, info)
  return false // 若返回 true 表示阻止继续向上传播错误
})

onRenderTracked((e) => {
  console.log('响应式依赖被追踪:', e)
})

onRenderTriggered((e) => {
  console.log('组件因响应式变化被触发更新:', e)
})
</script>
