// Os Exercicios serão em português

// 1. Declare uma variável de nome weight

let weight;

//  Qual é o tipo de variável acima?

console.log(typeof weight)

/* 
    Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean 
*/

const users = {
    name: 'Park Chaeyoung',
    age: 23,
    stars: 4.9,
    isSubscribed: true
}

const testUsers = () => (users.isSubscribed === true) ? 'é' : 'não é';
 

console.log(`${users.name} tem ${users.age} anos, possui ${users.stars} estrelas e ela ${testUsers()} inscrita no canal`)

/* 4. A variável student abaixo é de que tipo de dados?
    4.1. Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.

    let student = {

    }
     */

//  Já fiz essa ideia no exercio anterior

const student = {
    name: 'Kim Jennie',
    age: 24,
    stars: 4.8,
    isSubscribed: false
}

const testStudent = () => (student.isSubscribed === true) ? 'é' : 'não é';

console.log(typeof student)

console.log(`${student.name} tem ${student.age} anos, possui ${student.stars} estrelas e ${testStudent()} inscrita no canal`)

/*5. Declare uma variável do tipo Array, de nome studentArray e atribua a ela nenhum valor, ou seja, um Array vazio */

let studentArray = [];

/*6. Reatribua valor para a variável acima, colocando dentrod ela o objeto student da questão 4  */

studentArray = [
    student
]

console.log(studentArray)

/* Coloque no console o valor da posição zero do Array acima */

console.log(studentArray[0])

/* Crie um novo student e coloque na posição 1 do Array */

const student2 ={
    name: 'Kim Jisoo',
    age: 26,
    stars: 4.9,
    isSubscribed: true
}

const student3 ={
    name: 'Lalisa Manoban',
    age: 23,
    stars: 5,
    isSubscribed: true
}

const student4 ={
    name: 'Park Chaeyoung',
    age: 23,
    stars: 4.9,
    isSubscribed: true
}

studentArray = [
    student,
    student2,
    student3,
    student4
]

console.log(`${studentArray[1].name}, ${studentArray[0].name}, ${studentArray[2].name} e ${studentArray[3].name} `)

/* Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou

console.log(a)
var a = 1
*/

// Resposta: undefined

console.log(a)
var a = 1

// acertei