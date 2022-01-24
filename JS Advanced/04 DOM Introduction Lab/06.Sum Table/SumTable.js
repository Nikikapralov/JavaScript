function sumTable() {
    let prices = document.querySelectorAll("td:nth-of-type(even)")
    prices = Array.from(prices)
    prices.pop()
    let sum = 0
    for (let item of prices){
        sum += Number(item.textContent)
        console.log(sum)
    }
    let result = document.getElementById("sum")
    result.textContent = sum
}