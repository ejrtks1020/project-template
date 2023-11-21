<script setup>
const props = defineProps({
  test: String,
  dynamic: String
})
</script>

<template>
 <p>dynamic test routes</p>
 <p>{{dynamic}}</p>
 <p>{{test}}</p>
</template>
<style scoped></style>
<route lang="yaml">
meta:
  layout: second
</route>
