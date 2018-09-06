module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
  setupFiles: ['@digitalstudio/play/config/polyfills.js'],
  testMatch: [
    '**/__tests__/**/*.{js,jsx,mjs}',
    '**/?(*.)(spec|test).{js,jsx,mjs}'
  ],
  roots: [process.cwd() + '/src'],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs)$': '@digitalstudio/play/config/jest/babelTransform.js',
    '^.+\\.css$': '@digitalstudio/play/config/jest/cssTransform.js',
    '^.+\\.(graphql)$': '@digitalstudio/play/config/jest/graphqlTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json|graphql)$)':
      '@digitalstudio/play/config/jest/fileTransform.js'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
    'mjs'
  ]
};
