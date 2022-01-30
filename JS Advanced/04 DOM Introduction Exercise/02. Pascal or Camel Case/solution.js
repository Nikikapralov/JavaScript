function solve() {
  let allowed = ["Pascal Case", "Camel Case"]
  let textElemenetInput = document.getElementById("text").value
  let namingConventionElementInput = document.getElementById("naming-convention").value
  let resultElementDisplay = document.getElementById("result")
  let result = ""
  if (allowed.includes(namingConventionElementInput)){
    let words = textElemenetInput.split(" ")
    if (namingConventionElementInput == "Pascal Case"){
      for (let word of words){
        result += word.toUpperCase()[0] + word.toLowerCase().slice(1)
      }
    }
    else{
      result = words.shift().toLowerCase()
      console.log("this is:" + result)
      for (let word of words){
        result += word.toUpperCase()[0] + word.toLowerCase().slice(1)
      }
    }
  resultElementDisplay.textContent = result
  }
  else{
    resultElementDisplay.textContent = "Error!"
  }
}