import React from "react"

function Counter(props){
    const [counter, setCounter] = React.useState(0)
    const [colorState, setColor] = React.useState("white")
    
    function counterHandlerIncrement(e){
        setCounter(oldCounter => oldCounter + 1)
        colorHandler(counter + 1)
    }

    function counterHandlerDecrement(e){
        setCounter(oldCounter => oldCounter - 1)
        colorHandler(counter - 1)
    }

    function counterHandlerReset(e){
        setCounter(0)
        colorHandler(0)
    }

    function colorHandler(counter){
        if (counter < 0){
            setColor("orangered")
        }
        else if (counter > 0){
            setColor("green")
        }
        else{
            setColor("white")
        }
    }

    return (
        <div>
        <div id="counter" style={{color:colorState}}>{counter}</div>
        <hr id="hr-line"/>
        <div className="buttons-container" id="btn-container">
            <button onClick={counterHandlerDecrement} id="down">
                <i className="fa-solid fa-arrow-down"></i>
                Subtract
            </button>
            <button onClick={counterHandlerReset} id="reset">
                <i className="fa-solid fa-spinner"></i>
                Reset
            </button>
            <button onClick={counterHandlerIncrement} id="up">
                <i className="fa-solid fa-arrow-up"></i>
                Add
            </button>
        </div>
    </div>
    )
}

export default Counter;