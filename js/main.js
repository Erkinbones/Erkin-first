// let list = [
//     "milk",
//     "egg",
//     "salt",
//     "bread",
//     "sugar"
// ]


// let [first,second,...other] = list

// console.log(other);


// arr = [
//     [1,2,3,4],
//     [5,6,7,8]
// ]

// let [ [a,b,c,d],newArr] = arr

// console.log(a,b,c,d,newArr);


// let person = {
//     name:"John",
//     age:24,
//     job:"student"
// }

// let {name,age,job} = person

// console.log(name,age,job);


// let obj = {
//     subobj:{
//         name:"Bill"
//     }
// }


// let {subobj:{name}} = obj

// let obj =  {
//     arr:[
//         {
//             name:"Makers"
//         }
//     ]
// }

// let {arr:[{name}]} = obj
// console.log(name);


// let person = {
//     name:"Bill",
//     age:23,
//     job:"Worker"
// }



// function func({name}){
//     console.log(name);
// }

// func(person)


// let arr = [1,2,3,4,5];

// let [,,,four,five] = arr;

// console.log(four,five);


// let arr = [1,2,3,4,5];

// function func(a,b,c,d,j){
//     console.log(a,b,c,d,j);
// }

// func(...arr)

// let obj = {
//     name:"Kani",
//     color:"Blue"
// }


// let obj2 = {
//     surname:"Smith"
// }

// let {color} = obj
// let newObj = {color,...obj2} 
// console.log(newObj);



// Tasks

// Import stylesheets
// import './style.css';

// Деструктуризация. Домашняя работа.

// Группа С =======================================================
// Задание №1
// Дан массив ["Julius", "Caesar", "Consul", "of the Roman Republic"]
// Вам надо поместить в переменную
// firstName 1-элемент массива, а в
// переменную titul  3-элемент.


// let arr = ["Julius", "Caesar", "Consul", "of the Roman Republic"]

// let [firstName]=arr
// let [,,titul]=arr

// console.log(firstName,titul);



// Задание №2
// Дана строка `Albert Einstein`.
// Поместите в переменную firstName первое слово,
// в переменную lastName второе слово.

// let str = "Albert Einstein"
// let obj = str.split(" ")
// console.log(obj);
// let [firstName, lastName] = obj
// console.log(firstName);
// console.log(lastName);



// Задание №3
// Создайте объект let obj = {};
// В свойство firstName поместите первое
// слово из задания №2
// В свойство lastName поместите второе
// слово из задания №2

// obj.firstName = "Albert"
// obj.lastName = "Einstein"

// console.log(obj.firstName);



// Задание №4
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'}.
// Запишите соответствующие значения в переменные name, surname и age


// let obj = {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'}
// let {name,surname,age} = obj

// console.log(name,surname,age);




// Задание №5
// Дан объект: { hello: "World", console: "log", java: "script" }
// Поместите в переменные, первые два свойства.
// Следующий выведите в консоль. Используйте оператор ...rest (spread).

// let obj = { hello: "World", console: "log", java: "script" };
// let { hello, console: con,...rest} = obj


// console.log(hello,con,rest);



// Группа B =======================================================

// Задание №6
// Вам нужно поменять местами значения
// переменных.
// let a = 0;
// let b = 1;
// Пример результата:
// console.log(a, b); // 1, 0

let a = 0;
let b = 1;

let a = 1
let b = 0
console.log(a, b); // 1, 0






// Задание №7
// Дан массив ['первый', 'второй'].
// Запишите второй элемент этого массива в переменную elem2, третий - в переменную elem3.
// Если в массиве нет третьего элемента - запишите в переменную elem3 значение 'eee',
// а если нет второго - в переменную elem2 запишите значение 'bbb'.
// Первый элемент никуда записывать не надо.

// Задание №8
// Дан объект {name: 'Jack', age: '22', hobbys: ['football', 'swimming']}
// Запишите в переменные hobby1 и hobby2 слова football и swimming соответственно.

// Задание №9
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }.
// Запишите соответствующие значения в переменные name, surname и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}

// Задание №10
// Перезапишите все свойства объекта person данными из массива info.
// let info = ['Sam', 'Christenson', 22];
// let person = {
//     name: '',
//     surname: '',
//     age: null
// };

// Группа А =======================================================

// Задание №11
// Дан объект {name: 'John', 'age': '22', }.
// Запишите соответствующие значения в переменные name, и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало введенное значение с prompt.

// Задание №12
// Переделайте следующую функцию через деструктуризацию.
// Сделайте так, чтобы если какое-либо из значений отсутствует, то переменной присваивалось значение по умолчанию.
// function func(person) {
//     let name = person.n;
//     let surname = person.s;
//     let age = person.a
//     console.log(name, surname, age);
// }
// func({ n: 'Luck', a: 22 });

// Задание №13
// Дан объект {"Sam": 22,"Kate": 28,"Luck": 16}.
// Напишите функцию, которая возвращает имя самого старшего студента.
// Для решения задачи используйте Object.entries и деструктурирование.
// let students = {
//     "Sam": 22,
//     "Kate": 28,
//     "Luck": 16
// };

// Задание №14
// Дан объект { size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true}.
// Деструктуризуйте все свойства и элементы данного объекта, включая вложенные объекты и массивы и выведите в консоли.

// Задание №15
// Дан массив [[15, 15.1, 15.2], [16,16.1,16.2], [17,17.1,17.2]].
// Используя цикл for...of и деструктуризацию вывести в консоль все числа вложенных массивов.
// Пример ввода:
// [[15, 15.1, 15.2], [16,16.1,16.2], [17,17.1,17.2]]
// Пример вывода:
// Первое - 15, второе - 15.1, третье - 15.2
// Первое - 16, второе - 16.1, третье - 16.2
// и т.д
