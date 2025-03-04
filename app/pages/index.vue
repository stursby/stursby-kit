<script setup lang="ts">
const links = ref([
  {
    label: 'Get started',
    to: '/auth/register',
    trailingIcon: 'i-lucide-arrow-up-right'
  },
  {
    label: 'Learn more',
    to: 'https://github.com/stursby/stursby-kit',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-github',
    target: '_blank'
  }
])
</script>

<template>
  <UPageHero
    title="StursbyKit"
    description="A Nuxt starter kit using Nuxt 4, NuxtHub, Nuxt UI Pro, Tailwind CSS 4 and Better Auth."
    :links="links"
  />
</template>
