function attachEventsListeners() {
    let valuesObject = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi:	1609.34, 
        yrd: 0.9144,
        ft:	0.3048,
        in:	0.0254,
    }

    let buttonElement = document.getElementById('convert')
    let inputTextElement = document.getElementById("inputDistance")
    let outputTextElement = document.getElementById("outputDistance")

    buttonElement.addEventListener("click", function(e){
        let input = Number(inputTextElement.value)
        let inputMetric = document.getElementById("inputUnits").querySelectorAll("option:checked")[0].value
        let meters = valuesObject[inputMetric] * input
        let outputMetric = document.getElementById("outputUnits").querySelectorAll("option:checked")[0].value
        let result = meters / valuesObject[outputMetric]
        outputTextElement.value = result
    })
}