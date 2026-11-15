import { defineConfig } from 'vite';

// A relative base, so the built page runs from any folder it is served from.
export default defineConfig({
  base: './',
  build: { target: 'esnext' },
});
