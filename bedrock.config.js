/**
 * Bedrock configuration
 * For docs, see https://bedrockapp.org/documentation/configuration/
 * Inline docs available in the default config object
*/

module.exports = {
  js: {
    minify: false
  },
  css: {
    compiler: 'scss',
    minify: false,
    purge: false
  },
  styleguide: {
    url: '/components',
    overrideStyleguideTemplates: false,
    search: true,
    colors: './content/scss/_s-colors.scss',
    categoryOrder: [
      'Style guide',
      'Design patterns',
      'Components',
      'Objects',
      'Development documentation'
    ],
    componentCategories: {
      aov: 'Basics',
      c: 'Components',
      o: 'Objects',
      u: 'Utilities'
    },
    codeSamples: {
      jsx: false
    },
  },
};
