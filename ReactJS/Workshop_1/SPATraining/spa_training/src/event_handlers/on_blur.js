// export function handleOnBlur(event, setErrorFormFunc, validationFunc){
//     // A function to handle validation on onBlur handlers.
//     // OnBlur was chosen against onChange so as to not annoy the client with immediate
//     // validation errors as soon as he begins typing the code.
//     // Check the validation and either set the parameter to true or false accordingly.
//     const VALUE = event.target.value
//     const NAME = event.target.name
//     if (!validationFunc(VALUE)){
//         setErrorFormFunc((previousErrorFormStatus) => ({
//             ...previousErrorFormStatus,
//             [NAME]: true
//         }))
//     }
//     else{
//         setErrorFormFunc((previousErrorFormStatus) => ({
//             ...previousErrorFormStatus,
//             [NAME]: false
//         }))
//     }
// }

export function handleOnBlur(event, callbackFunction, args=[]){
    // Call the provided callback when the on blur effect is triggered.
    return callbackFunction(event, ...args)
}

