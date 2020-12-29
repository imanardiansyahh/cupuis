// const name = "iman"

// const age = "31"


// // concat string 
// console.log('hyyyy my name is ' + name  + ' and i am ' + age)

// // template iteral 
// const hello = `hallo guys my name is ${ name} and i am ${age} years old`

// console.log(hello)


// const s = 'hello world'
// const s = 'technology, computers, it, code'

// // console.log(s.length)
// // console.log(s.toLocaleUpperCase())
// // console.log(s.toLowerCase())
// // console.log(s.substring(0, 5).toLocaleUpperCase())
// console.log(s.split(', '))



// Arrays

// const fruits = ['Apples', 'Oranges', 'Pears' ]

// fruits[3]= "grapes"

// fruits.push('mangos')

// fruits.unshift('strawberry')

// // fruits.pop()

// console.log(Array.isArray(fruits))
// // console.log(Array.isArray('mangos'))

// console.log(fruits.indexOf('Pears'))


// console.log(fruits)


// OBJECT LITERAL ../

// const person = {
//     firstName : 'Jhon',
//     lastName : 'Doe',
//     age : 30,
//     hobbies : ['music', 'movies', 'sports'],
//     address : {
//         street : '50 main st',
//         city : 'Boston',
//         state : 'MA'
//     }
// }

// person.email = 'Jhondoe@gmail.com'

// console.log(person)




// Arrays Of Objects & JSON 

const todos = [
    {
        id : 1,
        text : "Take out trash",
        isCompleted : true

    },

    {
        id : 2,
        text : "Meeting with Boss",
        isCompleted : true

    },

    {
        id : 3,
        text : "Dentist appt",
        isCompleted : false

    }
]
// console.log(todos);

// todos[0, 1].email = 'iman@gmail.com'
// console.log(todos[2].text);

const todosJSON = JSON.stringify(todos)

console.log(todosJSON);