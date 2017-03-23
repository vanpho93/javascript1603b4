class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
}

const arr = [
    new Person('Pho', 18, 165),
    new Person('Teo', 10, 180),
    new Person('Ti', 30, 150),
    new Person('Tun', 19, 170)
];

const people = arr.filter(e => e.age > 17);
const arrSort = arr.sort((a, b) => a.age - b.age);
console.log(arrSort);

// const person = arr.findIndex(p => p.height > 170);
// console.log(person);
// arr.forEach(e => console.log(e.name));

// console.log(arr);
// let i = 1;
// const isHighEnough = arr.some(person => person.height > 175);
// console.log(isHighEnough);
// const isHighEnough = arr.some(person => {
//     return person.height > 175
// });
// console.log(isHighEnough);
