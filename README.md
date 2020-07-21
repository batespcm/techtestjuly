# techtestdwp

## Working with Latitude & Longitude taken from latlong.net

Source APi https://bpdts-test-app.herokuapp.com/

Latitude 51.509865
Longitude 0.118092

## What Endpoints are being tested

- GET /api/listedinlondon - Responds with everyone listed in the api from the endpoint city/London/users
- GET /api/withinfiftyoflondon - Responds all users whose latitude and longitude is listed within the requirments able from the endpoint /users
- GET /api/londoncombined - Responds with an amalgamation of the two routes above

## Tests

```sh
npm install
npm test
```

## Dependencies

- [axios](https://ghub.io/axios): Promise based HTTP client for the browser and node.js
- [cors](https://ghub.io/cors): Node.js CORS middleware
- [eslint-config-airbnb](https://ghub.io/eslint-config-airbnb): Airbnb&#39;s ESLint config, following our styleguide
- [express](https://ghub.io/express): Fast, unopinionated, minimalist web framework
- [nodemon](https://ghub.io/nodemon): Simple monitor script for use during development of a node.js app.
- [supertest](https://ghub.io/supertest): SuperAgent driven library for testing HTTP servers

## Dev Dependencies

- [jest](https://ghub.io/jest): Delightful JavaScript Testing.
- [eslint](https://ghub.io/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-airbnb](https://ghub.io/eslint-config-airbnb): Airbnb&#39;s ESLint config, following our styleguide
- [eslint-config-prettier](https://ghub.io/eslint-config-prettier): Turns off all rules that are unnecessary or might conflict with Prettier.
- [eslint-plugin-import](https://ghub.io/eslint-plugin-import): Import with sanity.
- [eslint-plugin-jest](https://ghub.io/eslint-plugin-jest): Eslint rules for Jest
- [eslint-plugin-jest-formatting](https://ghub.io/eslint-plugin-jest-formatting): Formatting rules for jest tests
- [eslint-plugin-jsx-a11y](https://ghub.io/eslint-plugin-jsx-a11y): Static AST checker for accessibility rules on JSX elements.
- [eslint-plugin-node](https://ghub.io/eslint-plugin-node): Additional ESLint&#39;s rules for Node.js
- [eslint-plugin-prettier](https://ghub.io/eslint-plugin-prettier): Runs prettier as an eslint rule
- [eslint-plugin-security](https://ghub.io/eslint-plugin-security): Security rules for eslint
- [husky](https://ghub.io/husky): Prevents bad commit or push (git hooks, pre-commit/precommit, pre-push/prepush, post-merge/postmerge and all that stuff...)
- [prettier](https://ghub.io/prettier): Prettier is an opinionated code formatter

## License

ISC
