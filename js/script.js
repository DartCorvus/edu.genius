// let name = "Надя"
// let hello = `Hello, ${name}, when you wanna eat giozy?`
// console.log(hello)


// let name = "Іван";
// let city = "Kyiv";
// city = name;
// console.log(city);

// let name = "Olga";
// console.log(`привіт ${1}`); //
// console.log(`привіт ${"name"}`); //
// console.log(`привіт ${name}`); // ?

//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип
// console.log(typeof Number(a));
// console.log(typeof parseInt(b));
// console.log(typeof parseFloat(c));

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3
// console.log(((0.1 * 10) + (0.2 * 10)) / 10); 

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40
// console.log(Math.max(20, 10, 50, 40));


//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
// console.log(Math.random(2, 4))

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";
// console.log(message.length); //19


//***8**
//вивести в консоль message  великими літерами
// console.log(message.toUpperCase());


//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// let user = {};
// user.name = "Max";
// user.age = 33;
// user.city = "Kyiv";
// // console.log(user);
// delete user.city;
// user["like flowers"] = true;
// // console.log(user);



// //***10**
// // За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта

// for (key in user) {
//     console.log(key);
//     console.log(user[key]);
// }



// const message = "Peptida!!!"
// alert(message)

// const isConfirm = confirm("Are you serious??");
// console.log(isConfirm);

// const userName = prompt("Who are you?")
// console.log(userName)

// let value
// value = false
// console.log(typeof (value))

// const newValue = String(value)
// console.log(typeof (newValue))

// let value = "1231"
// console.log(typeof (value))
// const newValue = Number(value)
// console.log(typeof (newValue))

// console.log(5 == 6 && 6 > 3)
// console.log(6 + 3 >= 9 && 8 + 1 === 9)
// console.log(5 + 5 == 9 || 1 * 8 == 8)

// if (5 - 5 === 10) {
//     console.log("AAA")
// } else {
//     console.log("Waaaaagh!!!")
// } 

// 2 + 2 === 6 ? console.log("AAA") : console.log("Waaagh!")

// if (5 + 5 === 11) {
//     console.log("5+5===10")
// } else if (10 + 10 === 21) {
//     console.log("next")
// } else {
//     console.log("Nothing")
// }

// let num = 11
// switch (num) {
//     case 0:
//         console.log("0")
//         break
//     case 5:
//         console.log("5")
//         break
//     case 7:
//         console.log("7")
//         break
//     case 11:
//         console.log("11")
//         break
// } 

// let cost;
// const sub = "gd"

// switch (sub) {
//     case "free":
//         cost = 0
//         break
//     case "beginner":
//         cost = 110
//         break
//     case "premium":
//         cost = 1000
//         break
//     default:
//         console.log("IDI GUDI")
// }
// console.log(cost)

// const min = prompt("Enter the minutes:")

// if (min >= 0 && min <= 14) {
//     console.log("First quarter")
// } else if (min >= 15 && min <= 29) {
//     console.log("Second quarter")
// } else if (min >= 30 && min <= 44) {
//     console.log("Third quarter")
// } else if (min >= 45 && min <= 60) {
//     console.log("Fourth quarter")
// } else console.log("Incorrect time")

// const value = prompt("What you want?").toLocaleLowerCase()
// let cost

// switch (value) {
//     case "beer":
//         cost = 50
//         alert(`${value} is $${cost} costs`)
//         break
//     case "vino":
//         cost = 150
//         alert(`${value} is $${cost} costs`)
//         break
//     case "cheeps":
//         cost = 20
//         alert(`${value} is $${cost} costs`)
//         break
//     case "jerki":
//         cost = 45
//         alert(`${value} is $${cost} costs`)
//         break
//     case "visky":
//         cost = 500
//         alert(`${value} is $${cost} costs`)
//         break
//     case "beef":
//         cost = 450
//         alert(`${value} is $${cost} costs`)
//         break
//     default: alert(`There are no ${value} in our shop`)
// }

// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let value = prompt("Enter the number")
// if (value > 0) {
//     console.log(true)
// } else if (value < 0) {
//     console.log(false)
// } else if (value == 0) {
//     console.log("This is zero!")
// } else console.log("This is not a number!")

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let value = prompt("Enter the text:")
// switch (value) {
//     case "test":
//         alert("true")
//         break
//     default:
//         alert("false")
//         break
// }

