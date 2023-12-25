// Задание 1 // 
function user(name) {
    return 'Hello'
}

const result = user('Vitaly')
console.log(result)

// Задание 2 //

const numbers = [1, 2, 12, 4, 22]
function Check(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i])
        }
    }
    return
}
console.log(Check(numbers))

// Задание 3 //

function calc(fn, sn, operator) {
    if (operator === 'plus') {
        return fn + sn
    }
    else if (operator === 'minus') {
        return fn - sn
    } 
    else if (operator === 'multiply') {
        return fn * sn
    } 
    else if (operator === 'divide') {
        return fn / sn
    }
}
console.log(calc(2, 2, 'divide'))