<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

definePageMeta({
  layout: 'auth'
})

const auth = useAuth()
const toast = useToast()
const loading = ref(false)

const fields = [
  {
    name: 'email',
    type: 'email' as const,
    label: 'Email',
    required: true
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password' as const,
    required: true
  }
]

const providers = [
  {
    label: 'Google',
    icon: 'i-simple-icons-google',
    onClick: () => {
      toast.add({ title: 'Google', description: 'Login with Google' })
    }
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    onClick: () => {
      toast.add({ title: 'GitHub', description: 'Login with GitHub' })
    }
  }
]

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  if (loading.value) return
  loading.value = true

  const { email, password } = payload.data

  const { error } = await auth.signIn.email({
    email,
    password
  })
  if (error) {
    toast.add({
      title: error.message
    })
  } else {
    await navigateTo('/app/dashboard')
    toast.add({
      title: `You have been signed in!`
    })
  }
  loading.value = false
}
</script>

<template>
  <UPageCard class="sm:w-80">
    <UAuthForm
      :schema="schema"
      title="Login"
      icon="i-lucide-lock"
      :fields="fields"
      :providers="providers"
      @submit="onSubmit"
      :submit="{ label: 'Sign in' }"
    >
      <template #description>
        Don't have an account?
        <ULink to="/auth/register" class="text-(--ui-primary) font-medium"
          >Sign up</ULink
        >.
      </template>
    </UAuthForm>
  </UPageCard>
</template>
