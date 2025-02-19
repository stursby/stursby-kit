import { createEnv } from '@t3-oss/env-nuxt'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NUXT_UI_PRO_LICENSE: z.string()
  }
})
