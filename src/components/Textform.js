import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick= ()=>{
        console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    };
        const handleLoClick= ()=>{
          console.log("Lowercase was clicked" + text);
          let newText= text.toLowerCase();
          setText(newText);
          props.showAlert("Converted to lowercase!","success");
    };
    const handleClearClick= ()=>{
      let newText= '';
      setText(newText);
      props.showAlert("Text Cleared!","success")
};

    const handleOnChange= (event)=>{
        console.log("on Change");
        setText(event.target.value);
    };
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("Speak Run Successfully!","success")
      const toogle = document.getElementById('toggle')
      if (toogle.textContent === "Speak") {
          toogle.innerHTML = "Stop"
      }
      else {
          toogle.innerHTML = "Speak"
              window.speechSynthesis.cancel()
          }
      
    };
    const handlefindChange=(event)=>{
      findWord(event.target.value);
    };
    const handlereplaceChange=(event)=>{
      replaceWord(event.target.value);
    }
    const handleReplace=()=>{
      let newText = text.replaceAll(fWord,rWord);
      setText(newText);
      props.showAlert("Replaced Successfully!","success")
    };
    const [text, setText]=useState('');
    const [fWord, findWord]=useState('');
    const [rWord, replaceWord]=useState('');

    // setText("New Text");
  return (
    <>
      <div className="container"style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(21 55 135':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
<button type="submit" onClick={speak} className="btn btn-warning mx-2"id="toggle">Speak</button>

<div className="mb-3 my-3">
  <textarea className="form-control" value={fWord} onChange={handlefindChange}  style={{backgroundColor: props.mode==='dark'?'rgb(21 55 135':'white', color:props.mode==='dark'?'white':'black'}} id="findBox" rows="1"placeholder='Find Word'></textarea>
</div>
<div className="mb-3">
  <textarea className="form-control" value={rWord} onChange={handlereplaceChange}  style={{backgroundColor: props.mode==='dark'?'rgb(21 55 135':'white', color:props.mode==='dark'?'white':'black'}} id="replaceBox" rows="1" placeholder='Replace Word'></textarea>
  <button onClick={handleReplace} className="btn btn-warning mx-2 my-2">Replace</button>
</div>

</div>
    <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length}characters </p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      {/* <p>{text}</p> */}
      <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
    </div>
    </>
  );
}

