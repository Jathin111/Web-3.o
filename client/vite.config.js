import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Remove this option to disable JIT:
  // experimental: {
  //   useViteJit: true,
  // },
});
