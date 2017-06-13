module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      "no-console": ["warn", { "allow": ["warn", "error", "log"] }],
      "react/prefer-stateless-function": [0]
    }
};
