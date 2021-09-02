// rollup.config.js
// https://www.rollupjs.com/guide/command-line-reference

import typescript from '@rollup/plugin-typescript';

export default {
    input: './src/index.ts',
    output: {
        file: './dist/index.js',
        format: 'system',
        name: 'utils',
    },
    plugins: [typescript()],
};
