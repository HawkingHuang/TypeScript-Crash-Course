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

let title: any

let things: any[] = ['I', 'He', 'She', 87, true]
things.push(undefined)
console.log(things)

let mix: [string, number, boolean] = ['hawking', 30, true]
console.log(mix)

function useCoords (x: number, y: number): [number, number] {
  return [x, y]
}
const [x, y] = useCoords(3, 4)
console.log(x, y)

let userInfo: [username: string, age: number]
userInfo = ['haawking', 30]
console.log(userInfo)

interface Citizen {
  id: number,
  firstName: string,
  lastName: string,
  age: number
}

const citizenOne: Citizen = {
  id: 777,
  firstName: 'Hawking',
  lastName: 'Huang',
  age: 30
}

let people: Citizen[] = []
people.push(citizenOne)
console.log(people)

console.log(citizenOne)

interface Official {
  title: string,
  basicInfo: Citizen
}

const president: Official = {
  title: 'president',
  basicInfo: {
    id: 1,
    firstName: 'Putin',
    lastName: 'Dude',
    age: 60
  }
}

console.log(president)