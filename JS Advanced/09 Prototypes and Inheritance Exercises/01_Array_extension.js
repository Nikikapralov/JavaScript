(function solve(){
    Array.prototype.last = function (){
        return this[this.length - 1]
    }

    Array.prototype.skip = function (value){
        return this.slice(value)
    }

    Array.prototype.take = function (value){
        return this.slice(0, value)
    }

    Array.prototype.sum = function (){
        return this.reduce((a, b) => a + b)
    }

    Array.prototype.average = function(){
        return this.reduce((a, b) => a + b) / this.length
    }
})()
