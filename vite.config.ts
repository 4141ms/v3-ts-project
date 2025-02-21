import { defineConfig, loadEnv } from 'vite'
// 配置svg插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'
export default defineConfig(({ command, mode }) => {
  // 获取各种环境下的对应变量
  let env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      // 配置svg插件
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        localEnabled: command === 'serve',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // 相对路径别名配置，使用 @ 代替 src
      },
      extensions: ['.js', '.ts', '.tsx', 'jsx', '.json', '.vue'],
    },
    // 版本问题
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       javascriptEnabled: true,
    //       additionalData: '@use "./src/styles/variable.scss";',
    //     },
    //   },
    // },
    // 代理跨域
    server: {
      //
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:3000',
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
