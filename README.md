# calculator
Calculator Project

## Assignment

- Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
    - add
    - subtract
    - multiply
    - divide

- Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.


- Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
    - There should also be a display for the calculator.
    - Add a “clear” button.


- Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

- Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.
    - You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
    - This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.
    - You should round answers with long decimals so that they don’t overflow the screen.
    - Pressing = before entering all of the numbers or an operator could cause problems!
    - Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
    - Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!