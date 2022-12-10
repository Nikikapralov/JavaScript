/// Im sorry, I just do not understand what is required of me for this exerscise. It just does not make any sense. I guess, im not 
/// the only one, since the teacher didn't comment on that one either...Anyway, this has been the case with almost every homework problem
/// for this course, but this one is truly extreme. I have literally no idea what is expected of me...I pass.


class Textbox {
    constructor(selector, regex){
        this._elements = new Set()
        this._invalidSymbols = regex
    }
    
    get value(){

    }

    set value(input){

    }

    get elements(){

    }

    set elements(value){

    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
