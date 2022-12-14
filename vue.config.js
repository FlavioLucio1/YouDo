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
    },
    
    icons: [{
      src: "assets/icons/icon-72x72.png",
      sizes: "72x72",
      type: "image/png",
      purpose: "any"
  },
  {
      src: "assets/icons/icon-96x96.png",
      sizes: "96x96",
      type: "image/png",
      purpose: "any"
  },
  {
      src: "assets/icons/icon-128x128.png",
      sizes: "128x128",
      type: "image/png",
      purpose: "any"
  },
  {
      src: "assets/icons/icon-144x144.png",
      sizes: "144x144",
      type: "image/png",
      purpose: "any"
  },
  {
      src: "assets/icons/icon-152x152.png",
      sizes: "152x152",
      type: "image/png",
      purpose: "any"
  },
  {
      src: "assets/icons/icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any"
  },
  {
      src: "assets/icons/icon-384x384.png",
      sizes: "384x384",
      type: "image/png",
      purpose: "any"
  },
  {
      src: "assets/icons/icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any"
  }
]
  }
})
