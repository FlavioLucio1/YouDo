const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    themeColor: "#127B6E",
    msTileColor: "#127B6E",
    name: "YouDo",
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'white',
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "./src/service-worker.js"
    },
    manifestOptions: {
      background_color: "#127B6E",
      theme_color: "#127B6E",
    }
  }
})
