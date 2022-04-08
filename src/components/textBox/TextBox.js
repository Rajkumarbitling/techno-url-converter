import React, { useEffect, useState } from 'react'
import './textBox.css';

const TextBox = () => {
    let [inputText, setinputText] = useState("");
    let [outputText, setoutputText] = useState("");
    let [selected, setselected] = useState("c:\\Users\\TechnoPurple\\workspace\\PTUI\\trunk\\WebContent\\");
    let [copied, setcopied] = useState(false);

    const handleChange = (e) => {
        setinputText(e.target.value)
    }

    const handleSelect = (e) => {
        setselected(e.target.value)
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(outputText);
        setcopied(true);
    }

    useEffect(() => {
        if (inputText.length > 0) {
            var sample = inputText.toString();
            if (sample.includes(selected) && selected.length !== 0) {
                var replaceStr = "svn up /usr/share/tomcat7/webapps/effy/"
                var inputStr = selected;
                // var inputStr = "c:\\Users\\TechnoPurple\\workspace\\PTUI\\trunk\\WebContent\\"
                sample = sample.replaceAll(inputStr, replaceStr);
                setoutputText(sample.replaceAll("\\", "/"));
            }
        } else {
            setoutputText("");
        }
    }, [inputText, selected])


    return (
        <>
            <div className="selectDiv">
                <select value={selected} name="selectOption" id="selectOption" onChange={handleSelect}>
                    <option value="c:\Users\TechnoPurple\workspace\PTUI\trunk\WebContent\">VsCode</option>
                    <option value="/PTUI/trunk/WebContent/">Eclipse</option>
                </select>
                <button onClick={copyToClipboard}>
                    {!copied ? "Copy to Clipboard" : "Copied"}
                </button>
            </div>
            <div className="row">

                <div className="col p-2">
                    <textarea name="inputUrl" id="inputUrl" cols="30" rows="10" placeholder="Input URL here" onChange={handleChange} onpaste={handleChange} value={inputText}></textarea>
                </div>
                <div className="col p-2">
                    <textarea name="outputUrl" id="outputUrl" cols="30" rows="10" placeholder="Output URL here" value={outputText}></textarea>
                </div>
            </div>
        </>
    )
}

export default TextBox