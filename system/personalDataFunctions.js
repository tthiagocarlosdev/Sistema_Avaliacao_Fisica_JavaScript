/* personal data functions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')

const personalDataFunctions = {
      
  userName(){
    
    let name = ''
    let itsNumber = true
    let itsLetters = false
    let regexNumber = /\d/gi
    let regexLetters = /\D/gi
    
    while(itsNumber || !itsLetters){
  
      name = input.question('Digite seu nome: ')
      itsNumber = validationFunctions.isRegularExpression(name, regexNumber)
      itsLetters = validationFunctions.isRegularExpression(name, regexLetters)
    
      validationFunctions.incorrectValue(!itsLetters, itsNumber, "Dados Pessoais")
  
    }
    
    return name
  
  },

  // cria a data de nascimento do usuário
  dateOfBirth(){
    let dateInBrazilianFormat = ''
    let typedDate = ''
    const dateRegExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/
    let dateEqualExpressionRegex = false
    let dateValid = false
    let birthHighestCurrentDate = true
  
    do{
      typedDate = input.question('Digite sua data de nascimento (DD/MM/AAAA): ')
      
      dateEqualExpressionRegex = validationFunctions.isRegularExpression(typedDate, dateRegExp)
      
      dateInBrazilianFormat = personalDataFunctions.dateInBrazilFormat(typedDate)
  
      dateValid = validationFunctions.validDate(typedDate, dateInBrazilianFormat)
  
      let dateFullFormat = personalDataFunctions.dateInFullFormat(dateInBrazilianFormat)
      
      birthHighestCurrentDate = validationFunctions.dateOfBirthHighestCurrentDate(dateFullFormat)

      validationFunctions.incorrectValue(!dateEqualExpressionRegex, !dateValid, "Dados Pessoais")
      validationFunctions.incorrectValue(false, birthHighestCurrentDate, "Dados Pessoais")
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
  },

   // recebe a data em formato string e retorna a data no formato brasileiro criada pelo Objeto Date()
  dateInBrazilFormat(dateInString){

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
    
    // O método toLocaleDateString() retorna uma string com a representação de parte da data baseando-se no idioma. Os novos argumentos locales e options deixam as aplicações especificarem o idioma cujas convenções de formatação devem ser usadas e permitem customizar o comportamento da função.
    return dateInBrazilianFormat.toLocaleDateString("pt-br", options)
    
  },
  
  // recebe uma data no formato brasileiro como string. Retorna a data no formato ISO
  dateInFullFormat(dateInString){
    
    //O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
    let arrayNumber = dateInString.split('/')
    let day = Number(arrayNumber[0])
    let month = Number(arrayNumber[1])
    let year = Number(arrayNumber[2])

    return new Date(year, month-1, day)

  },
  
  // Recebe a data em formato ISO e retorna a idade em anos.
  age(userObject) {

    let currentDay = new Date()
    let dateInMilliseconds = Math.abs(currentDay.getTime() - userObject.birthdayInFullFormat.getTime())
    let age = Math.floor(dateInMilliseconds / (1000 * 60 * 60 * 24 * 365))
    
    return Number(age)
  
  },

  sexNumber(){
    
    let itsNumberOneOrTwo = true
    const regexNumberOneOrTwo = /^[1]$|^[2]$/
    let sexNumber = 0
  
    do{
      console.log('Escolha Sexo:')
      console.log('[1] Masculino')
      console.log('[2] Feminino')
      sexNumber = input.question('')
  
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(sexNumber, regexNumberOneOrTwo)
      
      validationFunctions.incorrectValue(false, !itsNumberOneOrTwo, "Dados pessoais")
  
    }while(!itsNumberOneOrTwo)
    
    return Number(sexNumber)

  },

  showSex(userObject){

    return userObject.sexNumber === 1 ? 'Masculino': 'Feminino'
    
  },

  userProfession() {
    
    let profession = ''
    let itsNumber = true
    let itsLetters = false
    let regexNumber = /\d/gi
    let regexLetters = /\D/gi
    
    while(itsNumber || !itsLetters){
  
      profession = input.question('Digite sua profissão: ')
      itsNumber = validationFunctions.isRegularExpression(profession, regexNumber)
      itsLetters = validationFunctions.isRegularExpression(profession, regexLetters)
    
      validationFunctions.incorrectValue(!itsLetters, itsNumber, "Dados Pessoais")
  
    }
    
    return profession
  
  },

  userEmail() {
    
    let email = ''
    let itsEmail = false

    do{
      
      email = input.question('Digite seu email: ')

      itsEmail = validationFunctions.validEmail(email)
      
      validationFunctions.incorrectValue(!itsEmail, false, "Dados Pessoais")

    }while(!itsEmail)
    
    return email

  },

  phoneNumber(){
  
    let phoneNumber = 0
    let regexPhone = /^([0-9]{2})[0-9]{9}$/
    let istPhoneNumber = true
  
    do{
      
      phoneNumber = input.question('Digite seu número de celular com DDD: ')
      istPhoneNumber = validationFunctions.isRegularExpression(phoneNumber, regexPhone)
      validationFunctions.incorrectValue(false, !istPhoneNumber, "Dados Pessoais")
  
    }while(!istPhoneNumber)
    
    return phoneNumber
  },

  comments(){

    let commentsNumber = 2
    let commentsText = ''
    let itsNumberOneOrTwo = true
    let itsLetters = true
    let regexNumber = /^[1]$|^[2]$/
    let regexLetters = /\D/gi
    
  
    do{
  
      console.log(`Observações?`)
      anamnesisFunctions.choice()
      commentsNumber = Number(input.question(''))
  
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(commentsNumber, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Observações")
  
      if(commentsNumber === 1){
        
        do{
  
          console.log(`Digite a Observação:`)
          commentsText = input.question('')
          itsLetters = validationFunctions.isRegularExpression(commentsText, regexLetters)
          validationFunctions.incorrectValue(false, !itsLetters, "Observações")
  
        }while(!itsLetters)
        
      } else {
        commentsText = `Sem Observações!`
      }
  
    }while(!itsNumberOneOrTwo)
  
      return commentsText
  
  },

}

module.exports = {
  personalDataFunctions
}
