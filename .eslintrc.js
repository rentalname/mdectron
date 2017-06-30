module.exports = {
    "extends": ["standard", "standard-react"],
    "env": {
      "mocha": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "standard",
        "promise",
        "jsx-a11y",
        "react",
        "import"
    ],
    "rules": {
      "no-console": ["warn", { "allow": ["warn", "error", "log"] }],
      "react/prefer-stateless-function": [0]
    }
};
