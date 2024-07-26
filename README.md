# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Adding notes here as it breaks if I keep it in actual code:


 //Return will display the overall outcome
  return (
    <div className="calculator"> {/* The containor div for the calculator */}
      <div className="display">{input}</div> {/* The input display */}
      <div className="buttons"> {/* The div for the buttons. The buttons.map iterates the buttons array and creates an available button for each item */}
        {buttons.map((button) => ( 
          <button key={button} onClick={() => handleClick(button)}>
            {button}
          </button> {/* The key gives each button element a unique key- which is a button label. The onclick is an eventHandler, when a button is clicked, this will call handleClick with the buttons value*/}
