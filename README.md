# Functional API
[![AppVeyor](https://img.shields.io/appveyor/build/diegovictor/functional-api?logo=appveyor&style=flat-square)](https://ci.appveyor.com/project/DiegoVictor/functional-api)
[![firestore](https://img.shields.io/badge/firestore-ffca28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![firebase](https://img.shields.io/static/v1?label=firebase&style=flat-square&message=11.10.1&color=ffca28&logo=firebase)](https://firebase.google.com/)
[![babel](https://img.shields.io/badge/babel-7.22.11-F9DC3E?style=flat-square&logo=babel)](https://babeljs.io/)
[![prettier](https://img.shields.io/badge/prettier-3.0.2-F7B93E?style=flat-square&logo=prettier)](https://prettier.io/)
[![nodemon](https://img.shields.io/badge/nodemon-3.0.1-76d04b?style=flat-square&logo=nodemon)](https://nodemon.io/)
[![eslint](https://img.shields.io/badge/eslint-8.48.0-4b32c3?style=flat-square&logo=eslint)](https://eslint.org/)
[![airbnb-style](https://flat.badgen.net/badge/style-guide/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
[![jest](https://img.shields.io/badge/jest-29.6.4-brightgreen?style=flat-square&logo=jest)](https://jestjs.io/)
[![typescript](https://img.shields.io/badge/typescript-5.2.2-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![coverage](https://img.shields.io/codecov/c/gh/DiegoVictor/functional-api?logo=codecov&style=flat-square)](https://app.codecov.io/gh/DiegoVictor/functional-api)
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://raw.githubusercontent.com/DiegoVictor/functional-api/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)<br>
[![Run in Insomnia](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Functional%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2FDiegoVictor%2Ffunctional-api%2Fmain%2FInsomnia_2024-11-28.json)

Study Case to figure out a simple way to have dependency injection and dependency inversion principle using only functions (not classes here, sorry OOP guys).
> This API makes usage of a external service that generates random names, see more in: [Named API](https://github.com/DiegoVictor/named-api) and [Named Web](https://github.com/DiegoVictor/named-web).

## Table of Contents
* [Requirements](#requirements)
* [Installing](#installing)
  * [Firebase](#firebase)
    * [Service Account](#service-account)
    * [Script](#script)
* [Development](#development)
* [Usage](#usage)
  * [Deploy](#deploy)
  * [Routes](#routes)
* [Running the tests](#running-the-tests)
  * [Coverage report](#coverage-report)

# Requirements
  * Node.js ^18.19.0
  * Firebase Account
    * [Functions](https://firebase.google.com/docs/functions)
    * [Firestore](https://firebase.google.com/docs/firestore)

# Installing
Easy peasy lemon squeezy:
```
$ yarn
```
Or:
```
$ npm install
```
> Was installed and configured the [`eslint`](https://eslint.org/) and [`prettier`](https://prettier.io/) to keep the code clean and patterned.

## Firebase
First, [create a project into Firebase](https://firebase.google.com/docs/android/setup#create-firebase-project), then [create a database](https://firebase.google.com/docs/firestore/quickstart).

### Service Account
Create a service account:

* [Service Account](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk?authuser=0)

Then save it in `src\config\service-account.json`.

### Script
There is a script (`scripts/main.js`) that setup a feature flag required by the application, to run:
```
$ node scripts/main.js
```
Now your are ready to go

# Development
Improve the development velocity running the `watch` script to rebuild the project everytime a file in `src` folder changes.
```
npm run watch
```
Or:
```
yarn watch
```
> Then you can just run the `serve` script once.

# Usage
Run the `build` script:
```
npm run build
```
Or:
```
yarn build
```
Then you are ready to start the server:
```
npm run serve
```
Or:
```
yarn serve
```

## Deploy
```
npm run deploy
```
Or:
```
yarn deploy
```
> Deploy the functions is very easy, but is requires a [Blaze (pay-as-you-go) plan](https://firebase.google.com/pricing?authuser=0&hl=pt).

## Routes
route|HTTP Method|params|description
---|---|---|---
`/featureFlags`|GET| - |Returns all flags in the database.
`/featureFlags/:key`|GET| `key` of the flag.|Returns the specified flag.
`/randomNames`|GET| - | Returns random names in raw text or in base64 format (depends if the flag is enable or not).

# Running the tests
[Jest](https://jestjs.io/) was the choice to test the app, to run:
```
$ yarn test
```
Or:
```
$ npm run test
```
> Run the command in the root folder

## Coverage report
You can see the coverage report inside `tests/coverage`. They are automatically created after the tests run.
