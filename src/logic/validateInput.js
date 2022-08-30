export const validateUserInput = (str) => {
    if (str === '' || str === null || str.length < 2) {
     return false
    }
    else
    { return true }
}