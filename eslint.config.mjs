import eslintPluginNuxt from '@nuxt/eslint-config';

export default [
  ...eslintPluginNuxt(),
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2, { SwitchCase: 1 }],
      curly: ['error', 'all']
    }
  }
];
