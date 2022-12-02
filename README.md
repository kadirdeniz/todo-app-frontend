# Todo Application Frontend


This repository is a todo app sample with using ReactJS

## Table Of Contents
* [General info](#general-info)
* [What is Test Driven Development](#what-is-test-driven-development)
* [Clone the project](#clone-the-project)
* [Setup](#setup)
* [Test](#test)

## General info
This project is a basic todo application created with ```ReactJS```, in this project i try to follow ```Acceptance Test Driven Development``` short for ```ATDD```. ATDD is like combination of BDD and TDD because of that i try to implement CucumberJS for creating feature file. In this project there is 1 feature which is ```Create Todo```, you can find it feature in below.

```
Given Empty ToDo list
When I write "buy some milk" to <text box> and click to <add button>
Then I should see "buy some milk" item in ToDo list
``` 
In the application,```cypress``` and ```CucumberJS``` were used together as acceptance test, cypress results are kept in the application as video and picture so that the test results can be more understandable.

Second type of test is ```Consumer Driven Contract Test```. In ```CDC```, the consumer determines the right contract to talk to the provider and produces a json model, shares this json model with the provider and waits for the provider to perform this contract. In this project ```PactJs``` was used for cdc implementation

Component testing was written using ```JestJS```  to ensure that all components in the application work correctly in isolation.

## What is Test Driven Development
Test driven development was first introduced by Kent Beck as a software development method. In the simplest terms, we can think of tdd as Test -> Code -> Refactor, the author thinks that tests should be written before the code and supports this with very strong ideas. According to the book, when we add a new feature to the application, we need to look at the application from the outside before starting the code directly, it says that what kind of extreme cases are, what we can encounter and finally we need to decide clearly what we want to do, then we need to test these thoughts and then put them in the code. He says it's better for us to start. When we write the test before the code phase, when we come to the starting point of the code, we will know very well what we want to do, and with this, we will have a "todo list" of tests, we can focus on our development very comfortably without stress, ensuring that the application works successfully. In the book, he talks about a lot of things about how the written tests should be, and I would like to briefly touch on them. The tests are expected to be done in a completely isolated manner, they should be independent from each other as much as possible because when an error occurs, we want to instantly detect where the error is, we can do this with isolated tests, I think that mock is very important because we have to mock certain values in the application so that we can write isolated tests. .

## Clone the project

```
$ git clone https://github.com/kadirdeniz/todo-app-frontend.git
$ cd todo-app-frontend
```

## Setup
##### There are two ways to start this application, first one is dockerize the application then run it and second way is run in your local machine via using npm scripts

#### Dockerize
```
$ npm run dockerize
$ npm run docker-run
```

#### Basic Start
```
 $ npm run start
````

 ## Test
 #### In this application 3 type of test implemented with using below scripts you can test all the test those implemented
 ```
 $ npm run test-acceptance
 $ npm run test-component
 $ npm run test-contract
 ```






