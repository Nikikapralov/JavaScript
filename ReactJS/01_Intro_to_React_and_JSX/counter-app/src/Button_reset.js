function ButtonReset(props){
    return (
        <button id="reset">
        <i className="fa-solid fa-spinner"></i>
    {props.value}
        </button>
    )
}

export default ButtonReset;