async function getInfo() {
    let busId = document.getElementById("stopId").value
    let busStopNameElement = document.getElementById("stopName")
    let busStopULElement = document.getElementById("buses")

    try{
        let data = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${busId}`)
        let dataJson = await data.json()
        busStopNameElement.textContent = dataJson.name
        for (let [busId, time] of Object.entries(dataJson.buses)){
            let newListElement = document.createElement("li")
            newListElement.textContent = `Bus ${busId} arrives in ${time} minutes`
            busStopULElement.appendChild(newListElement)
        }
    }

    catch (error) {
        busStopNameElement.textContent = "Error"
    }

}