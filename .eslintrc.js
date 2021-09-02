/**
 * rules                : https://eslint.bootcss.com/docs/rules/
 * typescript-eslint    : https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md
 * eslint-plugin-import : https://github.com/benmosher/eslint-plugin-import
 */

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import'],
    extends: ['prettier', 'prettier/@typescript-eslint'],
    rules: {
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'index', 'sibling'], 'object'],
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: [],
                'newlines-between': 'always',
            },
        ],
    },
};
