"use strict";
let age = 30;
console.log(age);
let firstName = [];
firstName.push('hawking');
console.log(firstName);
const user = {
    firstName: 'hawking',
    age: 30,
    id: 20
};
console.log(user);
// function addTwoNumbers (a: number, b: number): number {
//   return a + b
// }
// const addTwoNumbers = (a: number, b: number): number => {
//   return a + b
// }
// console.log(addTwoNumbers(3, 4))
let title;
let things = ['I', 'He', 'She', 87, true];
things.push(undefined);
console.log(things);
let mix = ['hawking', 30, true];
console.log(mix);
function useCoords(x, y) {
    return [x, y];
}
const [x, y] = useCoords(3, 4);
console.log(x, y);
let userInfo;
userInfo = ['haawking', 30];
console.log(userInfo);
const citizenOne = {
    id: 777,
    firstName: 'Hawking',
    lastName: 'Huang',
    age: 30
};
let people = [];
people.push(citizenOne);
console.log(people);
console.log(citizenOne);
const president = {
    title: 'president',
    basicInfo: {
        id: 1,
        firstName: 'Putin',
        lastName: 'Dude',
        age: 60
    }
};
console.log(president);
function getRandomRgb() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
console.log(getRandomRgb());
const userOne = {
    username: 'Hawking',
    id: 777
};
console.log(userOne);
let userId;
userId = 777;
userId = '777';
console.log(typeof userId);
let score = null;
console.log(score);
score = 10;
console.log(score);
let scoreTwo;
scoreTwo = 222;
console.log(scoreTwo);
function switchScoreType(score) {
    if (typeof score === 'number') {
        return score.toString();
    }
    else {
        return parseInt(score);
    }
}
let scoreThree = switchScoreType(3);
let scoreFour = switchScoreType('4');
console.log(scoreThree);
console.log(scoreFour);
function logCharacDetails(cha) {
    if (cha.type === 'warrior') {
        console.log(`It's a ${cha.type} with ${cha.sword}.`);
    }
    else {
        console.log(`It's a ${cha.type} with ${cha.staff}.`);
    }
}
const warriorOne = {
    type: 'warrior',
    hp: 1000,
    mp: 200,
    sword: 'Black Blade'
};
const magicianOne = {
    type: 'magician',
    hp: 500,
    mp: 800,
    staff: 'Mighty God'
};
logCharacDetails(warriorOne);
logCharacDetails(magicianOne);
const today = {
    temperature: '25°C'
};
const yesterday = {
    temperature: '20°C',
    humidity: '60%'
};
const forecaseWeather = (date) => {
    console.log(`The temperature is ${date.temperature}`);
};
forecaseWeather(today);
forecaseWeather(yesterday);
function addTwoNumbers(a, b) {
    return a + b;
}
function multiplyTwoNumbers(first, second) {
    return first * second;
}
function squareNumber(num) {
    return num * num;
}
function joinTwoNumbers(numOne, numTwo) {
    return `${numOne}${numTwo}`;
}
let calcs = [];
calcs.push(addTwoNumbers);
calcs.push(multiplyTwoNumbers);
calcs.push(squareNumber);
const shapeOne = {
    name: 'square',
    calaArea: (width) => {
        return width * width;
    }
};
const shapeTwo = {
    name: 'circle',
    calaArea: (radius) => {
        return Math.PI * radius ^ 2;
    }
};
const testObj = {
    consoleTest: (str) => {
        console.log(str);
        return str;
    }
};
testObj.consoleTest('123');
const celtics = {
    website: 'celtics.com',
    chairman: 'Stephen Pagliuca',
    teamName: 'Celtics',
    announce() {
        return `Team ${this.teamName}`;
    }
};
console.log(celtics.announce());
function displaySchoolInfo(school) {
    console.log(`${school.name} in ${school.location} with ${school.departments} departments.`);
}
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get displayTitleAndPrice() {
        return `${this.title} for ${this.price} dollars.`;
    }
    format() {
        return `${this.title}: ${this.price}`;
    }
}
class Beverage extends MenuItem {
    constructor(title, price, water, base, ingredients) {
        super(title, price);
        this.water = water;
        this.base = base;
        this.ingredients = ingredients;
    }
    addIngredients(item) {
        this.ingredients.push(item);
    }
    removeIngredients(item) {
        this.ingredients = this.ingredients.filter(i => i !== item);
    }
    changeBase(base) {
        this.base = base;
    }
}
const bubbleGreenTea = new Beverage('bubble Green Tea', 50, true, 'Green Tea', ['bubble']);
console.log(bubbleGreenTea.displayTitleAndPrice);
console.log(bubbleGreenTea.format());
function printFormat(val) {
    console.log(val.format());
}
console.log(printFormat(bubbleGreenTea));
// #25 - Generics 101
// function logAndReturnString(val: string): string {
// 	console.log(val)
// 	return val
// }
// function logAndReturnNumber(val: number): number {
// 	console.log(val)
// 	return val
// }
// function logAndReturnBoolean(val: boolean): boolean {
// 	console.log(val)
// 	return val
// }
function logAndReturnValue(val) {
    console.log(val);
    return val;
}
logAndReturnValue('hawking');
const countries = [
    {
        name: 'Taiwan',
        population: 23000000
    },
    {
        name: 'China',
        population: 1400000000
    },
    {
        name: 'Japan',
        population: 124500000
    }
];
function logRandomArrayIndex(arr) {
    const i = Math.floor(Math.random() * arr.length);
    console.log(arr[i]);
    return arr[i];
}
logRandomArrayIndex(countries);
function formalLicense(license) {
    const id = Math.floor(Math.random() * 10000000);
    return Object.assign(Object.assign({}, license), { id });
}
const driverA = {
    name: 'Hawking'
};
const driverAFormalLicense = formalLicense(driverA);
console.log(driverAFormalLicense);
const movies = {
    data: ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight'],
    name: 'Movie list'
};
const oddNumbers = {
    data: [1, 3, 5, 7, 9],
    name: 'Odd Numbers'
};
const randomElement = (c) => {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
};
const pickOne = randomElement(movies);
const pickTwo = randomElement(oddNumbers);
console.log(pickOne);
console.log(pickTwo);
