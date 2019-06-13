import resolve from 'rollup-plugin-node-resolve';

export default {
    context: 'self',
    input: 'dist/components/material-card.js',
    output: {
        file: 'dist/bundles/material-card.js',
        format: 'esm',
        name: 'MaterialCard'
    },
    plugins: [resolve()]
};