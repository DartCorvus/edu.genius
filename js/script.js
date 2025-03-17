// // let name = "Надя"
// // let hello = `Hello, ${name}, when you wanna eat giozy?`
// // console.log(hello)


// // let name = "Іван";
// // let city = "Kyiv";
// // city = name;
// // console.log(city);

// // let name = "Olga";
// // console.log(`привіт ${1}`); //
// // console.log(`привіт ${"name"}`); //
// // console.log(`привіт ${name}`); // ?

// //***3***
// //Видобути число зі змінних
// // let a = "5";
// // let b = "13cvb";
// // let c = "12.9sxdcfgv";
// // вивести в консоль тип
// // console.log(typeof Number(a));
// // console.log(typeof parseInt(b));
// // console.log(typeof parseFloat(c));

// //***4***
// //Зробіть, щоб 0.1 + 0.2 = 0.3
// // console.log(((0.1 * 10) + (0.2 * 10)) / 10); 

// //***5**
// //Поверніть найбільше число с набору 20, 10, 50, 40
// // console.log(Math.max(20, 10, 50, 40));


// //***6**
// //Поверніть випадкове число в діапазоні від 2 до 4
// // console.log(Math.random(2, 4))

// //***7**
// //дізнатись довжину message
// // const message = "Welcome to Bahamas!";
// // console.log(message.length); //19


// //***8**
// //вивести в консоль message  великими літерами
// // console.log(message.toUpperCase());


// //***9**
// // створити пустий об*єкт
// // додати туди ім*я, вік і місто
// // вивести результат в консоль
// // видалити місто
// // додати буль з ключем: like flowers
// // вивести результат в консоль

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

// sumDigits();