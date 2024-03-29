import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import setupExtend from 'vite-plugin-vue-setup-extend';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue(), setupExtend()],
  server: {
    port: 8082, //启动端口
    hmr: {
      host: 'localhost',
      port: 8082
    },
    // 设置代理
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      },
      '/upload': {
        // target: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
        target: 'http://127.0.0.1:3000/upload',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/upload/, '')
      }
    }
  }
});
