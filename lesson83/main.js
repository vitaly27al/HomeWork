// Задание 1 // 

const user = {
    name: 'Vitaliy',
    age: 23,
    height: 179,
    weigth: 76,
    isAdmin: true
}
console.log(user)


// Задание 2 //

const user1 = {
    Vitaliy: {
        age: 23,
        height: 179,
        weigth: 76,
        isAdmin: true,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
}
console.log(user1.Vitaliy)
user1.Vitaliy.sayHello('John')


// Задание 3 //

const users = [
    {
        name: 'Alex',
        age: 27,
        isAdmin: false
    },
    {
        name: 'Vitaliy',
        age: 23,
        isAdmin: true
    },
    {
        name: 'Vitaliy',
        age: 23,
        isAdmin: false
    }
]

let simpleUsers = 0;

for (let i = 0; i < users.length; i++) {
    if(users[i].isAdmin === false) {
        simpleUsers++;
    }
}
console.log(simpleUsers)