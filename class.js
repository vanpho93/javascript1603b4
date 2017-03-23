//Person
//name
//age: private
//getAge
//setAge

function Person(name, age) {
    this.name = name;
    this.getAge = () => age;
    this.setAge = newAge => { age = newAge; };
}

const pho = new Person('Pho', 18);
console.log(JSON.stringify(pho));
console.log(pho.getAge());
pho.setAge(19);
console.log(pho.getAge());
