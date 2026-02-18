import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages: use base: '/your-repo-name/' when deploying to github.io/your-repo-name/
// For user/org site (username.github.io) use base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
});
