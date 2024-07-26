 //I imported the main react libary and state, the React hook. I also imported grom the mathjs libary to evaluate math expressions that are strings.
import React, { useState } from 'react';
import { evaluate } from 'mathjs';
//I used an arrow syntax to create a functional calculator. input has been added to show the current state of the calculator while setInput is the function to update the state.
const Calculator = () => {
  const [input, setInput] = useState('');
 //An array of buttons labeled like a calculator.
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];
 //handleClick makes the buttons clickable. 
  const handleClick = (value) => {
    if (value === 'C') { //If C is clicked, the input is cleared
      setInput('');
    } else if (value === '=') { //if = is clicked, the maths will be evaluated and updated- showing the result
      try {
        setInput(evaluate(input).toString());
      } catch (error) {
        setInput('Error'); //this will catch anything not considered a mathametical calculation. It will show Error
      }
    } else {
      setInput(input + value);
    }
  };
 //Return will display the overall outcome
  return (
    <div className="calculator"> {/* The containor div for the calculator */}
      <div className="display">{input}</div> {/* The input display */}
      <div className="buttons"> {/* The div for the buttons. The buttons.map iterates the buttons array and creates an available button for each item */}
        {buttons.map((button) => ( 
          <button key={button} onClick={() => handleClick(button)}>
            {button}
          </button> {/* The key gives each button element a unique key- which is a button label. The onclick is an eventHandler, when a button is clicked, this will call handleClick with the buttons value*/}
        ))}
      </div>
    </div>
  );
};
 
export default Calculator;

// note to self- proper divide symbol: \u00F7
 