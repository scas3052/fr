import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',     // Login page
        homepage: './homepage.html' // Post-login page
      }
    }
  }
});