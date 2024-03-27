import React, { useState } from 'react'



export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newtext= text.toUpperCase();
        setText(newtext)
    }

    const handleUpClick2 = ()=>{
        
        let newtext= text.toLowerCase();
        setText(newtext)
    }

    const handlegmailClick2 = ()=>{
        
        let newtext= text + text.length +"@gmail.com";
        setText(newtext)
    }

    const handleclearClick2 = ()=>{
        
        let newtext= " ";
        setText(newtext)
    }

    const handledaseClick2 = ()=>{ 
        let newtext = text.replace(/ /g,"-")
        setText(newtext)
    }

    const handleOnChange = (event)=>{
        // console.log("on Change")
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleUpClick2}>Convert to lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handlegmailClick2}>Convert gmail</button>
        <button className='btn btn-primary mx-2' onClick={handleclearClick2}>Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={handledaseClick2}>Add dase</button>
    </div>

    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} minites read</p>
       <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
    