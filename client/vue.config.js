const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3001,
    proxy: {
      '/api': {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  }
})

// module.exports = {
//   transpileDependencies: ["vuetify"],
//   devServer:{
//     proxy: "http://localhost:5000",
//   },
// };
