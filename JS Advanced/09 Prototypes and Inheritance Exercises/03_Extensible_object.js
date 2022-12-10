function extensibleObject() { 
    return {
        extend(template){
            let parentPrototype = Object.getPrototypeOf(template)
            let properties = Object.getOwnPropertyNames(template)
            for (let property of properties){
                if (typeof template[property] != "function"){
                    this[property] = template[property]
                    console.log(typeof property)
                }
                else{
                    parentPrototype[property] = template[property]
                }
            }
        }
    }
} 
const myObj = extensibleObject(); 
const template = { 
    extensionMethod: function () {}, 
    extensionProperty: 'someString' 
  } 
  myObj.extend(template); 
  console.log(myObj.__proto__)
  