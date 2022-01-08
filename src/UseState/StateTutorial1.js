import React, {useState} from 'react'

const StateTutorial1 = () => {
    const [inputValue, setInputValue] = useState('P')

    let onChange = (event) => {
        setInputValue(event.target.value)
    };

    return (
        <div>
            <input placeholder='enter Something...' onChange={onChange} />
            {inputValue}
        </div>
    )
}

export default StateTutorial1

