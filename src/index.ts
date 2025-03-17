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
// const addTwoNumbers = (a: number, b: number): number => {
//   return a + b
// }
// console.log(addTwoNumbers(3, 4))

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

// #13 - Reusable Interfaces
interface WeatherForecase {
  temperature: string
}

const today: WeatherForecase = {
  temperature: '25°C'
}

const yesterday = {
  temperature: '20°C',
  humidity: '60%'
}

const forecaseWeather = (date: WeatherForecase) => {
  console.log(`The temperature is ${date.temperature}`)
}

forecaseWeather(today)
forecaseWeather(yesterday)
// forecaseWeather({ temperature: '23°C', humidity: '70%' })

// #14 - Function Signatures
type Calculator = (numOne: number, numTwo: number) => number

function addTwoNumbers(a: number, b: number) {
	return a + b
}
function multiplyTwoNumbers(first: number, second: number) {
	return first * second
}
function squareNumber(num: number) {
	return num * num
}
function joinTwoNumbers(numOne: number, numTwo: number) {
	return `${numOne}${numTwo}`
}

let calcs: Calculator[] = []
calcs.push(addTwoNumbers)
calcs.push(multiplyTwoNumbers)
calcs.push(squareNumber)
// calcs.push(joinTwoNumbers)

interface HasArea {
  name: string
  calaArea: (length: number) => number
}

const shapeOne: HasArea = {
  name: 'square',
  calaArea: (width) => {
    return width * width
  }
}

const shapeTwo: HasArea = {
  name: 'circle',
  calaArea: (radius) => {
    return Math.PI * radius ^ 2
  }
}

interface Test {
  consoleTest: (str: string) => string
}

const testObj: Test = {
  consoleTest: (str) => {
    console.log(str)
    return str
  }
}

testObj.consoleTest('123')

// #15 - Extending Interfaces
interface NBA {
  website: string
  chairman: string
  announce: () => string
}

interface Team extends NBA {
  teamName: string 
}

const celtics: Team = {
  website: 'celtics.com',
  chairman: 'Stephen Pagliuca',
  teamName: 'Celtics',
  announce() {
    return `Team ${this.teamName}`
  } 
}
console.log(celtics.announce())

// #16 - Extending Type Aliases
type School = {
  name: string
  location: string
}

type University = School & {
  departments: number
}

function displaySchoolInfo(school: University) {
  console.log(`${school.name} in ${school.location} with ${school.departments} departments.`)
}


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

function logAndReturnValue<T>(val: T): T {
  console.log(val)
  return val
}

logAndReturnValue<string>('hawking')

interface Country {
  name: string
  population: number
}

const countries: Country[] = [
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
]

function logRandomArrayIndex<T>(arr: T[]): T {
  const i = Math.floor(Math.random() * arr.length)
  console.log(arr[i])
  return arr[i]
}

logRandomArrayIndex<Country>(countries)

// #26 - intersection Types
interface ID {
  id: number
}

interface License {
  name: string
}

function formalLicense<T>(license: T): T & ID {
  const id = Math.floor(Math.random() * 10000000)
  return { ...license, id }
}

const driverA: License = {
  name: 'Hawking'
}

const driverAFormalLicense = formalLicense<License>(driverA)
console.log(driverAFormalLicense)

// #27 - Generic Interfaces
interface Collection<T> {
  data: T[]
  name: string
}

const movies: Collection<string> = {
  data: ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight'],
  name: 'Movie list'
}

const oddNumbers: Collection<number> = {
  data: [1, 3, 5, 7, 9],
  name: 'Odd Numbers'
}

const randomElement = <T>(c: Collection<T>): T => {
  const i = Math.floor(Math.random() * c.data.length)

  return c.data[i]
}

const pickOne = randomElement<string>(movies)
const pickTwo = randomElement(oddNumbers)
console.log(pickOne)
console.log(pickTwo)