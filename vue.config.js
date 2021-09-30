module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions:{
        productName: 'Administrador',
        // asar: false,
        win:{
          icon: "./public/icono.ico"
        },
        directories:{
          buildResources: "public"
        }
      },
  
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      nativeWindowOpen: true,
      
    },
    
  },
  
}
