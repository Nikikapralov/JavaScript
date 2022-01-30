function solve(){
  let getElementTextarea = document.getElementById("input")
  let sentences = getElementTextarea.value.split(".").map(x => (x != "") ? x.trim() + "." : x).filter(x => x != "")
  let current = []
  let paragraphs = []
  for (let sentence of sentences){
    current.push(sentence)
    if (current.length == 3){
      paragraphs.push(`<p>${current.join(" ")}</p>`)
      current = []
    }
  }
  if (current.length > 0){
    paragraphs.push(`<p>${current.join(" ")}</p>`)
  }
  let getElementOutput = document.getElementById("output")
  for (let paragraph of paragraphs){
    getElementOutput.innerHTML += paragraph
  }
}