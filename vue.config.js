const isDocEnv = process.env.NODE_ENV === 'docs'
module.exports = {
  baseUrl: isDocEnv ? '/bootstrap-vue-toolkit/' : '/',
  outputDir: isDocEnv ? 'docs' : 'dist',
  runtimeCompiler: true,
}