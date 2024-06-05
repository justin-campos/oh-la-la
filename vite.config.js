import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'https://justin-campos.github.io/oh-la-la/',
  server: {
    host: process.env.VITE_HOST || 'localhost',
  },
})
