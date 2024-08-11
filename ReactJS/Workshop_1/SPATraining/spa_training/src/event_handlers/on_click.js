export function handleClick(event, callbackFunction, args=[]){
    // Call the callback function when a click happens.
    return callbackFunction(event, ...args)
}