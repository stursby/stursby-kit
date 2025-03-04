<script setup lang="ts">
const { signOut, loggedIn } = useAuth()

const authNav = computed(() => [
  {
    label: 'Register',
    to: '/auth/register'
  },
  {
    label: 'Login',
    to: '/auth/login'
  }
])

const appNav = computed(() => [
  {
    label: 'Dashboard',
    to: '/app/dashboard',
    icon: 'i-lucide-home'
  },
  {
    label: 'Settings',
    to: '/app/settings',
    icon: 'i-lucide-settings'
  }
])
</script>

<template>
  <UHeader :menu="{ fullscreen: true }">
    <template #title>
      <h1>StursbyKit</h1>
    </template>

    <UNavigationMenu :items="authNav" v-if="!loggedIn" />
    <UNavigationMenu :items="appNav" v-else />

    <template #right>
      <UButton
        variant="ghost"
        v-if="loggedIn"
        @click="signOut({ redirectTo: '/' })"
      >
        Sign Out
      </UButton>

      <UColorModeButton />

      <UButton
        color="neutral"
        variant="ghost"
        to="https://github.com/stursby/stursby-kit"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
      />
    </template>
  </UHeader>

  <main class="p-4 sm:p-6 md:p-8">
    <slot />
  </main>
</template>
