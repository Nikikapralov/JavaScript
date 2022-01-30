function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let getTableRows = document.querySelectorAll("tbody tr")
      for (let tr of getTableRows){
         tr.classList.remove("select")
      }
      let getSearchFieldText = document.getElementById("searchField").value
      let rowData = []
      let elementsToChange = []
      for (let tr of getTableRows){
         let data = []
         let getRowData = tr.querySelectorAll("td")
         for (let td of getRowData){
            data.push(td.textContent)
         }
         rowData.push([tr, data])
      }
      for (let item of rowData){
         for (let word of item[1]){
            if (word.includes(getSearchFieldText)){
               elementsToChange.push(item[0])
            }
         }
      }
      for (let element of elementsToChange){
         element.classList.add("select")
      }
   }
}