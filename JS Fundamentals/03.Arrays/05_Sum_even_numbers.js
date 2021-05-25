function sum(array){
   let result = array.filter((a) => a % 2 == 0, [0])
   if (result.length >= 1){
    result = result.reduce((a, b) => Number(a) + Number(b))
    console.log(result)
   }
   else{
       console.log(0)
   }
}

sum(['3','5','7','9'])