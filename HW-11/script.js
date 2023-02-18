// + Задача №1

const array = [1,2,3];
let result = array.reduce((acc,cur)=>`${acc},${cur}`)
console.log('"'+result+'"');




// + Задача № 3
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
let totalPrice = wishlist.reduce((acc,curr) =>{
    return acc + curr.price;
},0);

console.log(totalPrice);

// + Задача № 2
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

let newVoters = voters.reduce((acc, curr) => {
    return acc + curr.voted;
    
},0);
console.log(newVoters);

// + Задача № 5

const person = [

    {name:'Bob' , age: 30},
    {name:'Jake' , age: 14},
    {name:'Kate' , age: 25},
    {name:'Sam' , age: 16},
    {name:'Phil' , age: 6},
    {name:'Ed' , age:55},
    {name:'Tami' , age: 54},
    {name: 'Mary', age: 11},
    
];
let adult = person.filter((h) => h.age > 18);
let minor = person.filter((h) => h.age < 18);
console.log(adult, minor);
 

// +Задача № 6 - Создайте массив объектов со свойствами 'name' и 'age'. Используя методы массива, создайте новый массив, содержащий только те объекты, возраст которых больше 30 лет.

const Array = [
    {name:'Bob' , age: 30},
    {name:'Jake' , age: 32},
    {name:'Kate' , age: 25},
    {name:'Sam' , age: 20},
    {name:'Phil' , age: 21},
    {name:'Ed' , age:55},
    {name:'Tami' , age: 54},
    {name: 'Mary', age: 31},
    {name: 'Becky', age: 43},
    {name: 'Joey', age: 41},
    {name: 'Jeff', age: 30},
    {name: 'Zack', age: 19}
];
let newArray = Array.filter(function (Array) {
    return Array.age > "30";
    
})
console.log(newArray);

// + Задача № 4
const product = [
    { name:"Lilit", orders: "Audi"},
    { name:"Liana", orders: "Toyota"},
    { name: "Tomas", orders: "Reno",},
    { name: "Artjom", orders: "BMW"},
];
product.forEach((elem) =>{
    elem.totalOrders = elem.orders.length
    delete elem.name.orders

});
console.log(product);





