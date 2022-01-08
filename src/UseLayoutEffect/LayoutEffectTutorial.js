import React, {useEffect, useLayoutEffect, useRef} from 'react'

function LayoutEffectTutorial() {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, [])      //'uselayouteffect us called before useEffect

    useEffect(() => {
        inputRef.current.value = "HELLO";
    }, [])      //after the LayoutEffect so millisecond show p in value

    return (
        <div className='App'>
            <input ref={inputRef} value="P" style={{ width: 400, height: 60 }}></input>
            
        </div>
    )
}

export default LayoutEffectTutorial
