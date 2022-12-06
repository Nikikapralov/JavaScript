function attachEvents() {
    let buttonElement = document.getElementById("submit")
    let forecastElement = document.getElementById("forecast")
    let currentConditionsElement = document.getElementById("current")
    let upcomingConditionsElement = document.getElementById("upcoming")

    function findLocation(dataJson, location){
        let result = undefined
        console.log(dataJson)
        for (let entry of dataJson){
            if (entry.name == location){
                result = entry
            }
        }

        if (result == undefined){
            throw new Error("Not found")
        }

        return result

    }

    function buildSingleCondition(data){
        let newDivElement = document.createElement("div")
        let conditionIconMap = {"Sunny": "☀", "Partly sunny": "⛅", "Overcast": "☁", "Rain": "☂"}
        let icon = conditionIconMap[data.forecast.condition]
        newDivElement.textContent = `${icon} ${data.name} ${data.forecast.low}°/${data.forecast.high}° ${data.forecast.condition}`
        return newDivElement
    }

    function buildCurrentConditions(currentConditions){
        let divElement = buildSingleCondition(currentConditions)
        currentConditionsElement.appendChild(divElement)

    }

    function buildThreeDayForecast(threeDayForecastData){
        for (let dayForecast of threeDayForecastData.forecast){
            let newDict = {"name": threeDayForecastData.name, "forecast": dayForecast}
            let divElement = buildSingleCondition(newDict)
            upcomingConditionsElement.appendChild(divElement)
        }

    }

    buttonElement.addEventListener("click", async function (e){
        let locationValue = document.getElementById("location").value

        try{
            let data = await fetch("http://localhost:3030/jsonstore/forecaster/locations")
            let dataJson = await data.json()
            let locationData = findLocation(dataJson, locationValue)
            let code = locationData.code
            let [currentConditionsData, threeDayForecastData] = await Promise.all([
                fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`),
                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
            ])
            let [currentConditionsDataJson, threeDayForecastDataJson] = await Promise.all([
                currentConditionsData.json(),
                threeDayForecastData.json()
            ])
            forecastElement.style.display = "block"
            buildCurrentConditions(currentConditionsDataJson)
            buildThreeDayForecast(threeDayForecastDataJson)
            
        }
        catch (error) {
            forecastElement.textContent = "Error"
            forecastElement.style.display = "block"
        }



    })
}

attachEvents();