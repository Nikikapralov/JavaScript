(function solve(){
    String.prototype.ensureStart = function (value){
        if (!this.startsWith(value)){
            return value + this
        }
        return this.toString()
    }

    String.prototype.ensureEnd = function (value){
        if (!this.endsWith(value)){
            return this + value
        }
        return this.toString()
    }

    String.prototype.isEmpty = function (){
        return this.length == 0 ? true : false
    }

    String.prototype.truncate = function (value){
        if (this.length <= value){
            return this.toString()
        }

        else if (this.length > value){
            let splitted = this.split(" ")
            while (true){
                let currentScore = splitted.join(" ")
                if (currentScore.length < value){
                    return currentScore + "..."
                }
                else{
                    splitted = currentScore.split(" ")
                    splitted.pop()
                }
            }
        }

        if (value < 4){
            return ".".repeat(value)
        }

        if (!this.includes(" ")){
            return this.slice(0, value - 3) + "..."
        }

    }

    String.format = function (string, ...params){
        let newString = string
        let splitted = string.split(" ")
        for (let entry of splitted){
            if (entry.startsWith("{") && entry.endsWith("}")){
                let number = Number(entry.slice(1, entry.length - 1))
                newString = params[number] != undefined ? newString.replace(entry, params[number]) : newString.replace(entry, entry)
            }
        }
        return newString
    }
})()