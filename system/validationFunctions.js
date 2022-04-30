/* validation functions */

const { headerFunctions } = require('./headerFunctions')

const validationFunctions = {

  // recebe um valor e uma expressão regular. retorna true se o valor estiver de acordo com a expressão regular
  isRegularExpression(stringValue, regex){
    
    return regex.test(stringValue) ? true : false
    
  },

  // recebe duas variáveis de valor booleano como parâmetro e o subtítulo da parte da avaliação. Caso uma das duas variáveis seja true a function é executada, caso as duas sejam false, a function não é executada.
  incorrectValue(valueA, valueB, title){
    
    if(valueA || valueB ){ 
      console.clear()
      headerFunctions.systemHeader()
      headerFunctions.subTitle(title)
      console.log('Dado Incorreto!')
    }

  },


    // recebe duas datas e valida se são iguais
  validDate(informedDate, realDate){
    
    return informedDate === realDate ? true : false
    
  },

    // recebe a data de nascimento em formato ISO e retorna se é maior do que a data atual
  dateOfBirthHighestCurrentDate(dateOfBirth){
    var currentDate = new Date()

    // O método getTime() retorna o valor numérico correspondente ao horário da data especificada de acordo com o horário universal.
    return dateOfBirth.getTime() > currentDate.getTime() ? true : false

  },

  validEmail(userEmail){

    let user = userEmail.substring(0, userEmail.indexOf("@"))
    let domain = userEmail.substring(userEmail.indexOf("@")+ 1, userEmail.length)
    let validations = ((user.length >=1) && 
                        (domain.length >=3) && 
                        (user.search("@")==-1) && 
                        (domain.search("@")==-1) && 
                        (user.search(" ")==-1) && 
                        (domain.search(" ")==-1) && 
                        (domain.search(".")!=-1) && 
                        (domain.indexOf(".") >=1)&& 
                        (domain.lastIndexOf(".") < domain.length - 1))
  
      return validations ? true : false
    
  },
  
}

module.exports = {
  validationFunctions
}