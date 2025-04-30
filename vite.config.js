import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/song-recommend/', // 이게 중요함! 저장소 이름 기준
  plugins: [react()],
})
