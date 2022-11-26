Feature: Create Todo
    This feature is used to create a new todo item.
    Scenario: Create Basic Todo Item
        Given Empty ToDo list
        When I write "buy some milk" to <text box> and click to <add button>
        Then I should see "buy some milk" item in ToDo list