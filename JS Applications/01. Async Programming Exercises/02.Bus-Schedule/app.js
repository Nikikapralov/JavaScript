function solve() {
    let departButton = document.getElementById("depart")
    let arriveButton = document.getElementById("arrive")
    let infoButton = document.getElementById("info")
    let id = "depot"
    let stopName = undefined


    async function depart() {
        departButton.disabled = true
        arriveButton.disabled = false
        try{
            let data = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${id}`)
            let dataJson = await data.json()
            stopName = dataJson.name
            id = dataJson.next
            console.log(id)
            infoButton.textContent = `Next stop ${stopName}`
        }

        catch (error){
        
        }
    }

    async function arrive() {
        departButton.disabled = false
        arriveButton.disabled = true
        infoButton.textContent = `Arriving at ${stopName}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();