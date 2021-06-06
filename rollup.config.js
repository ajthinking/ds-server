import typescript from '@rollup/plugin-typescript';

export default [
  // ES module build (replaces broken basic TypeScript compilation)
  // * ref: <https://github.com/microsoft/TypeScript/issues/18442> , <https://github.com/alshdavid/rxjs/blob/main/rollup.config.js#L10>
  // * ref: <https://github.com/microsoft/TypeScript/pull/35148>
  // * ref: <https://github.com/microsoft/TypeScript/issues/37582>
  {
    preserveModules: true, // or `false` to bundle as a single file
    input: ['src/main.ts'],
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: '[name].cjs',
      },
    ],
    plugins: [typescript({ tsconfig: './tsconfig.json' })],
  },
];
