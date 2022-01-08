import React, {useState} from 'react'

const StateTutorial = () => {
    const [counter, setCounter] = useState(0)
    
    const increment = () =>{
        setCounter(counter+1);
        if(counter === 40)
            setCounter(0);
    }

    return (
        <div>
            {counter}
            <button onClick={increment}>Increment Value</button>
        </div>
    )
}

export default StateTutorial
