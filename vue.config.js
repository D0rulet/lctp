// Injects variables.scss file into all vue components
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/variables.scss";`
      }
    }
  }
}
