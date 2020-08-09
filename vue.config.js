module.exports = {
  publicPath: process.env.NODE_ENV === 'production'? './': '/', 
  outputDir: 'dist',
  pages: {
    index: {
        entry: 'src/main.js',
        template: 'public/index.html',
        filename: 'index.html'
    },
  },
  productionSourceMap: false,
  devServer: {
    port: 8080
  }
}
