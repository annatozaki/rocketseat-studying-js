// Objects

const idol = {
    name: 'Lisa',
    age: 23,
    kpop: 'Blackpink',
    sign: 'aries'
}

console.log(idol) // here we got our object

// how to access an object's props
console.log (idol.name) // here we got the props of idol

// Arrays

const Jisoo = [
    'Kim Jisoo',
    26,
    'blackpink',
    'capricorn'
]
console.log(Jisoo)

//how to access an array's props

console.log(Jisoo[0]) // here, we start in zero: 0, 1 , 2 ....

/* 
Ex.:
const Jisoo = [
    23, => [0]
    'blackpink', => [1]
    'aries' => [2]

] */

// how to know how many props we have in an array

console.log(Jisoo.length)

// ARRAY WITH OBJECTS

const lisa = [
    'Lalisa Manoban',
    23,
    'blackpink',
    'aries',
    {
        catOne: "Lily",
        catTwo: "Leo"
    }
]
// how to access an object's prop inside an array

console.log(lisa[4].catOne)

