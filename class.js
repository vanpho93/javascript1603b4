//Person
//name
//age: private
//getAge
//setAge

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.getAge = () => this.age;
//     this.setAge = newAge => { 
//         console.log(this);
//         this.age = newAge; 
//     };
// }

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(this);
    }
}

// console.log(typeof Person);
const pho = new Person('Pho', 18);
// console.log(pho);
pho.show();

// const pho = new Person('Pho', 18);
    // console.log(JSON.stringify(pho));
    // console.log(pho.getAge());
    // pho.setAge(19);
    // console.log(pho.getAge());
