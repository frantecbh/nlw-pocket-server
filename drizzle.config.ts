import { defineConfig } from 'drizzle-kit'
import { DATABASE_URL } from './src/env'
export default defineConfig({
  schema: './src/db/schema.ts',
  out: './migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: DATABASE_URL,
  },
})
