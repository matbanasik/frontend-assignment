module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["airbnb", "prettier", "plugin:react/recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": ["react", "react-hooks", "prettier"],
    "rules": {
        "react/jsx-indent": [1, "tab"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-uses-react": "error",   
        "react/jsx-uses-vars": "error",
        "indent": [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: [".js"]
            }
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    }
};