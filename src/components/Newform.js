import React,{useState} from 'react';

export default function Newform() {
    const [text, setText] = useState("");
    const [fWord, findWord] = useState("");
    const [rWord, replaceWord] = useState("");
  
    const handleFindChange = (event) => {
      findWord(event.target.value);
    };
  
    const handleReplaceChange = (event) => {
      replaceWord(event.target.value);
    };
  
    const handleReplaceClick = () => {
      let newText = text.replaceAll(fWord, rWord);
      setText(newText);
    };
  


  return (
    <>
    <div>
      <div className="mb-3 my-3">
        <textarea className="form-control" value={text} onChange={(event) => setText(event.target.value)} id="myBox" rows="8"></textarea>
      </div>
      <div className="mb-3 my-3">
        <textarea className="form-control" value={fWord} onChange={handleFindChange} id="findBox" rows="1" placeholder="Find Word"></textarea>
      </div>
      <div className="mb-3 my-3">
        <textarea className="form-control" value={rWord} onChange={handleReplaceChange} id="replaceBox" rows="1" placeholder="Replace Word"></textarea>
      </div>
      <button type="submit" onClick={handleReplaceClick} className="btn btn-warning mx-2">Replace Click</button>
    </div>
    </>
  )
}



