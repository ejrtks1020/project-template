<script setup>
const props = defineProps({
  id: String
})
</script>

<template>
 <p>dynamic routes</p>
 <span>{{ id }}</span>
</template>
<style scoped></style>
<route lang="yaml">
meta:
  layout: second
</route>
