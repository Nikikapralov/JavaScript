export function handleOpen(event, stateFunction) {
    // Set to true when the modal should be opened.
    return stateFunction(true)
}

export function handleClose(event, stateFunction) {
    // Set to false when the modal should be closed.
    return stateFunction(false)
}