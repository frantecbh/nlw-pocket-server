npm i typescript -D

npx tsx --init
https://github.com/tsconfig/bases


 npm i @types/node tsx -D

 npm i fastify

 npm i -D --save-exact @biomejs/biome
 {
  "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
  "organizeImports": {
    "enabled": true
  },
  "formatter": {
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 80
  },
  "javascript": {
    "formatter": {
      "arrowParentheses": "asNeeded",
      "jsxQuoteStyle": "double",
      "quoteStyle": "single",
      "semicolons": "asNeeded",
      "trailingCommas": "es5"
    }
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "files": {
    "ignore": [
      "node_modules"
    ]
  }
}

docker compose up -d

npm i drizzle-orm
npm i drizzle-kit -D
npx drizzle-kit generate
