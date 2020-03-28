module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["airbnb", "prettier"],
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
    "plugins": ["react", "prettier"],
    "rules": {
        "react/jsx-indent": [1, "tab"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
};