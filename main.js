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

// const todos = [
//     {
//         id : 1,
//         text : "Take out trash",
//         isCompleted : true

//     },

//     {
//         id : 2,
//         text : "Meeting with Boss",
//         isCompleted : true

//     },

//     {
//         id : 3,
//         text : "Dentist appt",
//         isCompleted : false

//     }
// ]
// console.log(todos);

// todos[0,1].email = 'imanardiansyah89@gmail.com'
// // console.log(todos[2].text);

// const todosJSON = JSON.stringify(todos)

// console.log(todosJSON);

//for
// for (let i = 0;  i <= 10; i++  ) {
//      console.log(i);
// }

// while

// let i = 0
// while (i < 10) {
//     console.log(`nomor yang akan tampil adalah : ${i}`)
//     i++
// }

// for II example

// for (i = 0; i < todos.length; i++) {
//     console.log(todos[i].id)
// }

// for (let ayu of todos) {
//     console.log(ayu.text);
//     }

// forEach, map, filter

// todos.forEach(function (ayu) {
//     console.log(ayu.text)
// })

// const ayuText = todos.map(function(ayu) {
//     return ayu.text
// })

// console.log(ayuText);

// todos.forEach(function (ayu) {
//     console.log(ayu.text);
// })

// const todoCompleted = todos.filter(function (ayu) {
//     return ayu.isCompleted === true
// }).map(function (ayu) {
//     return ayu.text
// })

// console.log(todoCompleted)

// CONDITIONALS

// function makeTea(isCold) {
//     if(isCold) {
//         var tea = "make an ice tea"
//     } else {
//         var tea = "make an hot tea"
//     }
//     return tea
// }

// console.log(makeTea(true));

// const x = 4

// if (x === 10) {
//     console.log('x is 10');
// } else if (x > 10) {
//     console.log('x is greater than 10')
// }
//  else {
//     console.log('x is less than 10')
// }

// x = 6
// y = 11

// if (x > 5  || y > 10) {
//     console.log('x is more than 5 and y is more than 10');
// }

// KONDISI PAKAI OPERATOR TERNARY

// const x = 11

// const color = x > 10 ? 'red' : 'blue'

// // console.log(color);

// switch (color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue' :
//         console.log('color is blue');
//         break
//     default:
//         console.log('color is not blue and red');
//         break;
// }

// FUNCTION
// function addNums(num1, num2) {
//     return num1 + num2;
// }

// console.log(addNums(7, 7));

// const addNumb = (numb1 = 2, numb2 = 2) => numb1 + numb2

// console.log(addNumb(7,5));

// const {map, asyncRoot, sleep} = require('modern-async')

// asyncRoot(async () => {
//   const array = [1, 2, 3]
//   const result = await map(array, async (v) =>{
//     await sleep(10)
//     return v * 2
//   })
// console.log(result)
// })

// const anu = (anu1 = 1, anu2= 2) => {
//   console.log(anu1 + anu2);
// }

// anu(56, 4)

// const anuNumb = numbb1 => numbb1 + 1

// console.log(anuNumb(7));

//constructor function

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

//Instantiate object

const person1 = new Person('jhon', 'doe', '15-08-1989');
console.log(person1.dob);
