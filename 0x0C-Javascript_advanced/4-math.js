function divideBy(firstNumber) {
    return function (secondNnumber) {
        return (secondNnumber / firstNumber)
    }
}
function addBy(firstNumber) {
    return function (secondNnumber) {
        return (firstNumber + secondNnumber)
    }
}

let addBy100 = addBy(100)
let addBy1000 = addBy(1000)
let divideBy10 = divideBy(10)
let divideBy100 = divideBy(100)