// const value = prompt("Enter the text:")
// if (value == "test") {
//     alert("true")
// } else alert("false")

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let value = Number(prompt("Print a number"))
// if (value > 10) {
//     console.log(value - 5)
// } else console.log(value + 5)

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let value = Number(prompt("Print a number from 1 to 12"))
// switch (value) {
//     case 1:
//         alert("January")
//         break
//     case 2:
//         alert("February")
//         break
//     case 3:
//         alert("March")
//         break
//     case 4:
//         alert("April")
//         break
//     case 5:
//         alert("May")
//         break
//     case 6:
//         alert("June")
//         break
//     case 7:
//         alert("July")
//         break
//     case 8:
//         alert("August")
//         break
//     case 9:
//         alert("September")
//         break
//     case 10:
//         alert("October")
//         break
//     case 11:
//         alert("November")
//         break
//     case 12:
//         alert("December")
//         break
//     default:
//         alert("There is no such mounth")
// }


//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// function sumDigits() {
//     let number = prompt("Введіть тризначне число:");

//     // Перетворюємо число на рядок, розбиваємо на цифри, перетворюємо в числа і сумуємо
//     if (number.length === 3 && !isNaN(number)) {
//         let sum = [...number].reduce((acc, digit) => acc + Number(digit), 0);
//         alert(`Сума цифр: ${sum}`);
//     } else {
//         alert("Будь ласка, введіть коректне тризначне число.");
//     }
// }


// conspect

// sumDigits();

// let a = 0
// while (a < 5) {
//     a++
//     console.log(a, "now")
// }

// let a = 0
// while (a) {
//     console.log(a, "a")
//     a--
// }

// while (a) console.log(a--)

// do {
//     console.log(a, "a")
//     a++
// } while (a < 5)

// for (let a = 0; a < 3; a++) { 
//     console.log(a)
// }

// let summ = 0;
// while (true) {
//     let value = +prompt("Enter the number")
//     if (!value) break
//     summ += value
// }
// console.log("Summ:", summ)

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) continue;
//     console.log(i)
// }

// let arr = ["Apple", "Orange", "Plum", "Lemon"]
// console.log(arr[0])

// arr[2] = "Lemon"
// console.log(arr[2])
// arr[3] = "Cherry"
// console.log(arr)

