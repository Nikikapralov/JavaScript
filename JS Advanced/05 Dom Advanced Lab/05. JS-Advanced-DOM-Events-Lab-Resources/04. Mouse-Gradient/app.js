function attachGradientEvents() {
    let gradientBoxElement = document.getElementById("gradient-box")
    let resultElement = document.getElementById("result")
    gradientBoxElement.addEventListener("mousemove", function(event){
        let widthOfEvent = event.offsetX
        let widthOfBox = event.currentTarget.offsetWidth
        let result = String(Math.floor((widthOfEvent / widthOfBox) * 100))
        resultElement.textContent = result + "%"
    })
}