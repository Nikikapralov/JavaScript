function solve(object){
    if (object.dizziness){
        let amount = 0.1 * object.experience * object.weight
        object.levelOfHydrated += amount
        object.dizziness = false
    }
    return object
}

console.log(solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  
  ))