// arr.push("Tomato")
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift("Tomato")
// console.log(arr)

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let item of arr) {
//     console.log(item)
// }

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// console.log(matrix[1][1 ])

// let arr = [1, 2, 3]
// let arr2 = arr
// arr.push(4)
// console.log(arr2)

// let arr = ["a", "b", "c", "d", "e"]
// arr.splice(2, 1)
// console.log(arr )

// // console.log(arr.slice(1, 3))
// let a = [1, 2, 3]
// console.log(arr.concat(a))

// const fruits = [
//     { id: 0, name: "Apple" },
//     { id: 1, name: "Tomat" },
//     { id: 2, name: "Cherry" },
//     { id: 3, name: "Orange" },
// ];

// console.log(fruits.find((item) => item.id === 3))
// console.log(fruits.filter((item) => item.id < 2))

// let result = fruits.map((item) => item.name.length)
// console.log(result)

// let names = "Оля, Юля, Аня, Петя";
// let arr = names.split(", ")
// console.log(arr)

// let newStr = arr.join(", ")
// console.log(newStr)

// let arr = [1, 2, 3, 4, 5]
// let red = arr.reduce((summ, item) => summ + item)
// console.log(red)

// let arr = [24, 33, 77]
// let summ = arr.reduce((summ, item) => summ + item) / arr.length
// console.log(summ)



// HOMEWORK!


//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//     { id: 0, name: "Apple" },
//     { id: 1, name: "Tomat" },
//     { id: 2, name: "Cherry" },
//     { id: 3, name: "Orange" },
// ];
// const names = fruts.map(fruit => fruit.name);
// console.log(names)



//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let num = 1; num <= 10; num++) {
//     if (num % 2 != 0) continue
//     console.log(num)
// }

//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.log(`цифра ${i}!`);
// }

// let i = 0
// while (i < 5) {
//     console.log(`цифра ${i}!`)
//     i++
// }


//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.


// let i
// while (true) {
//     i = prompt("Enter the numder more than 100")
//     if (i > 100 || i == "") break
// }

// let number;
// do {
//     number = prompt("Enter a number greater than 100");
//     if (number === null || number.trim() === "") break;
// } while (Number(number) <= 100 || isNaN(Number(number)));


//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//     { age: 23, name: "Оля" },
//     { age: 29, name: "Аня" },
//     { age: 10, name: "Юля" },
//     { age: 20, name: "Катя" },
// ];


// let avrAge = girls.reduce((sum, item) => sum + item.age, 0) / girls.length;

// console.log(avrAge)

// NEW LESSON CONSPECT

// functions

// function showMessage(name, city) {
//     console.log("Hello! My name is " + name + ". I'm from " + city)
// }
// showMessage("Max", "Kyiv")
// showMessage("Ihor", "Lviv")

// let userName = "Max"

// const sayHi = function () {
//     let message = "Hello, my name is "
//     console.log(message + userName)
// }
// sayHi()

// function sum(a, b) {
//     let c = a + b
//     return c
// }

// let result = sum(7, 8)
// console.log(result)

// const testFunc = function (a, b) {
//     console.log("a:", a)
//     console.log("b:", b)
// }
// testFunc(5, 8)

//arguments

// const addName = function (...arg) {
//     // const arg = Array.from(arguments)
//     // console.log(arguments)
//     console.log(arg)
// }
// addName(1, 3, 5, 7)

//callbacks

// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes()
//     } else {
//         no()
//     }
// }

// function showOk() {
//     console.log("You say ok")
// }
// function showCancel() {
//     console.log("You say No")
// }

// ask("Yes or no?", showOk, showCancel)

// let hello = function (name) {
//     console.log(`Hello, ${name}`)
// }

// let searchName = function (callback) {
//     let name = "Max"
//     callback(name)
// }

// searchName(hello)

// function checkAge(age) {
//     if (age > 18) {
//         return console.log("Hello!")
//     }
//     return console.log("GoodBye!")

// }
// checkAge(12)

// function showMovie(age) {
//     if (age < 21) {
//         return
//     }
//     return console.log("Go to movie")
// }
// showMovie(21)

// arrow functions

// let test = (arg) => {
//     console.log(arg)
// }
// test("Hey")

// practice

// let showMovie = (age) => {
//     if (age < 21) {
//         return console.log("Bye!")
//     }
//     return console.log("Go to movie")
// }
// showMovie(10)

// let a = () => {
//     console.log("a")
// }

// let b = () => {
//     console.log("b")
// }

// let c = () => {
//     console.log("c")
//     a()
//     b()
// }
// c()

// let addNumber = (number) => {
//     let sum = Number(number) + 10
//     return console.log(sum)
// }

// let numberRef = document.querySelector('input[name="number"]')
// let buttonRef = document.querySelector("button")

// buttonRef.addEventListener('click', () => addNumber(numberRef.value))


// замикання

// function createNewSum(n) {
//     return function () {
//         console.log(n * 10)
//     }
// }
// let calc = createNewSum(10)
// calc()

// function createNewNumber(n) {
//     return function (num) {
//         return n + num
//     }
// }

// let addFive = createNewNumber(5)
// console.log(addFive(0))

// function createUrl(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
// }
// let comUrl = createUrl("com")
// console.log(comUrl("google"))

//    !!!THIS!!!

// function hello() {
//     console.log("Hello!", this)
// }
// hello()


// let user = {
//     name: "Ivan",
//     city: "Odessa",
//     sayHello: hello
// }
// user.sayHello()


//---------------

// function abc() {
//     console.log("In the function")
//     console.log(this) 
// }
// abc()
// document.querySelector('p').onclick = abc


// --------------


// function changeColor() {
//     // console.log(this)
//     this.style.background = "green"
// }
// document.querySelector("div").onclick = changeColor


//-----------------

// let user = document.querySelectorAll("div")
// user.forEach(function (element) {
//     element.onclick = changeColor
// })

//------------------

// let showList = () => {
//     console.log(this)
// }
// showList()

// let list = {
//     names: ["Max", "Nadia", "Peptida", "Bourboun"],
//     showList: showList
// }
// list.showList()
// // There are no "this" in the arrow funcs

//--------------------  bind method

// function hello() {
//     console.log(this)
// }
// let user = {
//     name: "Max",
//     age: 33,
//     hello: hello,
//     sayHelloWindow: hello.bind(window),
//     info: function (city) {
//         console.log(`My name is ${this.name}`)
//         console.log(`My age is ${this.age}`)
//         console.log(`My city is ${city}`)
//     }
// }

// // user.info()

// let Ann = {
//     name: "Ann",
//     age: 23
// }

// let Nata = {
//     name: "Natalia",
//     age: 50
// }

// user.info.bind(Ann)("Kyiv")

// let nataInfo = user.info.bind(Nata, "Odessa")
// nataInfo()

//----------------- call method

// let userInfo = {
//     name: "name",
//     age: 98,
//     logInfo(job) {
//         console.group(`${this.name}, info: `)
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.groupEnd()
//     }
// }

// let Vano = {
//     name: "Vano",
//     age: 45
// }

// userInfo.logInfo.call(Vano, "Driver")

//----------- apply method

// let showUserInfo = {
//     name: name,
//     age: 77,
//     logInfo: function (job, city) {
//         console.group(`${this.name}, info: `)
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.log(`City is ${city}`)
//         console.groupEnd()
//     }
// }

// showUserInfo.logInfo.call(Vano, "Driver", "Kyiv")
// showUserInfo.logInfo.apply(Vano, ["Driver", "Kyiv"])

/////////////////
/////////////////
// Practice

// let message = function (name, stars) {
//     console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`)
// }
// let Bucovel = { hotel: "Bucovel" }
// let Tourist = { hotel: "Tourist" }

// message.call(Bucovel, "Ivan", "5")
// message.call(Tourist, "Max", "3")

// message.apply(Bucovel, ["Peptida", "4"])

// message.bind(Tourist, "Peptida", "5")()

//--------

// let cart = {
//     showItems() {
//         console.log("In cart:", this.items)
//     }
// }
// let woman = {
//     items: ["Трухани, Насісєчнікі, Потняки, Башмакі"]
// }
// let man = {
//     items: ["Майки, Шорти, Шкарпетки, Тапки"]
// }
// let kids = {
//     items: ["Куртки, Шапки, Шльопки, перчатки"]
// }

// // cart.showItems.bind(man)()
// document
//     .querySelector("#wom").addEventListener('click', cart.showItems.bind(woman))
// document
//     .querySelector("#man").addEventListener('click', cart.showItems.bind(man))
// document
//     .querySelector("#kid").addEventListener('click', cart.showItems.bind(kids))

/////////////

// let infoCar = {
//     name: "BMW",
//     model: "X1",
//     color: "Gray",
//     showInfo: function () {
//         console.log(
//             "Car " + this.name + " Model " + this.model + " color " + this.color
//         )
//     }
// }

// let car2 = {
//     name: "Mercedes",
//     model: "GLE",
//     color: "Greeen"
// }
// infoCar.showInfo.bind(car2)()
// infoCar.showInfo.call(car2)
// infoCar.showInfo.apply(car2)

/// lesson 6 conspect

/// procedure programming

// let summ = 20000
// let month = 12
// let p = 1000

// let credit = (sum, date, p) => {
//     return summ + p * date
// }

// console.log(credit(summ, month, p))

// object oriented programming

// let credit = {
//     summ: 20000,
//     month: 12,
//     p: 1000,
//     result() {
//         return this.summ + this.p * this.month
//     }
// }

// console.log(credit.result())

// classes
// class Bank {
//     static type = "Privat"
//     constructor(options) {
//         this.summ = options.summ
//         this.month = options.month
//         this.p = options.p
//     }
//     credit() {
//         return console.log("I'm Privat ")
//     }
// }

// let userBank = new Bank({
//     summ: 30000,
//     month: 5,
//     p: 500
// })

// console.log(userBank.credit)
// userBank.credit()

// class NewBank extends Bank {
//     constructor(options) {
//         super(options)
//         this.card = options.card
//     }
//     credit() {
//         return console.log("I'm Aval  ")
//     }
// }

// let aval = new NewBank({
//     summ: 30000,
//     month: 5,
//     p: 500,
//     card: true
// })

// console.log(aval.credit())

//-------- get & set

// class User {
//     constructor(props) {
//         this.name = props.name
//     }
//     firstName = ""
//     lastName = ""
//     age = ""
//     city = ""

//     set name(newName) {
//         let nameRow = newName.split(" ")
//         this.firstName = nameRow[0]
//         this.lastName = nameRow[1]
//     }

//     get name() {
//         return `First name: ${this.firstName}, Last name: ${this.lastName}`
//     }
// }

// let Max = new User({
//     name: "Max Romanov"
// })

// console.log(Max)


//--------- Prototypes

// let a = [1, 2, 3]
// console.log(a)

// let a = {
//     x: 1,
//     y: 2
// }

// let b = Object.create(a)
// console.log(b)

// --------- Practice

// const Manager = function (name, sales) {
//     this.name = name
//     this.sales = sales

//     // this.sale = function () {
//     //     this.sales += 1
//     // }
// }

// let max = new Manager("Maxim", 5)
// let nadiia = new Manager("Nadiia", 7)

// Manager.prototype.sale = function () {
//     this.sales += 1
// }

// console.log(max.sales)
// max.sale()
// console.log(max.sales)

//---------------

// class CoffeeMaschine {
//     _water = 0
//     #waterLimit = 500
//     constructor(power) {
//         this.power = power
//     }

//     set waterAmount(value) {
//         if (value < 0) {
//             value = 0
//         }
//         this._water = value
//     }
// }

// let coffeeMaschine = new CoffeeMaschine(100)
// console.log(coffeeMaschine)
// coffeeMaschine.waterAmount = -20
// console.log(coffeeMaschine.#waterLimit) // error

// ----- 7 lesson

// class CircleBox {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }

//     hide() {
//         this.$el.style.display = "none"
//     }

//     show() {
//         this.$el.style.display = "block"
//     }

// }

// class CircleItem extends CircleBox {
//     constructor(options) {
//         super(options.selector)
//         this.$el.style.width = options.size + "px"
//         this.$el.style.height = options.size + "px"
//         this.$el.style.borderRadius = "50%"
//         this.$el.style.background = options.color
//     }
// }

// let CircleRed = new CircleItem({
//     selector: "#circleRed",
//     color: "red",
//     size: 50
// })

// let CircleGreen = new CircleItem({
//     selector: "#circleGreen",
//     color: "green",
//     size: 80
// })

// let CircleBlack = new CircleItem({
//     selector: "#circleBlack",
//     color: "black",
//     size: 30
// })

////////////////

// function Car(name, color) {
//     this.name = name
//     this.color = color
// }

// Car.prototype.message = function () {
//     console.log(`${this.name} is ${this.color} color`)
// }

// Car.prototype.start = function () {
//     console.log(`${this.name} is start!!!`)
// }

// let BMW = new Car("bmw", "red")
// let opel = new Car("opel", "green")


////////////// міксини??

// let message = {
//     messageHello() {
//         console.log(`Hello, ${this.name}`)
//     },

//     messageBye() {
//         console.log(`Bye, ${this.name}`)
//     }
// }

// class User {
//     constructor(name) {
//         this.name = name
//     }
// }

// Object.assign(User.prototype, message)

// new User("Max").messageHello()

//// 8 lection

// let elem = document.getElementById("elem")

// elem.style.background = "Green"

// let elements = document.querySelectorAll('ul>li:last-child')
// for (element of elements) {
//     console.log(element)
// }

// let textHidden = document.getElementById("textHidden")
// textHidden.hidden = false

// let message = document.getElementById("message")
// console.log(message.value)

// let text = document.querySelector(".text-message")
// console.log(text)
// console.log(text.textContent)

// let text = document.querySelector('.text-message');
// console.log(text.textContent);

// text.textContent = "Hello, Max!"

// let btn = document.querySelector('.button')
// btn.style.backgroundColor = "red"

// let text = document.querySelector('#p-text');
// console.log(text.classList)
// text.classList.remove("red")
// console.log(text.classList.contains("red"))
// console.log(text.classList)
// text.classList.add("new")
// console.log(text.classList)

// let image = document.querySelector(".image")

// console.log(image.hasAttribute('src'))
// console.log(image.getAttribute('src'))

// let item = document.createElement("a")
// item.href = "#"
// item.classList.add("btn")
// item.textContent = "3"

// let nav = document.querySelector('.nav')
// nav.appendChild(item)

// let heading = document.createElement("h1")
// heading.textContent = "Hello!"
// let container = document.querySelector(".container")
// container.insertBefore(heading, nav)

// nav.removeChild(item)
// item.remove() 


// let text = document.querySelector(".text")
// let parent = document.querySelector(".parent")

// let clone = text.cloneNode(true)
// parent.appendChild(clone)

// let container = document.querySelector(".container")

// let text = `<p>QWERTY</p>`

// container.innerHTML += text

// let list = document.querySelector("#list")

// list.insertAdjacentHTML('beforebegin', '<p>beforebegin</p>')
// list.insertAdjacentHTML('afterbegin', '<li>afterbegin</li>')
// list.insertAdjacentHTML('beforeend', '<li>beforeend</li>')
// list.insertAdjacentHTML('afterend', '<p>afterend</p>')

