import React, {useEffect, useState} from 'react'
import axios from 'axios'

const EffectTutorial = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
            // console.log(response.data);
            setData(response.data[count].email);
            console.log("API WAS CALLED");
        })
            
    }, [count]);         //array to call api once ,& count to increment every time button is clicked

    return (
        <div>
            Hello World
            <h1>{data}</h1>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count+1);
            }}>
                Click Increment
            </button>
        </div>
    )
}

export default EffectTutorial
