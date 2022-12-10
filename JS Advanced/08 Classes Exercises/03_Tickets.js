function getTickets(array, sortingCriteria){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination
            this.price = Number(price)
            this.status = status
        }
    }
    let allTickets = []

    for (let entry of array){
        let currentTicket = new Ticket(...entry.split("|"))
        allTickets.push(currentTicket)
    }

    if (sortingCriteria == "destination"){
        return allTickets.sort((a, b) => a.destination.localeCompare(b.destination))
    }
    else if (sortingCriteria == "price"){
        return allTickets.sort((a, b) => a.price - b.price)
    }
    else if (sortingCriteria == "status"){
        return allTickets.sort((a, b) => a.status.localeCompare(b.status))
    }
}


let [array, sortingCriteria] = [['Philadelphia|94.20|available','New York City|95.99|available','New York City|95.99|sold','Boston|126.20|departed'], 'destination']
console.log(getTickets(array, sortingCriteria))
