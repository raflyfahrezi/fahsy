/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

import dts from 'rollup-plugin-dts'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const packageJson = require('./package.json')

const rollupConfig = [
    {
        input: 'src/index.ts',
        output: [
            {
                format: 'cjs',
                sourcemap: true,
                file: packageJson.main,
            },
            {
                format: 'esm',
                sourcemap: true,
                file: packageJson.module,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            peerDepsExternal(),
            typescript({ tsconfig: './tsconfig.json' }),
        ],
    },
    {
        plugins: [dts()],
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    },
]

export default rollupConfig
