import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: 'index.html', 
  },
  build: {
    rollupOptions: {
      input: 'public/index.html', // Define o caminho correto do index
    },

    outDir: 'dist', // Saída da build
  },
});
