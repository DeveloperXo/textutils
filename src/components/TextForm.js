import React, {useState} from 'react';

export default function TextForm(props){
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLoClick = () => {
        console.log("LowerCase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }
    const addFakeParagraph = () => {
        console.log("Fake Paragraph was clicked");
        let oldText = document.querySelector('.textBox').value;
        let newText = oldText + `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, ipsa odit. In voluptatum alias, laboriosam provident numquam quidem eveniet harum odio eum aperiam illo! Cum modi accusamus rerum beatae officia.`;
        setText(newText);
        props.showAlert("Paragraph added!", "success");

    }
    const clearTextarea = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared!", "success");

    }
    const copyText = () => {
        let textArea = document.querySelector('.textBox')
        if(textArea.value === ''){
            props.showAlert("Cannot copy. Text area is empty!", "danger");
        }
        else{
            textArea.select();
            textArea.setSelectionRange(0, 99999); // For mobile devices
            navigator.clipboard.writeText(textArea.value);
            props.showAlert("Text copied to Clipboard!", "success");
        }
    }
    const [text, setText] = useState("");

    document.querySelectorAll('.showInfo')[0].value = "Characters: " + text.trim().length; //show number characters     
    document.querySelectorAll('.showInfo')[1].value = "Words: " + text.split(" ").length; // show number of words
    return(
        <>
            <div className="mb-3">
                    <label htmlFor="myBox" className={`form-label text-${props.mode==='light'?'dark' : 'light'}`}>{props.heading}</label>
                    <textarea className="form-control textBox" value={text} onChange={handleOnChange} id="myBox" rows="8"
                    style={{ backgroundColor: props.mode === 'light'?'white':'black',color: props.mode === 'dark'?'white':'black'}}
                    ></textarea>
                    
                    <div>
                        <button className="btn btn-primary my-3" onClick={copyText}>Copy</button>
                        <button className="btn btn-primary my-3 mx-4" onClick={clearTextarea}>Clear</button>
                    </div>

                    <button className="btn btn-primary my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className="btn btn-primary my-1 mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                    <button className="btn btn-primary my-1" onClick={addFakeParagraph} >Add Fake Paragraph</button>
            </div>
            <div className={`my-3 ${props.mode}`}>
                <h2 className={`text-${props.mode==='light'?'dark' : 'light'}`}>Preview</h2>
                <p className={`text-${props.mode==='light'?'dark' : 'light'} preview-text`}>
                    {text.length>0?text:'Enter some text in the textbox to preview it here.'}
                </p>
            </div>
        </>
    );
}