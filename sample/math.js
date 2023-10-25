// exports.multiply = function(a, b) {
export const multiply = function(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a * b)
        }, 100)
    })
}