function focused() {
    let inputElementsToAddEventsTo = document.getElementsByTagName("input")
    for (let input of inputElementsToAddEventsTo){
        input.addEventListener("focus", function(e){
            e.currentTarget.parentNode.className = "focused"
        })
        input.addEventListener("blur", function(e){
            e.currentTarget.parentNode.className = ""
        })
    }    
}