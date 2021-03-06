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
7.  add interaction between multiple components
    a.  Input decorator (from angular/core)
    b.  similar to Vue props, in Ng known as property binding: one way
    c.  note that another declaration for the component was added to app.module
8.  add service - b/c components shouldn't directly fetch or save data 
    a.  di instead of creating with "new"
    b.  create with cli: ng generate service xyz
    c.  register provider - makes available to DI system - default: providedIn: 'root' - single shared instance that can be injected to any class that asks for it, also optimized to not inject if not used
    d.  services return observabes b/c they are asynchronous by nature
        i.  RxJS provides this
9.  add messaging component 
    a.  thru cli 
    b.  add service thru cli 
10.  add navigation
    a.  goal - make a dashboard like tab control 
    b.  add appRoutingModule - using cli - learned flat and module flags - add to /app folder and specify where to register import respectively
    c.  ls
11.  add another dashboard view to make routing make sense
12.  add httpClientModule and in memory web api module