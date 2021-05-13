

// class Car
// make 
// model
// vin
// getDescription

class Person {
    constructor(name = 'Anon', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return`hi i am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` There major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age)
        this.location = location;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.location) {
            greeting += ` I am from ${this.location}`
        }
        return greeting;
    }
}

const me = new Traveler('Samuel Camacho', 36, 'Los Angeles');
console.log(me.getGreeting())

const other = new Traveler();
console.log(other.getGreeting())
