#### config eslint

```bash
echo "module.exports = require('@rascal/rules-config').eslint" > .eslintrc.cjs;
```

#### config prettier

```bash
echo "module.exports = require('@rascal/rules-config').prettier" > .prettierrc.cjs;
```

#### config script

```bash
npm set-script lint "eslint src/**/*.{js,jsx,ts,tsx,json}"
npm set-script lint:fix "eslint --fix 'src/**/*.{js,jsx,ts,tsx,json}'"
npm set-script format "prettier --write 'src/**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
```
