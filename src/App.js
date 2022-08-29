import React, { useState } from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('red');
  return (
    <ThemeContext.Provider value={ {backgroundColor: theme} }>
      <div>Counter</div>
      <Counter initialCount={0}/>
      <div>CounterHooks</div>
      <CounterHooks initialCount={0}/>
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red';
      })}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
