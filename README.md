# CustomUiComponents

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.7.

# Creating Custom UI compoments as angular library
 These ui components can be used as formControls
 
* ng new my-lib --create-application=false
* ng g library custom-ui
* ng g c custom-input --project=custom-ui
* ng build --project=custom-ui

 # Creating npm package

 * npm login
 * cd into dist/custom-ui
 * npm init (Use username as package name - @username/custom-ui)
 * npm publish --access public

 # Bumping up the version
 * npm version patch
 * npm publish --access public

 # Publishing these ui components as angular library into npm artifactory
 https://www.npmjs.com/package/@prajwals06/custom-ui
