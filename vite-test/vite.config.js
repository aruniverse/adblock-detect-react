import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** @type {import("vite").UserConfigExport } */
export default defineConfig({
  plugins: [react()],
})
