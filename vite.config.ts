import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // A API oficial não envia headers CORS; em dev o proxy evita o bloqueio do navegador.
      '/api/produtos': {
        target: 'https://app.econverse.com.br',
        changeOrigin: true,
        rewrite: () => '/teste-front-end/junior/tecnologia/lista-produtos/produtos.json',
      },
    },
  },
})
