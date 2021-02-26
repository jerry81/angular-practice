# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

## angular-tour-of-heroes

for purposes of looking at a best practices official tutorial, we start by using cli to bootstrap another angular project
1.  use cli to generate compoment
    a.  ng generate component heroes
    b.  creates css, html, spec.ts, and component files, with subfolder named heroes
    c.  modifies app.module.ts, which includes the component in declarations
2.  add input and 2way binding
    a.  got error 
Template parse errors:
Can't bind to 'ngModel' since it isn't a known property of 'input'.
    reason: ngModel not available by default.  must opt-in to using FormsModule
    solution: add FormsModule to appModule imports
3.  add a *ngFor directive
    a.  out of the box
4.  add click event with (click)=<handlerName(args)
5.  add aa *ngIf directive
6.  add class binding [class.selected]=<boolean>
    