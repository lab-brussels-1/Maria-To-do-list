export const validateUserInput = (str) => {
    if (str === '' || str === null || str.length < 2) {
       alert('your task should be longer than two letters')
     return false
    }
    else
    { return true }
}