# CommonCents

To add your two cents to the Common Cents component, install the following dependencies and recommended tools:

Dependencies:
* Node.js 14+
* Angular 11 CLI

Recommended Tools:
* Visual Studio Code, as a general development environment
* Postman, for testing any APIs

Run `npm install` in the /CommonCents folder to install node module dependencies.

This project uses the [NG-ZORRO component library](https://ng.ant.design/docs/introduce/en). 

## Project structure

* /app - Entry point component, modules, and routing.
	* /components - Application components
	* /interfaces - Interfaces and object models
	* /pages - Higher order components representing a page
	* /pipes - Transformation pipes.
	* /services - Data services

Each of these paths are declared in the `tsconfig.json` compiler options. This allows imports to be referenced from these base path names. For example, `import { Merchant } from 'interfaces/merchant';`

```
    "paths": {
      "interfaces/*": ["src/app/interfaces/*"],
      "components/*": ["src/app/components/*"],
      "pages/*": ["src/app/pages/*"],
      "services/*": ["src/app/services/*"],
      "pipes/*": ["src/app/pipes/*"]
    }
```



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Storybook stories

Run `npm run storybook` to run stories via [Storybook](https://storybook.js.org/). It is highly recommended that you use Component Driven Development principles when working on CommonCents, using Storybook stories to build components in isolation and test permutations of state and function.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
