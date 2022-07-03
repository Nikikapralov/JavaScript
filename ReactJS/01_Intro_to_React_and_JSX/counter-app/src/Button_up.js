function ButtonUp(props){
    return (
        <button id="up">
        <i className="fa-solid fa-arrow-up"></i>
        {props.value}
    </button>
    )
}

export default ButtonUp;