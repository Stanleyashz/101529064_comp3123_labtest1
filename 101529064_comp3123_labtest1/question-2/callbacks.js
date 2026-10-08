console.log("COMP3123 - Lab Test 1 - Question 2: Promises")

//Given code
const delayedSuccess = () => {
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        console.log(success)
    }, 500)
}

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!')
        } catch (e) {
            console.error(e)
        }
    }, 500)
}

//delayedSuccess()
//delayedException()

//Promise version of delayedSuccess - resolves after 500ms
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = {'message': 'delayed success!'}
            resolve(success)
        }, 500)
    })
}

//Promise version of delayedException - rejects after 500ms
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = {'error': 'delayed exception!'}
            reject(error)
        }, 500)
    })
}

//Call both promises separately and handle the results
resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error))

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error))
