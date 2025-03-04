<script setup lang="ts">
const { user } = useAuth()
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <pre class="p-2 text-sm">{{ user }}</pre>
  </div>
</template>
