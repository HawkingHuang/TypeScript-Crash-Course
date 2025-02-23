let age: number = 30

console.log(age)

let firstName: string[] = []
firstName.push('hawking')
console.log(firstName)

const user: {firstName: string, age: number, id: number} = {
  firstName: 'hawking',
  age: 30,
  id: 20
}
console.log(user)

// function addTwoNumbers (a: number, b: number): number {
//   return a + b
// }
const addTwoNumbers = (a: number, b: number): number => {
  return a + b
}
console.log(addTwoNumbers(3, 4))