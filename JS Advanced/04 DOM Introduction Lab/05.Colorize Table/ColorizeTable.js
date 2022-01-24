function colorize() {
    let items = document.querySelectorAll("tr")
    console.log(items)
    for (let i = 0; i < items.length; i++){
        if (i % 2 == 1){
            items[i].style.background = "Teal"
        }
    }
}