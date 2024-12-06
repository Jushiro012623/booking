import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // 'process.env': import.meta.env
  },
  server: {
    port: 5174
  },
  resolve:{
    alias: {
    },
  },
})