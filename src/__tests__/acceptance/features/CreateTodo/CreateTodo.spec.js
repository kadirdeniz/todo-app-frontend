import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import * as dotenv from "dotenv";
dotenv.config();

const baseUrL = process.env.BASE_URL || "http://localhost:3000";

Given("Empty ToDo list", () => {
  // Open the app
  cy.visit(baseUrL);

  // Firstly todo list should be empty
  cy.get("#todo-list").should("not.exist");
});

When("I write {string} to <text box> and click to <add button>", (text) => {
  // Type the text to the input
  cy.get("#todo-input").type(text);

  // Click the add button
  cy.get("#todo-create-button").click();
});

Then("I should see {string} item in ToDo list", (text) => {
  // Todo list should be exists
  cy.get("#todo-list").should("exist");

  // One todo item should be in the list
  cy.get("#todo-item").should("have.length", 1);

  // The todo item should be the same as the text we entered
  cy.get("#todo-item").should("have.text", text);
});
