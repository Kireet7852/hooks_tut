import React, {useReducer} from 'react'

const reducer = (state, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count + 1, showText: state.showText}
        case 'toggleShowText':
            return {count: state.count, showText: !state.showText}
        default:
            return state
    }
}

const ReducerTutorial = () => {
    // const [count, setCount] = useState(0);
    // const [showText, setShowText] = useState(true);

    const [state, dispatch] = useReducer(reducer, 
        {count:0, showText:true});

    return (
        <div>
            <h1>{state.count}</h1>
            
            <button onClick={() => {
                dispatch({type: 'INCREMENT'});
                dispatch({type: 'toggleShowText'});
            }}>
                Click Here
            </button>

            {state.showText && <h1>This is a text</h1>}
        </div>
    )
}

export default ReducerTutorial
