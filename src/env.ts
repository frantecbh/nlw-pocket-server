import z from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
})

export const { DATABASE_URL } = envSchema.parse(process.env)
