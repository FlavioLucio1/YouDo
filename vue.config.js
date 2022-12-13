const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    themeColor: "#4A70A8",
    msTileColor: "#4A70A8",
    name: "Edital",
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'white',
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "./src/service-worker.js"
    },
    manifestOptions: {
      background_color: "#4A70A8",
      theme_color: "#4A70A8",
    }
  }
})
