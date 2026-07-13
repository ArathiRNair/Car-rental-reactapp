import React from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavigatinBar from './components/NavigatinBar'
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <NavigatinBar/>
      <Home/>
      
    </>
  )
}

export default App;