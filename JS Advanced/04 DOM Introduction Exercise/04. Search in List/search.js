function search() {
   let inputElementValue = document.getElementById("searchText").value
   let listElementTowns = document.getElementsByTagName("li")
   let foundTowns = {}
   for (let li of listElementTowns){
      town = li.textContent
      if (inputElementValue == ""){
         break
      }
      if (town.includes(inputElementValue)){
         foundTowns[town] = li
      }
   }
   for (let town in foundTowns){
      foundTowns[town].style.textDecoration = "underline"
      foundTowns[town].style.fontWeight = "bold"
   }
   let getElementResult = document.getElementById("result")
   getElementResult.textContent = Object.keys(foundTowns).length + "matches found"
}
