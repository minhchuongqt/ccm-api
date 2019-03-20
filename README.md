# CC Management Application - Server side (Api)
This project use NodeJs with ExpressJs

generated express
======================

An express app generated by Canqpham

## Setup
```sh
  npm install 
```
or
```sh
  yarn install 
```

## Run
### Fist step
Start Mongodb by command line
```sh
  mongod
```
### Second step
```sh
  npm start
```
or
```sh
  yarn start 
```
### Git config not add
```sh
  git config core.autocrlf false
```
# How to run debug
## Vscode
- Install `Debugger for Chrome` extension
- Copy the following code to `.vscode/launch.json`
```
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
      {
          "type": "chrome",
          "request": "launch",
          "name": "Launch Chrome against localhost",
          "url": "http://localhost:8001",
          "webRoot": "${workspaceFolder}"
      },
      
      {
          "type": "node",
          "request": "launch",
          "name": "Jest All",
          "program": "${workspaceFolder}/node_modules/jest/bin/jest",
          "args": ["--runInBand"],
          "console": "integratedTerminal",
          "internalConsoleOptions": "neverOpen"
      },
      
      {
          "type": "node",
          "request": "launch",
          "name": "Jest Current File",
          "program": "${workspaceFolder}/node_modules/jest/bin/jest",
          "args": ["${relativeFile}"],
          "console": "integratedTerminal",
          "internalConsoleOptions": "neverOpen"
      }
  ]
}
```
