class Company{
    constructor(){
        this.departments = {}
    }
    addEmployee(username, salary, position, department){
        let inputs = [username, salary, position, department]
        for (let input of inputs){
            if (["", undefined, null].includes(input)){
                throw new Error("Invalid input!")
            }
        }
        if (salary < 0){
            throw new Error("Invalid input!")
        }

        if (!Object.keys(this.departments).includes(department)){
            this.departments[department] = []
        }
        this.departments[department].push({"name": username, "salary": salary, "position": position})
        return `New employee is hired. Name: ${username}. Position: ${position}`
    }

    bestDepartment(){
        let bestSalary = {}
        for (let [department, agentsList] of Object.entries(this.departments)){
            let totalSalary = 0
            let agentAmount = 0
            for (let agentDict of agentsList){
                agentAmount += 1
                totalSalary += agentDict.salary
            }
            let averageSalary = totalSalary / agentAmount
            bestSalary[department] = averageSalary
        }
        let sorted = Object.entries(bestSalary).sort((a, b) => b - a)
        let highestAverageDepartment = sorted[0][0]
        let highestAverageSalary = sorted[0][1]

        let result = `Best Department is: ${highestAverageDepartment}\nAverage salary: ${highestAverageSalary.toFixed(2)}\n`

        let sortedAgents = this.departments[highestAverageDepartment].sort(function (a, b){
            if (a.salary < b.salary) {
                return 1;
              }
            else if (a.salary > b.salary) {
                return -1;
              }
              // a must be equal to b
            else {
                if (a.name.localeCompare(b.name)){
                    return -1
                }
                else if (b.name.localeCompare(a.name)){
                    return 1
                }
                else{
                    return 0
                }
            }
              
        })

        console.log(sortedAgents)

        for (let agent of sortedAgents){
            result += `${agent.name} ${agent.salary} ${agent.position}\n`
        }

        return result.slice(0, result.length - 1)
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
