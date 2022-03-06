function create(words){
   let elementToAppendToAllDivs = document.getElementById("content")
   for (let word of words){
    let divElement = document.createElement("div")
    let paragraphElement = document.createElement("p")
    paragraphElement.textContent = word
    paragraphElement.style.display = "none"
    divElement.addEventListener("click", function(e){
       let paragraph = divElement.querySelector("p")
       paragraph.style.display = "block"
    })
    divElement.appendChild(paragraphElement)
    elementToAppendToAllDivs.appendChild(divElement)
   };
}