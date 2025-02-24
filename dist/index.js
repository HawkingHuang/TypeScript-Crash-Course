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
const addTwoNumbers = (a, b) => {
    return a + b;
};
console.log(addTwoNumbers(3, 4));
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
