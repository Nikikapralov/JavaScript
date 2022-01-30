function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let textAreaInputElement = document.querySelector("div#inputs > textarea")
      let data = textAreaInputElement.value 
      let dataArray = JSON.parse(data)
      let restaurants = {}
      let highestAverageRestaurant = {}
      let counter = 1
      for (let item of dataArray){
         let [restaurant, rest] = item.split(" - ")
         let people = rest.split(", ")
         let peopleList = {}
         for (let person of people){
            let [name, salary] = person.split(" ")
            peopleList[name] = Number(salary)
         }
         if (restaurants[restaurant]){
            Object.assign(restaurants[restaurant], peopleList)
         }
         else{
            restaurants[restaurant] = peopleList
         }
         let average = computeAverage(restaurants[restaurant])
         let highest = computeHighest(restaurants[restaurant])
         if (highestAverageRestaurant[restaurant]){
            highestAverageRestaurant[restaurant][0] = average
            highestAverageRestaurant[restaurant][1] = highest
            continue
            }
         highestAverageRestaurant[restaurant] = [average, highest, counter]
         counter += 1
      }
      let bestRetaurant = Object.entries(highestAverageRestaurant).sort(compare)
      console.log(bestRetaurant)
      bestRetaurant = bestRetaurant[0]
      workersToDisplayBestRetaurant = computeWorkersOutput(restaurants[bestRetaurant[0]])
      let dataDisplayElement = document.querySelector("div#bestRestaurant > p")
      let workersDisplayElement = document.querySelector("div#workers > p")
      dataDisplayElement.textContent = `Name: ${bestRetaurant[0]} Average Salary: ${bestRetaurant[1][0].toFixed(2)} Best Salary: ${bestRetaurant[1][1].toFixed(2)}`
      workersDisplayElement.textContent = workersToDisplayBestRetaurant
   }

   function computeAverage(peopleList){
      result = Object.values(peopleList).reduce((a, b) => a + b, 0) / Object.keys(peopleList).length
      return Number(result)
   }

   function computeHighest(peopleList){
      result = Math.max(...Object.values(peopleList).map(a => Number(a)))
      return Number(result)
   }
   function computeWorkersOutput(object){
      let result = []
      for (let item in object){
         result.push(`Name: ${item} With Salary: ${object[item]}`)
      }
      return result.join(" ")
   }
   function compare(a, b){
      if (b[1][0] - a[1][0] > 0){
         return 1
      }
      else if (b[1][0] - a[1][0] < 0){
         return -1
      }
      else{
         if (a[1][2] - b[1][2] > 0){
            return 1
         }
         else{
            return -1
         }
      }
   }
}

//["PizzaHut - Peter 500, George 300, Mark 800",
//"TheLake - Bob 1300, Joe 780, Jane 660"]
