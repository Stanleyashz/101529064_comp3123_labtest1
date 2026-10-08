console.log("COMP3123 - Lab Test 1 - Question 1: ES6 Features")

//Function returns a promise: resolve with the result or reject on bad input
const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Input must be an array")
        } else {
            //filter out the non-strings, then lower case the remaining words
            const words = mixedArray
                .filter(item => typeof item === "string")
                .map(word => word.toLowerCase())
            resolve(words)
        }
    })
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

//Handle the resolved and rejected results
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error))
