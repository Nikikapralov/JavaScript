function returnPeople(){
    class Person{
        constructor(firstName, lastName, age, email){
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.email = email 
        }
    
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    let person_1 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com')
    let person_2 = new Person("SoftUni")
    let person_3 = new Person("Stephan", "Johnson", 25)
    let person_4 = new Person("Gabriel", "Peterson", 24, "g.p@gmail.com")
    return [person_1, person_2, person_3, person_4]
}