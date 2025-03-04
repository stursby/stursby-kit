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
    name: 'name',
    type: 'text' as const,
    label: 'Name',
    required: true
  },
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
  name: z.string(),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  if (loading.value) return
  loading.value = true

  const { name, email, password } = payload.data

  const { error } = await auth.signUp.email({
    email,
    password,
    name
  })

  if (error) {
    toast.add({
      title: error.message
    })
  } else {
    toast.add({
      title: `You have been signed up!`
    })
    await navigateTo('/app/dashboard')
  }
  loading.value = false
}
</script>

<template>
  <UPageCard class="sm:w-80">
    <UAuthForm
      :schema="schema"
      title="Register"
      icon="i-lucide-user"
      :fields="fields"
      :providers="providers"
      @submit="onSubmit"
      :submit="{ label: 'Create account' }"
    >
      <template #description>
        Already have an account?
        <ULink to="/auth/login" class="text-(--ui-primary) font-medium"
          >Login</ULink
        >.
      </template>
    </UAuthForm>
  </UPageCard>
</template>
