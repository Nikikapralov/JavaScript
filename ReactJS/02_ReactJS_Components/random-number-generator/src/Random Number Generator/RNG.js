import "./RNG.css"
import React from "react"

function Counter(props){
    const [counter, setCounter] = React.useState(0)
    const [styleSize, setSize] = React.useState(30)

    function sizeHandler(number){
        let newSize = 30 + number * 2
        setSize(newSize)
    }

    function counterHandler(){
        let number = getRandom()
        setCounter(number)
        sizeHandler(number)
    }

    function getRandom(max=10){
        let random = Math.floor(Math.random() * max)
        return random
    }

    return (
        <div className="container">
      <div className="application">
        <h1 style={{"font-size": styleSize}}>{props.title}</h1>
        <div className="counter">
          {counter}
        </div>
        <hr />
        <button className="button" onClick={counterHandler}><i className="fa-solid fa-spinner"></i>{props.button}</button>
      </div>
    </div>
    )
}

export default Counter;