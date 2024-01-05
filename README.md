# Yarn Toolbox

## Description:
This is a knitter's utility belt. In this app you'll find many tools to help you in your knitting projects, like a **row counter**, a **repetitions counter**, **decrease** and **increase** calculators, as well as a **yarn stash management** tool.

## Project outline:

This project should have a define structure following best practices:
```
/loop-link
|-- /src
|   |-- /app

|   |   |-- /core
|   |   |   |-- /services
|   |   |   |-- /models

|   |   |-- /shared
|   |   |   |-- /components

|   |   |-- /features
|   |   |   |-- /featureN
|   |   |   |   |-- /components
|   |   |   |   |-- /services
|   |   |   |   |-- featureN.module.ts
|   |   |-- app.module.ts
|   |   |-- app.component.ts
|   |   |-- app.component.html
|   |   |-- app.component.css

|-- /www
|-- package.json
|-- tsconfig.json
|-- angular.json
|-- ionic.config.json
```
In the **core** folder there will be two folders: **services** and **models**. The first one will hold the logic for data access. As this app won't have a proper backend, this is where the interaction with the database will happen. The second one will hold the models for any entities needed in the app, such as a *YarnModel*.

Besides the *yarn stash* feature, others may require a database connection in order to store the current state of the page (*row counter*, *repetitions counter*).


Each feature (*row counter*, *repetition counter*, etc) will have a separate **feature** folder, and inside of it, the folders **componentes** and **services**.
The **components** folder will hold all the UI components, and may or may not use the atomic design structure.
The **services** folder will hold the logic for the feature, since the components themselves are dumb.

*added on 01/04/24:* Realized that both the *row counter* and *repetition counter* features need to access a database to store the current row and/or repetition. Also, I want to have the possibility to have many projects at once, so I need to store the feature's state for each ongoing project.

[^1]: by Rafael Gama, 12/30/23. [^1]
[^2]: all links by <a href="https://www.flaticon.com/free-icons/knitting" title="knitting icons">Knitting icons created by Freepik - Flaticon</a> [^2]