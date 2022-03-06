function solve(data, criteria){
    let jsonData = JSON.parse(data)
    let [key, value] = criteria.split("-")
    let filteredObjects = jsonData.filter(object => object[key] == value)
    for (let i = 0; i < filteredObjects.length; i++){
        console.log(`${i}. ${filteredObjects[i].first_name} ${filteredObjects[i].last_name} - ${filteredObjects[i].email}`)
    }
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
)