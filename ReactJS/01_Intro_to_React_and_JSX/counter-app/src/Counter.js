
import "./index_counter_app.css"
import ButtonContainer from "./ButtonContainer.js";

function Counter(props){
    return (
        <div className="container">
        <div className="counter-app">
            <h1>Counter App </h1>
            <div id="counter">0</div>
            <hr id="hr-line" />
            <ButtonContainer />
            <script src="./index_counter_app.js"></script>
        </div>
    </div>
    )
}

export default Counter;