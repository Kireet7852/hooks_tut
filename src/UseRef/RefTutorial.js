import React,{useRef} from 'react'

const RefTutorial = () => {
    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.focus();       // on click value is not clear
        // inputRef.current.value = "";     // on click value is clear
    };
    return (
        <div>
            <h1>P</h1>
            <input type="text" placeholder="Ex..." ref={inputRef}/>
            <button onClick={onClick}>
                Change Name
            </button>
        </div>
    )
}

export default RefTutorial
