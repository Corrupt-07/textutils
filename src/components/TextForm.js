import React, { useState } from 'react'



export default function TextForm(props) {
    const handleOnClickUpper = () => {
        console.log("This is upper case");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleOnClickLower = () => {
        console.log("This is lower case");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleOnClickClear = () => {
        console.log("This is clear case");
        setText('')
        props.showAlert("Text has been cleared", "success")
    }

    const handleOnChange = (event) => {
        console.log("this is handle on change and event is", event.target.value);
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");
    return (
        <>
        <div className='container' style={{
                    color: props.mode === 'dark' ? '#fff' : 'black'
                }}>
            <h1>{props.heading}</h1>
            <div className="form-group">
                <textarea className="form-control" onChange={handleOnChange} style={{
                    backgroundColor: props.mode === 'dark' ? 'grey' : '#fff',
                    color: props.mode === 'dark' ? '#fff' : 'black'
                }} id="myBox" rows="8" value={text}></textarea>
            </div>
            <button onClick={handleOnClickUpper} className='btn btn-primary mx-2'>Convert to Uppercase</button>
            <button onClick={handleOnClickLower} className='btn btn-primary mx-2'>Convert to Lowercase</button>
            <button onClick={handleOnClickClear} className='btn btn-primary mx-2'>Clear</button>
        </div>

        <div className='container my-3' style={{
                    color: props.mode === 'dark' ? '#fff' : 'black'
                }}>
            <h1>Your Text Summery</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>

            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Enter Something to preview it here"}</p>
        </div>
        </>
    )
}
