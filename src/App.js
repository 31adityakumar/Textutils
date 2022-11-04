import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About"/>
      {/* <Navbar title="TextUtils_Aditya" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}
      <div className="container my-3">
      <Textform heading="Enter the text to analyse"/>
      <About/>
      </div>
    </>
  );
}

export default App;
 