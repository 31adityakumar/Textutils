import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar title="TextUtils_Aditya" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}
      <div className="container my-3">
      <Textform heading="Enter the text to analyse" mode={mode}/>
      <About mode={mode}/>
      </div>
    </>
  );
}

export default App;
 