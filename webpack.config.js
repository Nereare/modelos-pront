const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  .setOutputPath('public/build/')
  .setPublicPath('/build')
  .splitEntryChunks()
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .enableSassLoader()
  .enableIntegrityHashes(Encore.isProduction())
  .autoProvidejQuery()

  /* Entrypoints */
  .addEntry('pront', './assets/pront.js')

  // configure Babel
  // .configureBabel((config) => {
  //   config.plugins.push('@babel/a-babel-plugin');
  // })
  // enables and configure @babel/preset-env polyfills
  // .configureBabelPresetEnv((config) => {
  //   config.useBuiltIns = 'usage';
  //   config.corejs = '3.38';
  // })
;

module.exports = Encore.getWebpackConfig();
