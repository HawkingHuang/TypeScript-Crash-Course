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

type Rgb = [number, number, number]
function getRandomRgb(): Rgb {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)

	return [r, g, b]
}
console.log(getRandomRgb())

type User = {
  username: string,
  id: number
}

const userOne: User = {
  username: 'Hawking',
  id: 777
}
console.log(userOne)

let userId: number | string
userId = 777
userId = '777'
console.log(typeof userId)

let score: number | null = null
console.log(score)
score = 10
console.log(score)

type StandardScore = number | string
let scoreTwo: StandardScore
scoreTwo = 222
console.log(scoreTwo)

function switchScoreType (score: StandardScore) {
  if (typeof score === 'number') {
    return score.toString()
  } else {
    return parseInt(score)
  }
}

let scoreThree = switchScoreType(3)
let scoreFour = switchScoreType('4')
console.log(scoreThree)
console.log(scoreFour)

interface Warrior {
  type: 'warrior',
  hp: number,
  mp: number,
  sword: string
}

interface Magician {
  type: 'magician',
  hp: number,
  mp: number,
  staff: string
}

function logCharacDetails(cha: Warrior | Magician) {
  if (cha.type === 'warrior') {
    console.log(`It's a ${cha.type} with ${cha.sword}.`)
  } else {
    console.log(`It's a ${cha.type} with ${cha.staff}.`)
  }
}

const warriorOne: Warrior = {
  type: 'warrior',
  hp: 1000,
  mp: 200,
  sword: 'Black Blade'
}

const magicianOne: Magician = {
  type: 'magician',
  hp: 500,
  mp: 800,
  staff: 'Mighty God'
}

logCharacDetails(warriorOne)
logCharacDetails(magicianOne)
