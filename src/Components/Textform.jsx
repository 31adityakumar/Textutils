import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Hello');
  // setText("New text");
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    // alert("You have clicked Upper Case");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleCopy =()=>{
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value)
  }
  const handleSpace =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const handleClearClick = ()=>{
    setText('');
  }

  const handleOnChange= (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  return (<>
   <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Put it down here</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
       <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
       <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
       <button className="btn btn-primary mx-2" onClick={handleSpace}>Remove Extra Space</button>
       <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3">
      <h3>Your text summary.</h3>
      <p>{text.split(" ").length} words and {text.length} characters.</p>
      <p>{0.008 * text.split(" ").length} Minutes to read.</p>
      <h2>PREVIEW</h2>
      <p>{text}</p>
    </div>
    </>
   
  )
}
