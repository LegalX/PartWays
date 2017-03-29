[![Build Status](https://travis-ci.org/LegalX/PartWays.svg?branch=master)](https://travis-ci.org/LegalX/PartWays)
# PartWays
[Demo app](https://partways-dev.firebaseapp.com)

For project description please see our [wiki](https://github.com/LegalX/PartWays/wiki)

[Development Workfow](https://github.com/LegalX/PartWays/wiki/Development-Workflow)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

npm uninstall -g angular-cli
npm uninstall -g @angular/cli
npm cache clean
npm install -g @angular/cli@latest

## Development server
Install Node.js 
Navigate to the project folder. And run the following commands:
    `npm install -g @angular/cli` 
    `ng install` 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Firebase
ng build --prod
firebase deploy

## Firebase
We use [Firebase](https://firebase.google.com) for hosting, backend and database.
[How to deploy Angular CLI apps to Firebase](https://coryrylan.com/blog/deploy-angular-cli-apps-to-firebase)

## Material Design
We use [Angular Material](https://material.angular.io) to develop UI following [Material design guidelines](https://material.io/guidelines)
[Material icons](https://material.io/icons)

## Responsive layout
[Angular Flex Layout](https://github.com/angular/flex-layout)
[Layout Demos](https://tburleson-layouts-demos.firebaseapp.com/#/docs)

## CI/CD
We use [Travis CI](https://travis-ci.org) for continuous integration and deployment to Firebase.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
