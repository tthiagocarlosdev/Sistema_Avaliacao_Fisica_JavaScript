var input = require('readline-sync')

// retorna true se a data digitada pelo usuário está no formato da Regex Expression
function dateAsRegexExpression(date, regex){
  
  let dateAsRegexExpression = regex.test(date)
  
  return dateAsRegexExpression ? true : false
  
}

// recebe a data como string e retorna a data no formato brasileiro criada pelo Objeto Date()
function dateInBrazilFormat(dateInString){

  //O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
  let arrayNumber = dateInString.split('/')
  let day = Number(arrayNumber[0])
  let month = Number(arrayNumber[1])
  let year = Number(arrayNumber[2])

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }
  
  let dateInBrazilianFormat = new Date(year, month-1, day)
  
  return dateInBrazilianFormat.toLocaleDateString("pt-br", options)
  
}

// recebe uma data no formato brasleiro como string. Retorna a data no formato ISO
function dateInISOFormat(dateInString){
  
  //O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
  let arrayNumber = dateInString.split('/')
  let day = Number(arrayNumber[0])
  let month = Number(arrayNumber[1])
  let year = Number(arrayNumber[2])

  return new Date(year, month-1, day)
}

// recebe duas datas e valida se são iguais
function validDate(informedDate, realDate){
  
  return informedDate === realDate ? true : false
  
}

// recebe a data de nascimento em formato ISO e retorna se é maior do que a data atual
function dateOfBirthHighestCurrentDate(dateOfBirth){
  var currentDate = new Date()

  return dateOfBirth.getTime() > currentDate.getTime() ? true : false

}

function age(birthDate) {

  let currentDay = new Date()
  let dateInMilliseconds = Math.abs(currentDay.getTime() - birthDate.getTime())
  let age = Math.floor(dateInMilliseconds / (1000 * 60 * 60 * 24 * 365))
  
  return age

}

function dateOfBirth(){
  let dateEqualExpressionRegex = false
  const dateRegExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/
  let typedDate = ''
  let dateInBrazilianFormat = ''
  let dateValid = false
  let BirthHighestCurrentDate = true

  do{
    typedDate = input.question('Digite sua data de nascimento (DD/MM/AAAA): ')
    
    dateEqualExpressionRegex = dateAsRegexExpression(typedDate, dateRegExp)
    
    dateInBrazilianFormat = dateInBrazilFormat(typedDate)

    dateValid = validDate(typedDate, dateInBrazilianFormat)

    let dateISO = dateInISOFormat(dateInBrazilianFormat, dateRegExp)
    
    BirthHighestCurrentDate = dateOfBirthHighestCurrentDate(dateISO)

  }while(!dateEqualExpressionRegex || !dateValid || BirthHighestCurrentDate)
  
  return dateInBrazilianFormat
  
}

let dataNascimento = dateOfBirth()
console.log(`Data de nascimento: ${dataNascimento}`)

const dateRegExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/
let dataNascimentoISO = dateInISOFormat(dataNascimento, dateRegExp)
let idade = age(dataNascimentoISO)
console.log(`idade: ${idade} anos.`)
