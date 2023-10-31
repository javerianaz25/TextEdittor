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
    const handleCopy=()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copy text Successfully!","success");
      
    };
    const handleExtraspaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed extra spaces Successfully!","success");
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
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary my-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
<button disabled={text.length===0}  className="btn btn-primary mx-1 my-3" onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length===0} onClick={speak} className="btn btn-warning mx-2" id="toggle">Speak</button>
<button disabled={text.length===0} onClick={handleCopy} className="btn btn-warning mx-2" id="toggle">Copy Text</button>
<button disabled={text.length===0} onClick={handleExtraspaces} className="btn btn-warning mx-2" id="toggle">Clear ExtraSpaces</button>


<div className="mb-3 my-3">
  <textarea className="form-control" value={fWord} onChange={handlefindChange}  style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}} id="findBox" rows="1"placeholder='Find Word'></textarea>
</div>
<div className="mb-3">
  <textarea className="form-control" value={rWord} onChange={handlereplaceChange}  style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}} id="replaceBox" rows="1" placeholder='Replace Word'></textarea>
  <button disabled={text.length===0}  onClick={handleReplace} className="btn btn-warning mx-2 my-2">Replace</button>
</div>

</div>
    <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length}characters </p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      {/* <p>{text}</p> */}
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  );
}

