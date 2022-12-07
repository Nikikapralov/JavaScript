class Triathlon {

    constructor(competitionName){
        this.competitionName = competitionName
        this.participants = {}
        this.listOfFinalists = []
    }

    addParticipant(name, gender){
        if (Object.keys(this.participants).includes(name)){
            return `${name} has already been added to the list`
        }
        this.participants[name] = gender
        return `A new participant has been added - ${name}`
    }

    completeness(name, condition){
        if (!Object.keys(this.participants).includes(name)){
            throw new Error(`${name} is not in the current participants list`)
        }

        if (condition < 30){
            throw new Error(`${name} is not well prepared and cannot finish any discipline`)
        }

        let canComplete = Math.floor(condition / 30)
        if (canComplete < 3){
            return `${name} could only complete ${canComplete} of the disciplines`
        }

        this.listOfFinalists.push({[name]: this.participants[name]})
        return `Congratulations, ${name} finished the whole competition`
    }

    rewarding(name){
        let notInList = true
        for (let entry of this.listOfFinalists){
            if (Object.keys(entry).includes(name)){
                notInList = false
            }
        }
        if (notInList){
            return `${name} is not in the current finalists list`
        }
        return `${name} was rewarded with a trophy for his performance`
    }

    showRecord(criteria){
        if (this.listOfFinalists.length == 0){
            return "There are no finalists in this competition"
        }

        if (criteria == "all"){
            let result = `List of all ${this.competitionName} finalists:\n`
            for (let person of this.listOfFinalists){
                result += `${Object.keys(person)[0]}\n`
            }
            return result.slice(0, result.length - 1)

        }

        let doesInclude = false
        let criteriaOnlyFinalists = []

        for (let dictionary of this.listOfFinalists){
            if (Object.values(dictionary).includes(criteria)){
                doesInclude = true
                criteriaOnlyFinalists.push(dictionary)
            }
        }

        if (!doesInclude){
            return `There are no ${criteria}'s that finished the competition`
        }

        if (doesInclude){
            return `${Object.keys(criteriaOnlyFinalists[0])[0]} is the first ${criteria} that finished the
            ${this.competitionName} triathlon`
        }
        

    }

}
    
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));
