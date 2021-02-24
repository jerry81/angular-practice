# angular-practice

This will be a case where we try to build a project without a bootstrapping tool

angular provides a [seed app](https://github.com/angular/angular-seed)

## modules 

@NgModule decorator
import: includes other modules
providers - creators of services that contributes to global pool of services
declarations - components, directives, pipes, belonging to this module
exports: declarations made visible in other modules
bootstrap -  main application view - root component - only present in root module

## component

@Component decorator
specifies selector
templateUrl - the html file
styleUrls: an array of css files
providers: - typically adds the service used by that component

## directives

provide program logic

## data binding 

connect application data and DOM

2 types
1.  event binding - input event data chaanges
2.  property binding - interpolate to HTML

2 way data binding supported 

## services and DI

@Injectable decorator - for shared logic 

good design would be to have components delegate logical code to services 
i.e. logging, validation, fetching from server


## first api

the httpClient out of the box lib allows angular to call rest apis
returns observables
(rxjs)
subscribe acts as promise.then