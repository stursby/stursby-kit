export default defineNuxtRouteMiddleware(async to => {
  const isUserNavigatingToTheApp = to.path.startsWith('/app')
  if (!isUserNavigatingToTheApp) {
    return
  }

  const { loggedIn, fetchSession } = useAuth()

  await fetchSession()

  if (!loggedIn.value) {
    return navigateTo('/auth/login')
  }
})
