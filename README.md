# ServiceScheduleApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.
ServiceScheduleApp has the functionality to store schedules and also retrieve filtered schedule data.

# Issues

1) 'https://631945908e51a64d2be10770.mockapi.io/api/v1/products' API is not working for post requests.

# solution

1) To handle issue(1), I developed service(functionality) that stores and provides schedule data.

## How to run the project? (OS: windows)

First of all please make sure you have installed node and npm in your system. You can check your node version and npm version by using the following command:
(1)node --version
(2)npm --version

step-1) Install Angular CLI
- In order to run the project, you need to have Angular CLI installed in your system.To Check the Angular CLI version use the following command: 
    (1)ng version
- If Angular CLI is not installed in your system, use the following command to install it.
    (1)npm install -g @angular/cli


step-2) Open project in cmd
- Download the zip file of the following repository (https://github.com/Sanket-Mistry-08/service-schedule-app).
- Extract the zip file and open it in cmd.

step-3) Run project
Type the following commands in cmd to run the project: 
   (1)npm install (To install required dependencies) 
   (2)ng serve (To run the project on http://localhost:4200/) 


## project structure

This project has two main components: 
1)schedule-service (Has functionality to store Schedule data retrieved from the user via the form)
2)schedule-information (Displays saved Schedule data)

You can find these components in teh service-schedule-app-main>src>app>component folder.

You can checkout how components are connected in service-schedule-app-main>src>app>app-routing.module.ts file




