import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  envPrefix: 'REACT_APP_',
  server: {
    open: false,
    port: 3000
  }
});
