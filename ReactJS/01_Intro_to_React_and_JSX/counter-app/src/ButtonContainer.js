import ButtonDown from "./Button_down";
import ButtonReset from "./Button_reset";
import ButtonUp from "./Button_up";

function ButtonContainer(props){
    return (
        <div className="buttons-container" id="btn-container">
                <ButtonDown value="Subtract"/>
                <ButtonReset value="Reset"/>
                <ButtonUp value="Add" />
            </div>
    )
}

export default ButtonContainer;