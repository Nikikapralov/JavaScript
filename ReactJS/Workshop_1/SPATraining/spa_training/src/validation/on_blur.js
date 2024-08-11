import { buildKeyHistory, buildNewObjectTreeLike } from "../utils/utils"

    export function validateData(event, validationFunc, setErrorFormFunc, errorData) {
    // A function to handle validation on onBlur handlers.
    // OnBlur was chosen against onChange so as to not annoy the client with immediate
    // validation errors as soon as he begins typing the code.
    // Check the validation and either set the parameter to true or false accordingly.
    const VALUE = event.target.value
    const NAME = event.target.name
    let path = buildKeyHistory(errorData, NAME)
    if (!validationFunc(VALUE)){
        setErrorFormFunc((previousErrorFormStatus) => buildNewObjectTreeLike(previousErrorFormStatus, true, path))
    }
    else{
        setErrorFormFunc((previousErrorFormStatus) => buildNewObjectTreeLike(previousErrorFormStatus, false, path))
    }
}


