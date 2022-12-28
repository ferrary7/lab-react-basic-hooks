import React, { useState } from 'react'
import './App.css';
import Aryan from './components/UseContext';

export const Theme = React.createContext()


function App() {

  const [toggle, setToggle] = useState(true)

  const toggler = () => {
    setToggle (toggle => !toggle)
  }

  return (
    <div className='up'>
    <Theme.Provider value={toggle}>
      <button onClick={toggler}> Toggle </button>
      <Aryan />  
    </Theme.Provider>
    </div>
  );
}

export default App;
