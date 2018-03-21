exports.config = {
  bundles: [
    { components: ['my-modal-bundle', 'my-modal', 'my-backdrop'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
