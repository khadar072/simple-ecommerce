import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import jsconfigPaths from 'vite-jsconfig-paths'

export default defineConfig({
  plugins: [
    tailwindcss(),
    jsconfigPaths()
  ],
  server : {
    host :true,
    port :5173,
    watch : {
      usePolling : true
    }
  }
})