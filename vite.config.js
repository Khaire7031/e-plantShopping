import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Set base to root if your assets are served from the root
  plugins: [react()],
});
