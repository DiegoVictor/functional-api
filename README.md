# Functional API
[![Travis](https://img.shields.io/travis/com/DiegoVictor/functional-api?logo=travis&style=flat-square)](https://app.travis-ci.com/github/DiegoVictor/functional-api)
[![firebase](https://img.shields.io/static/v1?label=firebase&message=10.2.0&color=ffca28&logo=firebase)](https://firebase.google.com/)
[![babel](https://img.shields.io/badge/babel-7.18.2-F9DC3E?style=flat-square&logo=babel)](https://babeljs.io/)
[![prettier](https://img.shields.io/badge/prettier-2.6.0-F7B93E?style=flat-square&logo=prettier)](https://prettier.io/)
[![nodemon](https://img.shields.io/badge/nodemon-2.0.16-76d04b?style=flat-square&logo=nodemon)](https://nodemon.io/)
[![eslint](https://img.shields.io/badge/eslint-8.16.0-4b32c3?style=flat-square&logo=eslint)](https://eslint.org/)
[![airbnb-style](https://flat.badgen.net/badge/style-guide/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
[![jest](https://img.shields.io/badge/jest-28.1.0-brightgreen?style=flat-square&logo=jest)](https://jestjs.io/)
[![typescript](https://img.shields.io/badge/typescript-4.7.2-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![coverage](https://img.shields.io/codecov/c/gh/DiegoVictor/functional-api?logo=codecov&style=flat-square)](https://codecov.io/gh/DiegoVictor/functional-api)
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://raw.githubusercontent.com/DiegoVictor/functional-api/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)<br>
[![Run in Insomnia](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Functional%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2FDiegoVictor%2Ffunctional-api%2Fmain%2FInsomnia_2022-06-11.json)

Study Case to figure out a simple way to have dependency injection and dependency inversion principle using only functions (not classes here, sorry OOP guys).
> This API makes usage of a external service that generates random names, see more in: [Named API](https://github.com/DiegoVictor/named-api) and [Named Web](https://github.com/DiegoVictor/named-web).

## Table of Contents
* [Requirements](#requirements)
* [Installing](#installing)
  * [Firebase](#firebase)
    * [Service Account](#service-account)
* [Development](#development)
* [Usage](#usage)
  * [Deploy](#deploy)
  * [Routes](#routes)
* [Running the tests](#running-the-tests)
  * [Coverage report](#coverage-report)

# Requirements
  * Node.js ^14.19.0
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

Then save it in `src\config\service-account.json`, now your are ready to go.

# Development
Improve the development velocity running the `watch` script to [build](#build) the project everytime a file changes.
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
`/randomNames`|GET| - | Returns random names, raw text or in base64 format.

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
