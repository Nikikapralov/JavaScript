function calculator() {
    let object = {
        init: function(selector1, selector2, resultSelector){
            object.element1 = document.querySelector(selector1)
            object.element2 = document.querySelector(selector2)
            object.result = document.querySelector(resultSelector)
        },
        add: function(){
            let result = Number(object.element1.value) + Number(object.element2.value)
            object.result.value = result
        },
        subtract: function(){
            let result = Number(object.element1.value) - Number(object.element2.value)
            object.result.value = result
        }

    }

    return object
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 



