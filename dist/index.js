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
