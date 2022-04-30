# Sistema de Avaliação Física

Olá dev's! Neste repositório vamos criar um **sistema de avaliação física**, igual ao que encontramos em academias usando **JavaScript** e executar no terminal usando **Node.js**. Logo, não teremos nada de **HTML** e **CSS**. Não vamos nos preocupar com o visual, mas sim, com a funcionalidade do sistema. O sistema será dividido em 6 partes para inserção de dados e depois os resultados serão apresentados conforme os tópicos abaixo:

1. Dados pessoais
2. Anamnese
3. Cardiorrespiratório
4. Antropometria
5. Testes Neuromuscular
6. Testes Aeróbicos

## Video
Veja o vídeo explicando o sistema clicando no link ao lado - [Sistema Avaliação Física](https://www.youtube.com/watch?v=0mHEuja3c_Y&list=PLHqoKScEn2PuAxQBubqmXHKbnAkrkHFIy)

Vamos começar?! 

## Preparing

### Criando a pasta do projeto

* Abra o VSCode e escolha um local para criar a pasta do projeto, Crie a pasta e coloque o nome do projeto. Eu coloquei **sistemaAvaliacaoFisica**. 

### Instalando módulo readline-sync

* Abra o terminal e vamos instalar o módulo **readline-sync** que será responsável pela interação do usuário com o sistema. No terminal, na raiz do projeto, digite o comando abaixo e tecle Enter.

```shell
$ npm install readline-sync
```

- Apos a instalação, você vai perceber que uma pasta foi criada. É a pasta **node_modules**.

### Criando os arquivos do projeto

- Vamos agora criar quatro arquivos:
  -  **saf.js**. Esse será o arquivo principal do nosso projeto;
  - **headerFunctions.js**. Vamos colocar as funções de cabeçalho;
  - **validationFunctions.js**. Vamos colocar funções de validação;
  - **personalDataFunctions.js**. Vamos colocar as funções dos dados pessoais.
- Em **saf.js** vamos:
  - Importar os arquivos **headerFunctions.js** e **personalDataFunctions.js**;
  - Criar uma variável objeto ***user*** :

```js
const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')
```

```js
const user = { }
```

- Em **headerFunctions.js** vamos:
  - Criar uma variável objeto, **headerFunctions**, que vai guardar as funções de cabeçalho;
  - Exportar essa variável.

```js
/* header functions */
const headerFunctions = {}

module.exports = {
  headerFunctions
}
```

- Em **validationFunctions.js** vamos:
  - Criar a variável de importação de **headerFunctions.js**;
  - Criar uma variável objeto, **validationFunctions**, que vai guardar as funções de validação;
  - Exportar essa variável.

```js
/* Validation Functions */

const { headerFunctions } = require('./headerFunctions')

const validationFunctions = {}

module.exports = {
  validationFunctions
}
```

- Em **personalDataFunctions.js** vamos:
  - Criar a variável de **input** com o módulo **readline-sync**;
  - Criar a variável de importação de **validationFunctions.js**;
  - Criar uma variável objeto, **personalDataFunctions**, que vai guardar as funções dos dados pessoais;
  - Exportar essa variável.

```js
/* personal data functions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const personalDataFunctions = {}

module.exports = {
  personalDataFunctions
}
```

Agora estamos prontos para colocar a mão na massa.

## Header Functions

A nossa primeira function de cabeçalho será denominada **systemHeader( )**. Em **headerFunctions.js**, dentro da variável **headerFunctions** vamos colocar a function **systemHeader( )**, conforme  abaixo:

```js
const headerFunctions = {
  
  systemHeader(){
    console.log("===============================")
    console.log("  SISTEMA DE AVALIAÇÃO FÍSICA  ")
    console.log("===============================")
  },

}
```

Vamos criar também a function **subTitle( )** que irá mostrar os subtítulos. Ela recebe como parâmetro o subtítulo da avaliação:

```js
subTitle(title){
    console.log(`           ${title}            `)
    console.log("===============================")
  },
```

Por último, vamos criar a function **baseboard( )** que mostra apenas uma linha tracejada dupla:

```js
baseboard(){
    console.log("===============================")
  },
```

Arquivo **headerFunctions** completo, até o momento:

```js
/* header functions */

const headerFunctions = {
  
  systemHeader(){
    console.log("===============================")
    console.log("  SISTEMA DE AVALIAÇÃO FÍSICA  ")
    console.log("===============================")
  },

  subTitle(title){
    console.log(`           ${title}            `)
    console.log("===============================")
  },

  baseboard(){
    console.log("===============================")
  },

}

module.exports = {
  headerFunctions
}
```

No arquivo **saf.js** vamos chamar as functions **systemHeader( )**, **subTitle( )**, passando "Dados Pessoais" como parâmetro, e **baseboard( )** para serem executadas:

```js
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
headerFunctions.baseboard()
```

### Executar o programa

Para executar o programa, no terminal, digite o comando abaixo:

```shell
$ node saf.js
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
===============================
```

## Personal Data Functions

Agora vamos começar a criar as functions de dados pessoais do usuário.

### Nome do usuário

**userName( )** function, recebe o nome do usuário. Esta function receberá o nome do usuário que deverá ter apenas letras e acentos/sinais, caso tenha **número**, deverá informar ao usuário que o dado está incorreto e pedir novamente para o usuário digitar o seu nome. Para isto vamos criar também duas functions de validação que serão usadas dentro da function do nome. 

Em **validationFunctions.js** vamos criar a function **isRegularExpression( )**. Esta function recebe uma **String** e uma **Expressão Regular** com parâmetro e retorna **true** se o valor estiver de acordo com a expressão regular, caso contrário, retorna **false**:

```js
isRegularExpression(stringValue, regex){
    
    return regex.test(stringValue) ? true : false
    
  },
```

Ainda em **validationFunctions.js**, vamos criar a function **incorrectValue( )** que terá duas variáveis de valor booleano como parâmetro e o subtítulo da parte da avaliação. Caso uma das duas variáveis seja _**true**_ a function irá retornar as functions **systemHeader( )** e **subTitle( )**, como também a mensagem **_"Dado incorreto!"_**:

```js
incorrectValue(valueA, valueB, title){
    
    if(valueA || valueB ){ 
      console.clear()
      headerFunctions.systemHeader()
      headerFunctions.subTitle(title)
      console.log('Dado Incorreto!')
    }

  },
```

Em **personalDataFunctions.js** dentro da variável que criamos, colocamos a function **userName( )**:

```js
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
```

Em **saf.js** vamos atribuir o nome do usuário ao objeto _**user**_, adicionando a propriedade **name**, que receberá a function **userName( )** e depois vamos mostrar o resultado:

```js
/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')

const user = { }

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalDataFunctions
user.name = personalDataFunctions.userName()
```

```js
// show results personalDataFunctions
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${user.name}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Digite seu nome: Fulano Cicrano
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Nome: Fulano Cicrano
===============================
```

### Dia do nascimento

Agora vamos criar a function **dateOfBirth** que vai criar o **dia de nascimento** do usuário. Essa function vai solicitar ao usuário para digitar sua **data de nascimento** no formato brasileiro (**dia / mês  / ano**), sendo (2 dígitos / 2 dígitos / 4 dígitos). Essa function terá três validações e duas functions de criação de data pelo objeto **Date( )**:

* **isRegularExpression( )** - Para confirmar se a data digitada pelo usuário está no formato brasileiro. Recebe a data como string digitada pelo usuário e uma Expressão Regular. Retorna um valor booleano;
*  **dateInBrazilFormat( )** - Recebe a data digitada pelo usuário como string e retorna uma data criada pelo objeto Date( ). Está function foi criada, pois caso o usuário digite uma data inválida, a function retorna uma data qualquer e no momento de comparar com a próxima function, como ela não é válida, apresenta um erro, pedindo para o usuário digitar novamente a data;
* **validDate( )** - Vai receber a data digitada pelo usuário e a data criada pela function **dateInBrazilFormat( )** e compara se são iguais. Retorna um valor booleano;
* **dateInFullFormat( )** - Recebe a data no formato brasileiro como string. Retorna a data no formato completo;
* **dateOfBirthHighestCurrentDate( )** - Recebe a data em formato completo e verifica se ela é posterior a data atual. Retorna um valor booleano.

Em **personalData.js** vamos começar criando a function **dateOfBirth( )** que terá a seguinte estrutura:

```js
dateOfBirth(){
  	let dateInBrazilianFormat = ''
    let typedDate = ''
    const dateRegExp = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/
    let dateEqualExpressionRegex = false
    let dateValid = false
    let birthHighestCurrentDate = true
    
    do{
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
  },
```

Essa function irá retornar a data de nascimento no formato brasileiro **dateInBrazilianFormat**.

Primeiro o usuário irá digitar a sua data de nascimento e essa informação será armazenada em **typedDate**.

Em seguinda essa data será validada pela function **isRegularExpression( )**.

```js
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
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
  },
```

Agora em **personalData.js** vamos passar a data de nascimento pela function **dateInBrazilFormat( )** e armazenar a nova data criada em **dateInBrazilianFormat**:

```js
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
      
      dateInBrazilianFormat = personalData.dateInBrazilFormat(typedDate)
  
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
  },
```

Ainda em **personalData.js** crie a function **dateInBrazilFormat( )**:

```js
dateInBrazilFormat(dateInString){

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
    
  },
```

Vamos agora comparar as duas datas, **typedDate** e **dateInBrazilianFormat** para saber se são iguais, passando pela function **validDate( )** e armazenando em **dateValid**.

```js
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
      
      dateInBrazilianFormat = personalData.dateInBrazilFormat(typedDate)
  
      dateValid = validationFunctions.validDate(typedDate, dateInBrazilianFormat)
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
  },
```

Em **validationFunctions.js** criamos a function **validDate( )**:

```js
validDate(informedDate, realDate){
    
    return informedDate === realDate ? true : false
    
  },
```

Em **personalData.js** vamos criar a function **dateInFullFormat( )** e atribuir o seu retorno a variável **dateFullFormat** na funtion **dateOfBirth( )**:

```js
dateInFullFormat(dateInString){
    
    let arrayNumber = dateInString.split('/')
    let day = Number(arrayNumber[0])
    let month = Number(arrayNumber[1])
    let year = Number(arrayNumber[2])

    return new Date(year, month-1, day)

},
```

```js
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
      
      dateInBrazilianFormat = personalData.dateInBrazilFormat(typedDate)
  
      dateValid = validationFunctions.validDate(typedDate, dateInBrazilianFormat)
  
      let dateFullFormat = personalData.dateInFullFormat(dateInBrazilianFormat)
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
  },
```

Agora em **personalData.js** vamos verificar se a data é posterior a data atual, passando a data em formato completo pela function **dateOfBirthHighestCurrentDate( )** e armazenando o resultado em **birthHighestCurrentDate**:

```js
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
      
      dateInBrazilianFormat = personalData.dateInBrazilFormat(typedDate)
  
      dateValid = validationFunctions.validDate(typedDate, dateInBrazilianFormat)
  
      let dateFullFormat = personalData.dateInFullFormat(dateInBrazilianFormat)
      
      birthHighestCurrentDate = validationFunctions.dateOfBirthHighestCurrentDate(dateFullFormat)
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
  },
```

Em **validationFunctions.js** criamos a function **dateOfBirthHighestCurrentDate( )**:

```js
dateOfBirthHighestCurrentDate(dateOfBirth){
    var currentDate = new Date()

    return dateOfBirth.getTime() > currentDate.getTime() ? true : false

  },
```

Para encerrar a function **dateOfBirth( )**, em **personalData.js** vamos passar os valores de **dateEqualExpressionRegex**, **dateValid** e **birthHighestCurrentDate** pela function **incorrectValue( )** que irá fazer com que o sistema de repetição funcione e também seja apresentada a mensagem de "_**Dado incorreto!**_" caso a data seja inválida:

```js
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
      
      dateInBrazilianFormat = personalData.dateInBrazilFormat(typedDate)
  
      dateValid = validationFunctions.validDate(typedDate, dateInBrazilianFormat)
  
      let dateFullFormat = personalData.dateInFullFormat(dateInBrazilianFormat)
      
      birthHighestCurrentDate = validationFunctions.dateOfBirthHighestCurrentDate(dateFullFormat)

      validationFunctions.incorrectValue(!dateEqualExpressionRegex, !dateValid, "Dados Pessoais")
      validationFunctions.incorrectValue(false, birthHighestCurrentDate, "Dados Pessoais")
  
    }while(!dateEqualExpressionRegex || !dateValid || birthHighestCurrentDate)
    
    return dateInBrazilianFormat
    
  },
```

Em **saf.js** atribuímos o resultado a function **dateOfBirth( )** ao objeto _**user**_ com a propriendade **birthdayInBrazilianFormat**, depois damos o **console.log**:

```js
/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')

const user = { }

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalDataFunctions
user.name = personalDataFunctions.userName()
user.birthdayInBrazilianFormat =  personalDataFunctions.dateOfBirth()
```

```js
// show results personalDataFunctions
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${user.name}`)
console.log(`Data de nascimento: ${user.birthdayInBrazilianFormat}`)
headerFunctions.baseboard()
```

Executando o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Digite seu nome: Fulano Cicrano
Digite sua data de nascimento (DD/MM/AAAA): 01/01/2000
```

```tex
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Nome: Fulano Cicrano
Data de nascimento: 01/01/2000
===============================
```

### Idade

Vamos construir a idade usando a function **age( )** em **personalData.js**. Esta function recebe o objeto _**user**_ e retorna a idade em anos.

```js
age(userObject) {

    let currentDay = new Date()
    let dateInMilliseconds = Math.abs(currentDay.getTime() - userObject.birthdayInISOFormat.getTime())
    let age = Math.floor(dateInMilliseconds / (1000 * 60 * 60 * 24 * 365))
    
    return age
  
  },
```

Em **saf.js** no objeto _**user**_, vamos criar a propriedade **birthdayInISOFormat** que receberá a data de nascimento no formato ISO usando a function **dateInISOFormat( )**.

 Em seguinda criamos a propriedade **age**, no objeto _**user**_, que receberá a function **age( )** e depois mostrar a idade do usuário:

```js
/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')

const user = { }

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalDataFunctions
user.name = personalDataFunctions.userName()

user.birthdayInBrazilianFormat =  personalDataFunctions.dateOfBirth()
user.birthdayInFullFormat = personalDataFunctions.dateInFullFormat(user.birthdayInBrazilianFormat)
user.age = personalDataFunctions.age(user)
```

```js
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${user.name}`)
console.log(`Data de nascimento: ${user.birthdayInBrazilianFormat}`)
console.log(`Idade: ${user.age} anos`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Digite seu nome: Fulano Cicrano
Digite sua data de nascimento (DD/MM/AAAA): 01/01/2000
```

``` shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Nome: Fulano Cicrano
Data de nascimento: 01/01/2000
Idade: 22 anos
===============================
```

### Sexo

Agora vamos criar a function **sexNumber( )**. Em **personalData.js** vamos colocar esta function que mostrará um menu para o usuário escolher qual é seu sexo. Vamos validar o valor digitado pelo usuário usado **Expressão Regular** com a function **isRegularExpression( )**. O usuário só poderá digitar ou **1** para **masculino** e **2** para **feminino**, caso qualquer outro valor seja digitado, a function **incorrectValue( )** deverá ser chamada e o usuário deverá digitar novamente um valor aceito. Esta function retorna o número digitado pelo usuário. Logo, em **personalDataFunctions.js**:

```js
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
```

Ainda em  **personalData.js** vamos criar a function **showSex( )** que mostrará qual é o sexo do usuário. Esta function receberá como parâmetro o objeto **_user_**:

```js
  showSex(userObject){

    return userObject.sexNumber === 1 ? 'Masculino': 'Feminino'
    
  },
```

Em **saf.js** vamos atribuir as propriedades **sexNumber** e **sex** que vão receber as functions **sexNumber( )** e **showSex** respectivamente e depois vamos mostrar o sexo do usuário:

```js
/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')

const user = { }

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalDataFunctions
user.name = personalDataFunctions.userName()

user.birthdayInBrazilianFormat =  personalDataFunctions.dateOfBirth()
user.birthdayInISOFormat = personalDataFunctions.dateInISOFormat(user.birthdayInBrazilianFormat)
user.age = personalDataFunctions.age(user)
user.sexNumber = personalDataFunctions.sexNumber()
user.sex = personalDataFunctions.showSex(user)
```

```js
// show results personalDataFunctions
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${user.name}`)
console.log(`Data de nascimento: ${user.birthdayInBrazilianFormat}`)
console.log(`Idade: ${user.age} anos`)
console.log(`Sexo: ${user.sex}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Digite seu nome: Fulano Cicrano
Digite sua data de nascimento (DD/MM/AAAA): 01/01/2000
Escolha Sexo:
[1] Masculino
[2] Feminino
1
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Nome: Fulano Cicrano
Data de nascimento: 01/01/2000
Idade: 22 anos
Sexo: Masculino
===============================
```

### Profissão

Agora vamos criar a function **userProfession( )** que retornará a profissão do usuário. Esta function deve aceitar apenas letras e símbolos. Caso qualquer outro valor seja digitado, a function **incorrectValue( )** deverá ser chamada e o usuário deve informar a sua profissão corretamente. Para fazer a validação, vamos usar expressões regular com a function **isRegularExpression( )**. Logo, em **personalData.js**:

```js
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
```

Em **saf.js** atribuímos a propriedade **profession** ao objeto _**user**_ recebendo como valor o retorno da function **userProfession( )** e em seguida mostramos o resultado:

```js
/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')

const user = { }

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalDataFunctions
user.name = personalDataFunctions.userName()

user.birthdayInBrazilianFormat =  personalDataFunctions.dateOfBirth()
user.birthdayInISOFormat = personalDataFunctions.dateInISOFormat(user.birthdayInBrazilianFormat)
user.age = personalDataFunctions.age(user)
user.sexNumber = personalDataFunctions.sexNumber()
user.sex = personalDataFunctions.showSex(user)
user.profession = personalDataFunctions.userProfession()
```

```js
// show results personalDataFunctions
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${user.name}`)
console.log(`Data de nascimento: ${user.birthdayInBrazilianFormat}`)
console.log(`Idade: ${user.age} anos`)
console.log(`Sexo: ${user.sex}`)
console.log(`Profissão: ${user.profession}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Digite seu nome: Fulano Cicrano
Digite sua data de nascimento (DD/MM/AAAA): 01/01/2000
Escolha Sexo:
[1] Masculino
[2] Feminino
1
Digite sua profissão: Programador
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Nome: Fulano Cicrano
Data de nascimento: 01/01/2000
Idade: 22 anos
Sexo: Masculino
Profissão: Programador
===============================
```

### E-mail

Agora vamos criar a function **userEmail( )** que vai retornar um email válido digitado pelo usuário.

Dentro desta function iremos usar outra function de validação do email, **validEmail( )**. Um email para ser válido deve possuir as seguintes condições:

- Não possuir espaços;
- Possuir o @;
- Possuir algum caracter após o @;
- Possuir algum caracter antes do @;
- Possuir pelo menos um ponto após o caracter depois do @;
- Possuir algum caracter após o ponto.

A function **validEmail( )**, recebe o  email como parâmetro e separa em duas partes:

- **user** = antes do @
- **domain** = depois do @

Após começamos as validações que já haviam sido definidas acima no **if** na sequencia abaixo:

- Tamanho de user maior ou igual a 1 caracter.
- Tamanho do domain maior ou igual a 3 caracteres.
- user não pode conter o @.
- domain não pode conter o @.
- user não pode conter o “ ” espaço em branco.
- domain não pode conter o “ ” espaço em branco.
- domain tem que possuir “.” Ponto.
- A posição do primeiro ponto tem que ser maior ou igual a 1, lembrando a posição 0 deve ser ocupado por algum caracter após o @.
- A posição do ultimo ponto tem que ser menor que o ultimo caracter, deve ser finalizado o domínio por um caracter.

Caso o email digitado pelo usuário não atenda a qualquer uma destas condições, uma mensagem de erro deve ser apresentada (**incorrectValue( )** é chamada), e o usuário deve digitar seu email novamente. Feitas essas considerações, vamos aos códigos abaixo:

Em **validationFunctions.js**:

```js
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
```

Em **personalData.js**:

```js
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
```

Em **saf.js** atribuímos ao objeto _**user**_ a propriedade **userEmail** que vai receber como valor o retorno da function **userEmail( )**. Depois apresentamos o resultado:

```js
/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')

const user = { }

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalDataFunctions
user.name = personalDataFunctions.userName()

user.birthdayInBrazilianFormat =  personalDataFunctions.dateOfBirth()
user.birthdayInISOFormat = personalDataFunctions.dateInISOFormat(user.birthdayInBrazilianFormat)
user.age = personalDataFunctions.age(user)
user.sexNumber = personalDataFunctions.sexNumber()
user.sex = personalDataFunctions.showSex(user)
user.profession = personalDataFunctions.userProfession()
user.userEmail = personalDataFunctions.userEmail()
```

```js
// show results personalDataFunctions
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${user.name}`)
console.log(`Data de nascimento: ${user.birthdayInBrazilianFormat}`)
console.log(`Idade: ${user.age} anos`)
console.log(`Sexo: ${user.sex}`)
console.log(`Profissão: ${user.profession}`)
console.log(`E-mail: ${user.userEmail}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Digite seu nome: Fulano Cicrano
Digite sua data de nascimento (DD/MM/AAAA): 01/01/2000
Escolha Sexo:
[1] Masculino
[2] Feminino
1
Digite sua profissão: Programador
Digite seu email: fulano@cicrano.com
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Nome: Fulano Cicrano
Data de nascimento: 01/01/2000
Idade: 22 anos
Sexo: Masculino
Profissão: Programador
E-mail: fulano@cicrano.com
===============================
```

### Número de telefone

Agora vamos criar a function **phoneNumber( )** que irá retornar um número de telefone válido. Está function só pode receber números, em formato de número de celular, **DDD + número de celular (nove dígitos)**. Caso o número não esteja de acordo, uma mensagem de erro deverá aparecer e solicitar que o usuário digite o número de celular novamente (**incorrectValue( )**). Esta validação será realizada com Expressão Regular com o uso da function **isRegularExpression( )**. Logo, em **personalData.js**:

```js
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
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **phoneNumber** que receberá como valor o retorno da function **phoneNumber( )** e depois mostrar o número do telefone:

```js
/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')

const user = { }

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalDataFunctions
user.name = personalDataFunctions.userName()

user.birthdayInBrazilianFormat =  personalDataFunctions.dateOfBirth()
user.birthdayInISOFormat = personalDataFunctions.dateInISOFormat(user.birthdayInBrazilianFormat)
user.age = personalDataFunctions.age(user)
user.sexNumber = personalDataFunctions.sexNumber()
user.sex = personalDataFunctions.showSex(user)
user.profession = personalDataFunctions.userProfession()
user.userEmail = personalDataFunctions.userEmail()
user.phoneNumber = personalDataFunctions.phoneNumber()
```

```js
// show results personalDataFunctions
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${user.name}`)
console.log(`Data de nascimento: ${user.birthdayInBrazilianFormat}`)
console.log(`Idade: ${user.age} anos`)
console.log(`Sexo: ${user.sex}`)
console.log(`Profissão: ${user.profession}`)
console.log(`E-mail: ${user.userEmail}`)
console.log(`Celular: ${user.phoneNumber}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Digite seu nome: Fulano Cicrano
Digite sua data de nascimento (DD/MM/AAAA): 01/01/2000
Escolha Sexo:
[1] Masculino
[2] Feminino
1
Digite sua profissão: Programador
Digite seu email: fulano@cicrano.com
Digite seu número de celular com DDD: 81912348765
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Nome: Fulano Cicrano
Data de nascimento: 01/01/2000
Idade: 22 anos
Sexo: Masculino
Profissão: Programador
E-mail: fulano@cicrano.com
Celular: 81912348765
===============================
```

Aqui encerramos por enquanto a etapa de **personal data functions**, vamos mostrar os arquivos completos até o moemento de **validationFunctions.js**, **personalDataFunctions.js** e **saf.js**:

Arquivo **validationFunctions.js** completo:

```js
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
```

Arquivo **personalDataFunctions.js** completo:

```js
/* personal data functions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

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
  
      let dateISO = personalDataFunctions.dateInISOFormat(dateInBrazilianFormat)
      
      birthHighestCurrentDate = validationFunctions.dateOfBirthHighestCurrentDate(dateISO)

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
  dateInISOFormat(dateInString){
    
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
    let dateInMilliseconds = Math.abs(currentDay.getTime() - userObject.birthdayInISOFormat.getTime())
    let age = Math.floor(dateInMilliseconds / (1000 * 60 * 60 * 24 * 365))
    
    return age
  
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

}

module.exports = {
  personalDataFunctions
}

```

Arquivo **saf.js** completo:

```js
/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')

const user = { }

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalDataFunctions
user.name = personalDataFunctions.userName()

user.birthdayInBrazilianFormat =  personalDataFunctions.dateOfBirth()
user.birthdayInISOFormat = personalDataFunctions.dateInISOFormat(user.birthdayInBrazilianFormat)
user.age = personalDataFunctions.age(user)
user.sexNumber = personalDataFunctions.sexNumber()
user.sex = personalDataFunctions.showSex(user)
user.profession = personalDataFunctions.userProfession()
user.userEmail = personalDataFunctions.userEmail()
user.phoneNumber = personalDataFunctions.phoneNumber()

// show results personalDataFunctions
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${user.name}`)
console.log(`Data de nascimento: ${user.birthdayInBrazilianFormat}`)
console.log(`Idade: ${user.age} anos`)
console.log(`Sexo: ${user.sex}`)
console.log(`Profissão: ${user.profession}`)
console.log(`E-mail: ${user.userEmail}`)
console.log(`Celular: ${user.phoneNumber}`)
headerFunctions.baseboard()
```

Chegamos ao fim da parte de **Dados Pessoais**. Agora vamos entrar na próxima etapa, **Anamnese**, Let's Go!

## Anamnesis

Vamos começar criando o arquivo **anamnesisFunctions.js** e dentro dele vamos colocar:

- Variável input;
- Requerer a variável **validationFunctions**;
- Criar uma variável objeto **anamnesisFunctions**;
- Exportar essa variável.

```js
/* anamnesisFunctions.js */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const anamnesisFunctions = {

}

module.exports = {
  anamnesisFunctions
}
```

### Questionário PAR-Q

Na variável **anamnesisFunctions** vamos criar a primeira function, **choice( )**, que será uma function que exibirá um menu de escolha, tendo como opções [1] para sim e [2] para não:

```js
choice(){

    console.log('Escolha:')
    console.log('[1] Sim')
    console.log('[2] Não')

  },
```

Vamos agora criar a function **questionnairePARQ( )**. Esta function deverá apresentar 7 perguntas para o usuário, aceitando apenas como resposta, "sim", ou "não". Caso alguma resposta seja **"sim"**, a mensagem **"Você deverá realizar um exame médico antes de iniciar suas atividades!"** deverá ser apresentada. Caso todas as repostas seja **"não"**, a mensagem **"Todas as respostas do questionário foram 'Não'!"** deverá ser apresentada. Na validação das respostas, só serão aceitos os numerais 1 e 2, caso a resposta seja qualquer outro valor diferente disso, até mesmo vazio, a function **incorrectValue( )** deverá ser chamada e o usuário terá que responder novamente com a resposta correta.

Questionário PAR-Q:

- Seu médico já mencionou alguma vez que você tem uma condição cardíaca e que você só deve realizar atividade física recomendada por um médico?
- Você sente dor no tórax quando realiza atividade física?
- No mês passado, você teve dor torácica quando não estava realizando atividade física?
- Você perdeu o equilíbrio por causa de tontura ou alguma vez perdeu a consciência?
- Você tem algum problema ósseo ou de articulação que poderia piorar em conseqüência de uma alteração em sua atividade física?
- Seu médico está prescrevendo medicamentos (por exemplo, água pílulas) para sua pressão ou condição cardíaca?
- Você teria alguma razão para não praticar exercício físico ou outro problema que impeça?

```js
questionnairePARQ(){

    let questionnairePARQ = [
      "Seu médico já mencionou alguma vez que você tem uma condição cardíaca e que você só deve realizar atividade física recomendada por um médico?",
      "Você sente dor no tórax quando realiza atividade física?",
      "No mês passado, você teve dor torácica quando não estava realizando atividade física?",
      "Você perdeu o equilíbrio por causa de tontura ou alguma vez perdeu a consciência?",
      "Você tem algum problema ósseo ou de articulação que poderia piorar em conseqüência de uma alteração em sua atividade física?",
      "Seu médico está prescrevendo medicamentos para sua pressão ou condição cardíaca?",
      "Você teria alguma razão para não praticar exercício físico ou outro problema que impeça?",
    ]
    let questionnairePARQAnswer = []
    let itsNumberOneOrTwo = true
    let regexNumber = /^[1]$|^[2]$/

    for(let i = 0; i < questionnairePARQ.length; i++){
      
      do{

        console.log(`${[i+1]} - ${questionnairePARQ[i]}`)
        anamnesisFunctions.choice()
        questionnairePARQAnswer[i] = input.question("")
        itsNumberOneOrTwo = validationFunctions.isRegularExpression(questionnairePARQAnswer[i], regexNumber)
        validationFunctions.incorrectValue(false, !itsNumberOneOrTwo, "Anamnese")

      }while(!itsNumberOneOrTwo)
      
    }
    
    if(questionnairePARQAnswer.includes("1")){
      return "Você deverá realizar um exame médico antes de iniciar suas atividades!"
    } else {
      return "Todas as respostas do questionário foram 'Não'!"
    }

  },
```

Em **saf.js** vamos requerer o arquivo **anamnesisFunctions**:

```js
const { anamnesisFunctions } = require('./anamnesisFunctions')
```

Em seguida vamos criar a sessão de **variables anamnesisFunctions** e **show results anamnesisFunctions** adicionando ao objeto _**user**_ a propriedade **questionnairePARQ** que receberá como valor o retorno da a function **questionnairePARQ( )**. Em seguida apresentamos o resultado. Logo, em **saf.js**:

```js
/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')

const user = { }

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalDataFunctions
user.name = personalDataFunctions.userName()

user.birthdayInBrazilianFormat =  personalDataFunctions.dateOfBirth()
user.birthdayInISOFormat = personalDataFunctions.dateInISOFormat(user.birthdayInBrazilianFormat)
user.age = personalDataFunctions.age(user)
user.sexNumber = personalDataFunctions.sexNumber()
user.sex = personalDataFunctions.showSex(user)
user.profession = personalDataFunctions.userProfession()
user.userEmail = personalDataFunctions.userEmail()
user.phoneNumber = personalDataFunctions.phoneNumber()

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variables anamnesisFunctions
user.questionnairePARQ = anamnesisFunctions.questionnairePARQ()
```

```js
// show results personalDataFunctions
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${user.name}`)
console.log(`Data de nascimento: ${user.birthdayInBrazilianFormat}`)
console.log(`Idade: ${user.age} anos`)
console.log(`Sexo: ${user.sex}`)
console.log(`Profissão: ${user.profession}`)
console.log(`E-mail: ${user.userEmail}`)
console.log(`Celular: ${user.phoneNumber}`)

// show results anamnesisFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

console.log(`Questionário PAR-Q: ${user.questionnairePARQ}`)
headerFunctions.baseboard()
```

Esta parte da execução, iremos apenas mostrar a parte da Anamnese, no final de todo o programa mostramos ele completo, logo ao executar:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
1 - Seu médico já mencionou alguma vez que você tem uma condição cardíaca e que você só deve realizar atividade física recomendada por um médico?
Escolha:
[1] Sim
[2] Não
2
2 - Você sente dor no tórax quando realiza atividade física?
Escolha:
[1] Sim
[2] Não
2
3 - No mês passado, você teve dor torácica quando não estava realizando atividade física?
Escolha:
[1] Sim
[2] Não
2
4 - Você perdeu o equilíbrio por causa de tontura ou alguma vez perdeu a consciência?
Escolha:
[1] Sim
[2] Não
2
5 - Você tem algum problema ósseo ou de articulação que poderia piorar em conseqüência de uma alteração em sua atividade física?
Escolha:
[1] Sim
[2] Não
2
6 - Seu médico está prescrevendo medicamentos para sua pressão ou condição cardíaca?
Escolha:
[1] Sim
[2] Não
2
7 - Você teria alguma razão para não praticar exercício físico ou outro problema que impeça?
Escolha:
[1] Sim
[2] Não
2 
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Não'!
===============================
```

### Estado Físico Atual

Agora vamos criar a function **currentPhysicalState( )** que vai pedir para o usuário informar qual é o seu estado físico atual a partir do menu de escolha **[1]** para **Sedentário** e **[2]** para **Ativo**. Esta function deve aceitar apenas um dígito, sendo apenas o numeral 1 ou 2. Caso a resposta seja qualquer outro valor diferente disso, até mesmo vazio, a function **incorrectValue( )** deverá ser chamada e o usuário terá que responder novamente com a resposta correta. Esta function retorna o valor digitado pelo usuário.

```js
currentPhysicalState(){

    let currentPhysicalState = 0
    let itsNumberOneOrTwo = true
    const regexNumber = /^[1]$|^[2]$/
    
    do{
  
      console.log('Qual seu estado físico atualmente? ')
      console.log(`[1] Sedentário`)
      console.log(`[2] Ativo`)
      currentPhysicalState = input.question('')
     
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(currentPhysicalState, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")
  
    }while(!itsNumberOneOrTwo)
  
    return Number(currentPhysicalState)
  
  },
```

Em **saf.js** adicionamos ao objeto _**user**_ a propriedade **currentPhysicalState** que recebe como valor o retorno da function **currentPhysicalState( )**.

```js
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variables anamnesisFunctions
user.questionnairePARQ = anamnesisFunctions.questionnairePARQ()
user.currentPhysicalState = anamnesisFunctions.currentPhysicalState()/*
```

Em **anamnesisFunctions.js** criamos a function **showPhysicalState( )** que irá mostrar se o usuário é sedentário ou ativo. Está function terá como parâmetro o objeto _**user**_:

```js
showPhysicalState(user){

    return user.currentPhysicalState === 1 ? 'Sedentário' : 'Ativo'
  
  },
```

E em **saf.js** vamos mostrar o resultado chamando a function **showPhysicalState( )** e passando como parâmetro o objeto _**user**_:

```js
// show results anamnesisFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

console.log(`Questionário PAR-Q: ${user.questionnairePARQ}`)
console.log(`Estado físico: ${anamnesisFunctions.showPhysicalState(user)}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
1 - Seu médico já mencionou alguma vez que você tem uma condição cardíaca e que você só deve realizar atividade física recomendada por um médico?
Escolha:
[1] Sim
[2] Não
2
2 - Você sente dor no tórax quando realiza atividade física?
Escolha:
[1] Sim
[2] Não
2
3 - No mês passado, você teve dor torácica quando não estava realizando atividade física?
Escolha:
[1] Sim
[2] Não
1
4 - Você perdeu o equilíbrio por causa de tontura ou alguma vez perdeu a consciência?
Escolha:
[1] Sim
[2] Não
2
5 - Você tem algum problema ósseo ou de articulação que poderia piorar em conseqüência de uma alteração em sua atividade física?
Escolha:
[1] Sim
[2] Não
2
6 - Seu médico está prescrevendo medicamentos para sua pressão ou condição cardíaca?
Escolha:
[1] Sim
[2] Não
2
7 - Você teria alguma razão para não praticar exercício físico ou outro problema que impeça?
Escolha:
[1] Sim
[2] Não
2
Qual seu estado físico atualmente? 
[1] Sedentário
[2] Ativo
2
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Não'!
Estado físico: Ativo
===============================
```

### Doença Pregressa / Doenças na Família / Cirurgia Realizada / Usa medicamentos / Lesões desportivas

Em **anamnesisFunctions.js** vamos criar o objeto _**anamnesisQuestions**_ que terá dentro dele, outros objetos de acordo com cada tópico:

- Doença Pregressa - _**pastIllness**_
- Doenças na Família - _**illnessesInTheFamily**_
- Cirurgia Realizada - _**surgeryPerformed**_
- Usa medicamentos - _**useMedication**_
- Lesões desportivas - _**sportsInjuries**_

Cada tópico terá uma pergunta, um título, uma segunda pergunta e uma mensagem. Logo, em **anamnesisFunctions.js** vamos criar o objeto _**anamnesisQuestions**_:

```js
const anamnesisQuestions = { pastIllness: {
                                            firstQuestion: `Avaliado possue doença pregressa?`,
                                            title: "Anamnese",
                                            secondQuestion: `Qual doença?`,
                                            message: `Sem doença pregressa.`,
                                          },
                              illnessesInTheFamily: {
                                            firstQuestion: `Avaliado possue alguém da família com doença pregressa?`,
                                            title: "Anamnese",
                                            secondQuestion: `Qual doença?`,
                                            message: `Sem doença pregressa na família.`,
                                          },
                              surgeryPerformed: {
                                            firstQuestion: `Avaliado já realizou precedimento cirúrgico?`,
                                            title: "Anamnese",
                                            secondQuestion: `Qual cirurgia?`,
                                            message: `Nunca realizou procedimento cirúrgico.`,
                                          },
                              useMedication: {
                                            firstQuestion: `Avaliado faz uso de medicamentos?`,
                                            title: "Anamnese",
                                            secondQuestion: `Qual medicamento?`,
                                            message: `Não faz uso de medicamento.`,
                                          },
                              sportsInjuries: {
                                            firstQuestion: `Avaliado já sofreu alguma lesão desportiva?`,
                                            title: "Anamnese",
                                            secondQuestion: `Qual lesão?`,
                                            message: `Nunca sofreu lesão desportiva.`,
                                          },
}
```

Em seguida, vamos exportar este objeto _**anamnesisQuestions**_ no module.exports em **anamnesisFunctions.js** e depois importá-lo em **saf.js**:

```js
module.exports = {
  anamnesisFunctions, anamnesisQuestions
}
```

```js
/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')
const { anamnesisQuestions } = require('./anamnesisFunctions')
```

Agora vamos criar a function **questions( )** que vai receber um objeto como parâmetro e vai realizar as perguntas para o usuário, de acordo com o objeto que foi passado. Esta function irá fazer uma primeira pergunta e deve aceitar como resposta apenas um dígito, sendo **[1]** para **Sim** e **[2]** para **Não**. Caso a resposta seja qualquer outro valor diferente disso, até mesmo vazio, a function **incorrectValue( )** deverá ser chamada e o usuário terá que responder novamente com a resposta correta. Caso a resposta seja **sim**, uma segunda pergunta será realizada e o usuário deve digitar em texto a resposta. Neste campo o usuário deve digitar algum caracter alfanumérico. Caso digite apenas espaço, ou deixe em branco, a function **incorrectValue( )** será chamada e o usuário terá que responder novamente com valores corretos. Para fazer as validações, vamos usar **expressões regulares**, com a function **isRegularExpression( )**. Sobre o retorno desta function: Caso o usuário digite **não**, será retornada a **mensagem** pré-determinada no objeto que foi passado como parâmetro, porém se ele digitar **sim**, deverá ser retornado a resposta da segunda pergunta que foi digitado pelo o mesmo.

Em **anamnesisFunctions.js**:

```js
questions(object){
  
    let answerNumber = 2
    let textAnswer = ''
    let itsNumberOneOrTwo = true
    const regexNumberOneOrTwo = /^[1]$|^[2]$/
    let isAlphanumericCharacters = true
    const regexAlphanumericCharacters = /\D|\d/ 
  
    do{
  
      console.log(object.firstQuestion)
      anamnesisFunctions.choice()
      answerNumber = Number(input.question(''))
  
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(answerNumber, regexNumberOneOrTwo)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, object.title)
  
      if(answerNumber === 1){
        
        do{
  
          console.log(object.secondQuestion)
          textAnswer = input.question('')
          isAlphanumericCharacters = validationFunctions.isRegularExpression(textAnswer, regexAlphanumericCharacters)
          validationFunctions.incorrectValue(false, !isAlphanumericCharacters, object.title)
  
        }while(!isAlphanumericCharacters)
        
      } else {
        textAnswer = object.message
      }
  
    }while(!itsNumberOneOrTwo)
  
      return textAnswer
  
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ as propriedades **pastIllness**, **illnessesFamily**, **surgeryPerformed**, **useMedication** e **sportsInjuries** que receberão como valor o retorno da function **questions( )** passando como parâmetro os objetos dentro do objeto _**anamnesisQuestions**_. Em seguida, vamos mostrar os resultados.

```js
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variables anamnesisFunctions
user.questionnairePARQ = anamnesisFunctions.questionnairePARQ()
user.currentPhysicalState = anamnesisFunctions.currentPhysicalState()
user.pastIllness = anamnesisFunctions.questions(anamnesisQuestions.pastIllness)
user.illnessesFamily = anamnesisFunctions.questions(anamnesisQuestions.illnessesInTheFamily)
user.surgeryPerformed = anamnesisFunctions.questions(anamnesisQuestions.surgeryPerformed)
user.useMedication = anamnesisFunctions.questions(anamnesisQuestions.useMedication)
user.sportsInjuries = anamnesisFunctions.questions(anamnesisQuestions.sportsInjuries)
```

```js
// show results anamnesisFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

console.log(`Questionário PAR-Q: ${user.questionnairePARQ}`)
console.log(`Estado físico: ${anamnesisFunctions.showPhysicalState(user)}`)
console.log(`Doença Pregressa: ${user.pastIllness}`)
console.log(`Doença Pregressa na Família: ${user.illnessesFamily}`)
console.log(`Cirurgia: ${user.surgeryPerformed}`)
console.log(`Uso de Medicamento: ${user.useMedication}`)
console.log(`Lesão Desportiva: ${user.sportsInjuries}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
1 - Seu médico já mencionou alguma vez que você tem uma condição cardíaca e que você só deve realizar atividade física recomendada por um médico?
Escolha:
[1] Sim
[2] Não
2
2 - Você sente dor no tórax quando realiza atividade física?
Escolha:
[1] Sim
[2] Não
2
3 - No mês passado, você teve dor torácica quando não estava realizando atividade física?
Escolha:
[1] Sim
[2] Não
2
4 - Você perdeu o equilíbrio por causa de tontura ou alguma vez perdeu a consciência?
Escolha:
[1] Sim
[2] Não
2
5 - Você tem algum problema ósseo ou de articulação que poderia piorar em conseqüência de uma alteração em sua atividade física?
Escolha:
[1] Sim
[2] Não
2
6 - Seu médico está prescrevendo medicamentos para sua pressão ou condição cardíaca?
Escolha:
[1] Sim
[2] Não
2
7 - Você teria alguma razão para não praticar exercício físico ou outro problema que impeça?
Escolha:
[1] Sim
[2] Não
2
Qual seu estado físico atualmente? 
[1] Sedentário
[2] Ativo
1
Avaliado possue doença pregressa?
Escolha:
[1] Sim
[2] Não
2
Avaliado possue alguém da família com doença pregressa?
Escolha:
[1] Sim
[2] Não
1
Qual doença?
Avos hipertensos
Avaliado já realizou precedimento cirúrgico?
Escolha:
[1] Sim
[2] Não
1
Qual cirurgia?
Artroscopia de ombro
Avaliado faz uso de medicamentos?
Escolha:
[1] Sim
[2] Não
2
Avaliado já sofreu alguma lesão desportiva?
Escolha:
[1] Sim
[2] Não
2
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Não'!
Estado físico: Sedentário
Doença Pregressa: Sem doença pregressa.
Doença Pregressa na Família: Avos hipertensos
Cirurgia: Artroscopia de ombro
Uso de Medicamento: Não faz uso de medicamento.
Lesão Desportiva: Nunca sofreu lesão desportiva.
===============================
```

### Objetivo do treino

Vamos construir a function **trainingObjective( )**. Esta function irá perguntar ao usuário qual é o objetivo do seu treino, mostrando um menu, tendo o usuário que escolher entre as opções conforme abaixo:

```shell
Qual é o objetivo do seu treino?
[1] Estético
[2] Bem-estar e Saúde
[3] Terapêutico
[4] Recreativo
[5] Desportivo
```

Está function só pode aceitar um dígito de números de 1 a 5. Caso o usuário digite qualquer outro valor diferente disto, vazio, espaço ou até mesmo um número com mais de um dígito, a function **incorrectValue( )** deverá ser chamada  e o usuário terá que responder novamente com um valor correto.

Está function deve retornar o objetivo conforme selecionado pelo o mesmo. Logo, em **anamnesisFunctions.js**:

```js
trainingObjective(){

    let trainingObjectiveAnswer = ''
    let regexNumber = /^[1-5]$/
    let isNumberOneToFive = true
  
    do{
  
      console.log('Qual é o objetivo do seu treino?')
      console.log(`[1] Estético`)
      console.log(`[2] Bem-estar e Saúde`)
      console.log(`[3] Terapêutico`)
      console.log(`[4] Recreativo`)
      console.log(`[5] Desportivo`)
      trainingObjectiveAnswer = Number(input.question(''))
  
      isNumberOneToFive = validationFunctions.isRegularExpression(trainingObjectiveAnswer, regexNumber)
      validationFunctions.incorrectValue(!isNumberOneToFive, false, "Anamnese")
  
    }while(!isNumberOneToFive)
    
    switch (trainingObjectiveAnswer) {
      case 1:
        return `Estético`
        break
      case 2:
        return `Bem-estar e Saúde`
        break
      case 3:
        return `Terapêutico`
        break
      case 4:
        return `Recreativo`  
        break
      default:
        return `Desportivo`
        break
    }
  
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propridade **trainingObjective** que recebe como valor o retorno da function **trainingObjective( )** e em seguida mostramos o resultado:

```js
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variables anamnesisFunctions
user.questionnairePARQ = anamnesisFunctions.questionnairePARQ()
user.currentPhysicalState = anamnesisFunctions.currentPhysicalState()
user.pastIllness = anamnesisFunctions.questions(anamnesisQuestions.pastIllness)
user.illnessesFamily = anamnesisFunctions.questions(anamnesisQuestions.illnessesInTheFamily)
user.surgeryPerformed = anamnesisFunctions.questions(anamnesisQuestions.surgeryPerformed)
user.useMedication = anamnesisFunctions.questions(anamnesisQuestions.useMedication)
user.sportsInjuries = anamnesisFunctions.questions(anamnesisQuestions.sportsInjuries)
user.trainingObjective = anamnesisFunctions.trainingObjective()
```

```js
// show results anamnesisFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

console.log(`Questionário PAR-Q: ${user.questionnairePARQ}`)
console.log(`Estado físico: ${anamnesisFunctions.showPhysicalState(user)}`)
console.log(`Doença Pregressa: ${user.pastIllness}`)
console.log(`Doença Pregressa na Família: ${user.illnessesFamily}`)
console.log(`Cirurgia: ${user.surgeryPerformed}`)
console.log(`Uso de Medicamento: ${user.useMedication}`)
console.log(`Lesão Desportiva: ${user.sportsInjuries}`)
console.log(`Objetivo do treino: ${user.trainingObjective}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
1 - Seu médico já mencionou alguma vez que você tem uma condição cardíaca e que você só deve realizar atividade física recomendada por um médico?
Escolha:
[1] Sim
[2] Não
2
2 - Você sente dor no tórax quando realiza atividade física?
Escolha:
[1] Sim
[2] Não
2
3 - No mês passado, você teve dor torácica quando não estava realizando atividade física?
Escolha:
[1] Sim
[2] Não
2
4 - Você perdeu o equilíbrio por causa de tontura ou alguma vez perdeu a consciência?
Escolha:
[1] Sim
[2] Não
2
5 - Você tem algum problema ósseo ou de articulação que poderia piorar em conseqüência de uma alteração em sua atividade física?
Escolha:
[1] Sim
[2] Não
2
6 - Seu médico está prescrevendo medicamentos para sua pressão ou condição cardíaca?
Escolha:
[1] Sim
[2] Não
2
7 - Você teria alguma razão para não praticar exercício físico ou outro problema que impeça?
Escolha:
[1] Sim
[2] Não
2
Qual seu estado físico atualmente? 
[1] Sedentário
[2] Ativo
2
Avaliado possue doença pregressa?
Escolha:
[1] Sim
[2] Não
2
Avaliado possue alguém da família com doença pregressa?
Escolha:
[1] Sim
[2] Não
1
Qual doença?
Avos hipertensos
Avaliado já realizou precedimento cirúrgico?
Escolha:
[1] Sim
[2] Não
1
Qual cirurgia?
Artroscopia de ombro
Avaliado faz uso de medicamentos?
Escolha:
[1] Sim
[2] Não
2
Avaliado já sofreu alguma lesão desportiva?
Escolha:
[1] Sim
[2] Não
2
Qual é o objetivo do seu treino?
[1] Estético
[2] Bem-estar e Saúde
[3] Terapêutico
[4] Recreativo
[5] Desportivo
2
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Não'!
Estado físico: Ativo
Doença Pregressa: Sem doença pregressa.
Doença Pregressa na Família: Avos hipertensos
Cirurgia: Artroscopia de ombro
Uso de Medicamento: Não faz uso de medicamento.
Lesão Desportiva: Nunca sofreu lesão desportiva.
Objetivo do treino: Bem-estar e Saúde
===============================
```

### Dias disponíveis para treino

Vamos criar a function **daysAvailableForTraining( )**. Esta function pergunta a quantidade de dias disponíveis pelo usuário para treinar. Portanto, só aceita números entre 1 e 7. Caso o usuário digite qualquer outro valor diferente disto, vazio, espaço ou até mesmo um número com mais de um dígito, a function **incorrectValue( )** deverá ser chamada e o usuário terá que responder novamente com um valor correto.

Está function deve retornar a quantidade de dias digitado pelo usuário. Logo, em **anamnesisFunctions.js**:

```js
daysAvailableForTraining(){

    let daysAvailableForTraining = 0
    let isNumberOneToSeven = true
    let regexNumber = /^[1-7]$/
    
    do{
   
     daysAvailableForTraining = input.question('Digite a quantidade de dias disponíveis para treinar: ')
   
     isNumberOneToSeven = validationFunctions.isRegularExpression(daysAvailableForTraining, regexNumber)
     validationFunctions.incorrectValue(!isNumberOneToSeven, false, "Anamnese")
   
    }while(!isNumberOneToSeven)
   
    return Number(daysAvailableForTraining)
   
   },
```

Em **saf.js** adicionamos a propriedade **daysAvailableForTraining** que recebe como valor o retorno da function **daysAvailableForTraining( )** ao objeto _**user**_ e em seguida mostramos o resultado:

```js
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variables anamnesisFunctions
user.questionnairePARQ = anamnesisFunctions.questionnairePARQ()
user.currentPhysicalState = anamnesisFunctions.currentPhysicalState()
user.pastIllness = anamnesisFunctions.questions(anamnesisQuestions.pastIllness)
user.illnessesFamily = anamnesisFunctions.questions(anamnesisQuestions.illnessesInTheFamily)
user.surgeryPerformed = anamnesisFunctions.questions(anamnesisQuestions.surgeryPerformed)
user.useMedication = anamnesisFunctions.questions(anamnesisQuestions.useMedication)
user.sportsInjuries = anamnesisFunctions.questions(anamnesisQuestions.sportsInjuries)
user.trainingObjective = anamnesisFunctions.trainingObjective()
user.daysAvailableForTraining = anamnesisFunctions.daysAvailableForTraining()
```

```js
// show results anamnesisFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

console.log(`Questionário PAR-Q: ${user.questionnairePARQ}`)
console.log(`Estado físico: ${anamnesisFunctions.showPhysicalState(user)}`)
console.log(`Doença Pregressa: ${user.pastIllness}`)
console.log(`Doença Pregressa na Família: ${user.illnessesFamily}`)
console.log(`Cirurgia: ${user.surgeryPerformed}`)
console.log(`Uso de Medicamento: ${user.useMedication}`)
console.log(`Lesão Desportiva: ${user.sportsInjuries}`)
console.log(`Objetivo do treino: ${user.trainingObjective}`)
console.log(`Dias disponíveis para treinar: ${user.daysAvailableForTraining} dias.`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
1 - Seu médico já mencionou alguma vez que você tem uma condição cardíaca e que você só deve realizar atividade física recomendada por um médico?
Escolha:
[1] Sim
[2] Não
2
2 - Você sente dor no tórax quando realiza atividade física?
Escolha:
[1] Sim
[2] Não
2
3 - No mês passado, você teve dor torácica quando não estava realizando atividade física?
Escolha:
[1] Sim
[2] Não
2
4 - Você perdeu o equilíbrio por causa de tontura ou alguma vez perdeu a consciência?
Escolha:
[1] Sim
[2] Não
2
5 - Você tem algum problema ósseo ou de articulação que poderia piorar em conseqüência de uma alteração em sua atividade física?
Escolha:
[1] Sim
[2] Não
2
6 - Seu médico está prescrevendo medicamentos para sua pressão ou condição cardíaca?
Escolha:
[1] Sim
[2] Não
2
7 - Você teria alguma razão para não praticar exercício físico ou outro problema que impeça?
Escolha:
[1] Sim
[2] Não
2
Qual seu estado físico atualmente? 
[1] Sedentário
[2] Ativo
2
Avaliado possue doença pregressa?
Escolha:
[1] Sim
[2] Não
2
Avaliado possue alguém da família com doença pregressa?
Escolha:
[1] Sim
[2] Não
1
Qual doença?
Avos Hipertensos
Avaliado já realizou precedimento cirúrgico?
Escolha:
[1] Sim
[2] Não
1
Qual cirurgia?
Artroscopia de ombro
Avaliado faz uso de medicamentos?
Escolha:
[1] Sim
[2] Não
2
Avaliado já sofreu alguma lesão desportiva?
Escolha:
[1] Sim
[2] Não
2
Qual é o objetivo do seu treino?
[1] Estético
[2] Bem-estar e Saúde
[3] Terapêutico
[4] Recreativo
[5] Desportivo
3
Digite a quantidade de dias disponíveis para treinar: 5
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Não'!
Estado físico: Ativo
Doença Pregressa: Sem doença pregressa.
Doença Pregressa na Família: Avos Hipertensos
Cirurgia: Artroscopia de ombro
Uso de Medicamento: Não faz uso de medicamento.
Lesão Desportiva: Nunca sofreu lesão desportiva.
Objetivo do treino: Terapêutico
Dias disponíveis para treinar: 5 dias.
===============================
```

### Tempo disponível por treino(min):

Vamos criar a function **timeAvailablePerTraining( )** que vai perguntar ao usuário quanto tempo, em minutos, ele tem disponível para treinar. Esta function aceitará apenas números de 1 a 300 como valor. Caso o usuário digite qualquer outro valor diferente disto, vazio, espaço, alguma letra, a function **incorrectValue( )** deverá ser chamada e o usuário terá que responder novamente com um valor correto.

Está function deve retornar o tempo em minutos digitado pelo usuário. Logo, em **anamnesisFunctions.js**:

```js
timeAvailablePerTraining(){

    let timeAvailablePerTraining = 0
    let isNumberFromOneToThreeHundred = true
    let regexNumber = /(^[1-9]$)|(^[1-9][0-9]$)|(^[1-2][0-9]{2}$)|(^[3][0][0]$)/
  
    do{
  
      timeAvailablePerTraining = input.question('Digite o tempo disponível para treino (min): ')
      isNumberFromOneToThreeHundred = validationFunctions.isRegularExpression(timeAvailablePerTraining, regexNumber)
      validationFunctions.incorrectValue(!isNumberFromOneToThreeHundred, false, "Anamnese")
   
    }while(!isNumberFromOneToThreeHundred)
     
  
    return Number(timeAvailablePerTraining)
  
  },
```

Em **saf.js** adicionamos ao objeto _**user**_ a propriedade **timeAvailablePerTraining** que recebe como valor o retorno da function **timeAvailablePerTraining( )** e em seguida mostramos o resultado:

```js
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variables anamnesisFunctions
user.questionnairePARQ = anamnesisFunctions.questionnairePARQ()
user.currentPhysicalState = anamnesisFunctions.currentPhysicalState()
user.pastIllness = anamnesisFunctions.questions(anamnesisQuestions.pastIllness)
user.illnessesFamily = anamnesisFunctions.questions(anamnesisQuestions.illnessesInTheFamily)
user.surgeryPerformed = anamnesisFunctions.questions(anamnesisQuestions.surgeryPerformed)
user.useMedication = anamnesisFunctions.questions(anamnesisQuestions.useMedication)
user.sportsInjuries = anamnesisFunctions.questions(anamnesisQuestions.sportsInjuries)
user.trainingObjective = anamnesisFunctions.trainingObjective()
user.daysAvailableForTraining = anamnesisFunctions.daysAvailableForTraining()
user.timeAvailablePerTraining = anamnesisFunctions.timeAvailablePerTraining()
```

```js
// show results anamnesisFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

console.log(`Questionário PAR-Q: ${user.questionnairePARQ}`)
console.log(`Estado físico: ${anamnesisFunctions.showPhysicalState(user)}`)
console.log(`Doença Pregressa: ${user.pastIllness}`)
console.log(`Doença Pregressa na Família: ${user.illnessesFamily}`)
console.log(`Cirurgia: ${user.surgeryPerformed}`)
console.log(`Uso de Medicamento: ${user.useMedication}`)
console.log(`Lesão Desportiva: ${user.sportsInjuries}`)
console.log(`Objetivo do treino: ${user.trainingObjective}`)
console.log(`Dias disponíveis para treinar: ${user.daysAvailableForTraining} dias.`)
console.log(`Tempo disponível para treino: ${user.timeAvailablePerTraining} minutos.`)
headerFunctions.baseboard()
```

Ao executar o programa:

 ```shell
 ===============================
   SISTEMA DE AVALIAÇÃO FÍSICA  
 ===============================
            Anamnese            
 ===============================
 1 - Seu médico já mencionou alguma vez que você tem uma condição cardíaca e que você só deve realizar atividade física recomendada por um médico?
 Escolha:
 [1] Sim
 [2] Não
 2
 2 - Você sente dor no tórax quando realiza atividade física?
 Escolha:
 [1] Sim
 [2] Não
 2
 3 - No mês passado, você teve dor torácica quando não estava realizando atividade física?
 Escolha:
 [1] Sim
 [2] Não
 2
 4 - Você perdeu o equilíbrio por causa de tontura ou alguma vez perdeu a consciência?
 Escolha:
 [1] Sim
 [2] Não
 2
 5 - Você tem algum problema ósseo ou de articulação que poderia piorar em conseqüência de uma alteração em sua atividade física?
 Escolha:
 [1] Sim
 [2] Não
 2
 6 - Seu médico está prescrevendo medicamentos para sua pressão ou condição cardíaca?
 Escolha:
 [1] Sim
 [2] Não
 2
 7 - Você teria alguma razão para não praticar exercício físico ou outro problema que impeça?
 Escolha:
 [1] Sim
 [2] Não
 2
 Qual seu estado físico atualmente? 
 [1] Sedentário
 [2] Ativo
 2
 Avaliado possue doença pregressa?
 Escolha:
 [1] Sim
 [2] Não
 2
 Avaliado possue alguém da família com doença pregressa?
 Escolha:
 [1] Sim
 [2] Não
 1
 Qual doença?
 Avos hipertensos
 Avaliado já realizou precedimento cirúrgico?
 Escolha:
 [1] Sim
 [2] Não
 1
 Qual cirurgia?
 Artroscopia de ombro   
 Avaliado faz uso de medicamentos?
 Escolha:
 [1] Sim
 [2] Não
 2
 Avaliado já sofreu alguma lesão desportiva?
 Escolha:
 [1] Sim
 [2] Não
 2
 Qual é o objetivo do seu treino?
 [1] Estético
 [2] Bem-estar e Saúde
 [3] Terapêutico
 [4] Recreativo
 [5] Desportivo
 5
 Digite a quantidade de dias disponíveis para treinar: 5
 Digite o tempo disponível para treino (min): 60
 ```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Não'!
Estado físico: Ativo
Doença Pregressa: Sem doença pregressa.
Doença Pregressa na Família: Avos hipertensos
Cirurgia: Artroscopia de ombro
Uso de Medicamento: Não faz uso de medicamento.
Lesão Desportiva: Nunca sofreu lesão desportiva.
Objetivo do treino: Desportivo
Dias disponíveis para treinar: 5 dias.
Tempo disponível para treino: 60 minutos.
===============================
```

Arquivo **anamnesisFunctions.js** completo:

```js
/* anamnesisFunctions.js */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const anamnesisFunctions = {

  choice(){

    console.log('Escolha:')
    console.log('[1] Sim')
    console.log('[2] Não')

  },

  questionnairePARQ(){

    let questionnairePARQ = [
      "Seu médico já mencionou alguma vez que você tem uma condição cardíaca e que você só deve realizar atividade física recomendada por um médico?",
      "Você sente dor no tórax quando realiza atividade física?",
      "No mês passado, você teve dor torácica quando não estava realizando atividade física?",
      "Você perdeu o equilíbrio por causa de tontura ou alguma vez perdeu a consciência?",
      "Você tem algum problema ósseo ou de articulação que poderia piorar em conseqüência de uma alteração em sua atividade física?",
      "Seu médico está prescrevendo medicamentos para sua pressão ou condição cardíaca?",
      "Você teria alguma razão para não praticar exercício físico ou outro problema que impeça?",
    ]
    let questionnairePARQAnswer = []
    let itsNumberOneOrTwo = true
    let regexNumber = /^[1]$|^[2]$/

    for(let i = 0; i < questionnairePARQ.length; i++){
      
      do{

        console.log(`${[i+1]} - ${questionnairePARQ[i]}`)
        anamnesisFunctions.choice()
        questionnairePARQAnswer[i] = input.question("")
        itsNumberOneOrTwo = validationFunctions.isRegularExpression(questionnairePARQAnswer[i], regexNumber)
        validationFunctions.incorrectValue(false, !itsNumberOneOrTwo, "Anamnese")

      }while(!itsNumberOneOrTwo)
      
    }
    
    if(questionnairePARQAnswer.includes("1")){
      return "Você deverá realizar um exame médico antes de iniciar suas atividades!"
    } else {
      return "Todas as respostas do questionário foram 'Não'!"
    }

  },

  currentPhysicalState(){

    let currentPhysicalState = 0
    let itsNumberOneOrTwo = true
    const regexNumber = /^[1]$|^[2]$/
    
    do{
  
      console.log('Qual seu estado físico atualmente? ')
      console.log(`[1] Sedentário`)
      console.log(`[2] Ativo`)
      currentPhysicalState = input.question('')
     
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(currentPhysicalState, regexNumber)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, "Anamnese")
  
    }while(!itsNumberOneOrTwo)
  
    return Number(currentPhysicalState)
  
  },
  
  showPhysicalState(user){

    return user.currentPhysicalState === 1 ? 'Sedentário' : 'Ativo'
  
  },

  questions(object){
  
    let answerNumber = 2
    let textAnswer = ''
    let itsNumberOneOrTwo = true
    const regexNumberOneOrTwo = /^[1]$|^[2]$/
    let isAlphanumericCharacters = true
    const regexAlphanumericCharacters = /\D|\d/ 
  
    do{
  
      console.log(object.firstQuestion)
      anamnesisFunctions.choice()
      answerNumber = Number(input.question(''))
  
      itsNumberOneOrTwo = validationFunctions.isRegularExpression(answerNumber, regexNumberOneOrTwo)
      validationFunctions.incorrectValue(!itsNumberOneOrTwo, false, object.title)
  
      if(answerNumber === 1){
        
        do{
  
          console.log(object.secondQuestion)
          textAnswer = input.question('')
          isAlphanumericCharacters = validationFunctions.isRegularExpression(textAnswer, regexAlphanumericCharacters)
          validationFunctions.incorrectValue(false, !isAlphanumericCharacters, object.title)
  
        }while(!isAlphanumericCharacters)
        
      } else {
        textAnswer = object.message
      }
  
    }while(!itsNumberOneOrTwo)
  
      return textAnswer
  
  },

  trainingObjective(){

    let trainingObjectiveAnswer = ''
    let regexNumber = /^[1-5]$/
    let isNumberOneToFive = true
  
    do{
  
      console.log('Qual é o objetivo do seu treino?')
      console.log(`[1] Estético`)
      console.log(`[2] Bem-estar e Saúde`)
      console.log(`[3] Terapêutico`)
      console.log(`[4] Recreativo`)
      console.log(`[5] Desportivo`)
      trainingObjectiveAnswer = Number(input.question(''))
  
      isNumberOneToFive = validationFunctions.isRegularExpression(trainingObjectiveAnswer, regexNumber)
      validationFunctions.incorrectValue(!isNumberOneToFive, false, "Anamnese")
  
    }while(!isNumberOneToFive)
    
    switch (trainingObjectiveAnswer) {
      case 1:
        return `Estético`
        break
      case 2:
        return `Bem-estar e Saúde`
        break
      case 3:
        return `Terapêutico`
        break
      case 4:
        return `Recreativo`  
        break
      default:
        return `Desportivo`
        break
    }
  
  },

  daysAvailableForTraining(){

    let daysAvailableForTraining = 0
    let isNumberOneToSeven = true
    let regexNumber = /^[1-7]$/
    
    do{
   
     daysAvailableForTraining = input.question('Digite a quantidade de dias disponíveis para treinar: ')
   
     isNumberOneToSeven = validationFunctions.isRegularExpression(daysAvailableForTraining, regexNumber)
     validationFunctions.incorrectValue(!isNumberOneToSeven, false, "Anamnese")
   
    }while(!isNumberOneToSeven)
   
    return Number(daysAvailableForTraining)
   
   },

   timeAvailablePerTraining(){

    let timeAvailablePerTraining = 0
    let isNumberFromOneToThreeHundred = true
    let regexNumber = /(^[1-9]$)|(^[1-9][0-9]$)|(^[1-2][0-9]{2}$)|(^[3][0][0]$)/
  
    do{
  
      timeAvailablePerTraining = input.question('Digite o tempo disponível para treino (min): ')
      isNumberFromOneToThreeHundred = validationFunctions.isRegularExpression(timeAvailablePerTraining, regexNumber)
      validationFunctions.incorrectValue(!isNumberFromOneToThreeHundred, false, "Anamnese")
   
    }while(!isNumberFromOneToThreeHundred)
     
  
    return Number(timeAvailablePerTraining)
  
  },

}

const anamnesisQuestions = { pastIllness: {
                                            firstQuestion: `Avaliado possue doença pregressa?`,
                                            title: "Anamnese",
                                            secondQuestion: `Qual doença?`,
                                            message: `Sem doença pregressa.`,
                                          },
                              illnessesInTheFamily: {
                                            firstQuestion: `Avaliado possue alguém da família com doença pregressa?`,
                                            title: "Anamnese",
                                            secondQuestion: `Qual doença?`,
                                            message: `Sem doença pregressa na família.`,
                                          },
                              surgeryPerformed: {
                                            firstQuestion: `Avaliado já realizou precedimento cirúrgico?`,
                                            title: "Anamnese",
                                            secondQuestion: `Qual cirurgia?`,
                                            message: `Nunca realizou procedimento cirúrgico.`,
                                          },
                              useMedication: {
                                            firstQuestion: `Avaliado faz uso de medicamentos?`,
                                            title: "Anamnese",
                                            secondQuestion: `Qual medicamento?`,
                                            message: `Não faz uso de medicamento.`,
                                          },
                              sportsInjuries: {
                                            firstQuestion: `Avaliado já sofreu alguma lesão desportiva?`,
                                            title: "Anamnese",
                                            secondQuestion: `Qual lesão?`,
                                            message: `Nunca sofreu lesão desportiva.`,
                                          },
}

module.exports = {
  anamnesisFunctions, anamnesisQuestions
}
```

Arquivo **saf.js** completo:

```js
/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')
const { anamnesisQuestions } = require('./anamnesisFunctions')

const user = { }

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalDataFunctions
user.name = personalDataFunctions.userName()

user.birthdayInBrazilianFormat =  personalDataFunctions.dateOfBirth()
user.birthdayInISOFormat = personalDataFunctions.dateInISOFormat(user.birthdayInBrazilianFormat)
user.age = personalDataFunctions.age(user)
user.sexNumber = personalDataFunctions.sexNumber()
user.sex = personalDataFunctions.showSex(user)
user.profession = personalDataFunctions.userProfession()
user.userEmail = personalDataFunctions.userEmail()
user.phoneNumber = personalDataFunctions.phoneNumber()

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variables anamnesisFunctions
user.questionnairePARQ = anamnesisFunctions.questionnairePARQ()
user.currentPhysicalState = anamnesisFunctions.currentPhysicalState()
user.pastIllness = anamnesisFunctions.questions(anamnesisQuestions.pastIllness)
user.illnessesFamily = anamnesisFunctions.questions(anamnesisQuestions.illnessesInTheFamily)
user.surgeryPerformed = anamnesisFunctions.questions(anamnesisQuestions.surgeryPerformed)
user.useMedication = anamnesisFunctions.questions(anamnesisQuestions.useMedication)
user.sportsInjuries = anamnesisFunctions.questions(anamnesisQuestions.sportsInjuries)
user.trainingObjective = anamnesisFunctions.trainingObjective()
user.daysAvailableForTraining = anamnesisFunctions.daysAvailableForTraining()
user.timeAvailablePerTraining = anamnesisFunctions.timeAvailablePerTraining()

// show results personalDataFunctions
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${user.name}`)
console.log(`Data de nascimento: ${user.birthdayInBrazilianFormat}`)
console.log(`Idade: ${user.age} anos`)
console.log(`Sexo: ${user.sex}`)
console.log(`Profissão: ${user.profession}`)
console.log(`E-mail: ${user.userEmail}`)
console.log(`Celular: ${user.phoneNumber}`)

// show results anamnesisFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")
console.log(`Questionário PAR-Q: ${user.questionnairePARQ}`)
console.log(`Estado físico: ${anamnesisFunctions.showPhysicalState(user)}`)
console.log(`Doença Pregressa: ${user.pastIllness}`)
console.log(`Doença Pregressa na Família: ${user.illnessesFamily}`)
console.log(`Cirurgia: ${user.surgeryPerformed}`)
console.log(`Uso de Medicamento: ${user.useMedication}`)
console.log(`Lesão Desportiva: ${user.sportsInjuries}`)
console.log(`Objetivo do treino: ${user.trainingObjective}`)
console.log(`Dias disponíveis para treinar: ${user.daysAvailableForTraining} dias.`)
console.log(`Tempo disponível para treino: ${user.timeAvailablePerTraining} minutos.`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Nome: Fulano de Tal
Data de nascimento: 26/09/1986
Idade: 35 anos
Sexo: Masculino
Profissão: Desenvolvedor
E-mail: fulano@tal.com
Celular: 21918273645
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Não'!
Estado físico: Sedentário
Doença Pregressa: Sem doença pregressa.
Doença Pregressa na Família: Avos Diabeticos
Cirurgia: Nunca realizou procedimento cirúrgico.
Uso de Medicamento: Não faz uso de medicamento.
Lesão Desportiva: Nunca sofreu lesão desportiva.
Objetivo do treino: Estético
Dias disponíveis para treinar: 6 dias.
Tempo disponível para treino: 90 minutos.
===============================
```

Chegamos ao fim da parte de **Anamnese**. Agora vamos entrar na próxima etapa, **Cardiorrespiratório**, Let's Go!

## Cardiorrespiratório

Vamos para a próxima etapa onde vamos construir a parte do **Cardiorrespiratório**. Para isto vamos criar o arquivo **cardiorespiratoryFunctions.js**. Dentro deste arquivo vamos:

- Criar a variável **input**;
- Requerer a variável **validationFunctions**;
- Criar uma variável objeto **cardiorespiratoryFunctions**;
- Exportar essa variável.

```js
/* cardiorespiratory functions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const cardiorespiratoryFunctions = {

}

module.exports = {
    cardiorespiratoryFunctions
}
```

No arquivo **saf.js** vamos fazer a requisição do arquivo **cardiorespiratory.js**:

```js
/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')
const { anamnesisQuestions } = require('./anamnesisFunctions')
const { cardiorespiratoryFunctions } = require('./cardiorespiratoryFunctions')
```

Vamos comentar as partes de **personalDataFunctions** e **anamnesisFunctions** no arquivo **saf.js** e começar a desenvolver a parte de **cardiorespiratoryFunctions**.

### Frequência Cardíaca de Repouso

Agora vamos criar a function **restingHeartRate( )** que vai determinar a **Frequência Cardíaca de Repouso** do usuário. Esta function aceitará apenas números de 0 a 200. Qualquer valor diferente disso, a function **incorrectValue( )** deverá ser chamada e o usuário deve digitar um número válido. Sendo assim, em **cardiorespiratoryFunctions.js**:

```js
restingHeartRate(){

        let restingHeartRate = 0
        let isANumberFromZeroToTwoHundredAndTwenty = true
        let regexNumber = /(^[0-9]$)|(^[1-9][0-9]$)|(^[1][0-9]{2}$)|(^[2][0][0]$)/
      
        do{
      
          restingHeartRate = input.question('Digite a Frequência Cardíaca de Repouso (bpm): ')
          isANumberFromZeroToTwoHundredAndTwenty = validationFunctions.isRegularExpression(restingHeartRate, regexNumber)
          validationFunctions.incorrectValue(!isANumberFromZeroToTwoHundredAndTwenty, false, "Cardiorrespiratório")
       
        }while(!isANumberFromZeroToTwoHundredAndTwenty)
         
        return Number(restingHeartRate)
      
    },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **restingHeartRate** que recebe como valor o retorno da function **restingHeartRate( )** e depois vamos mostrar o resultado;

```js
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Cardiorrespiratório")

// variables cardiorespiratoryFunctions
user.restingHeartRate = cardiorespiratoryFunctions.restingHeartRate()
```

```js
// show results cardiorespiratoryFunctions
console.clear() //temporay
headerFunctions.systemHeader()
headerFunctions.subTitle("Cardiorespiratório")
console.log(`Frequência Cardíaca de Repouso: ${user.restingHeartRate} bpm.`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Cardiorrespiratório            
===============================
Digite a Frequência Cardíaca de Repouso (bpm): 60
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Cardiorespiratório            
===============================
Frequência Cardíaca de Repouso: 60 bpm.
===============================
```

### Frequência Cardíaca Máxima

Agora vamos criar a function **maximumHeartRate( )** que vai determinar a frequência cardíaca máxima do usuário a partir da **idade** do mesmo. Esta function recebe como parâmetro o objeto _**user**_ e retorna a frequência cardíaca máxima calculada pela fórmula Karvonen (1957) **FCM = 220 - IDADE**. Logo em **cardiorespiratoryFunctions.js**:

```js
maximumHeartRate(userObject){

        return Number(220 - userObject.age)
      
    },
```

 Em **saf.js** vamos adicionar a propriedade **age** ao objeto _**user**_, pelo menos por enquanto, para executar esta parte do **cardiorrespiratório** e depois vamos adicionar ao objeto _**user**_ a propriedade **maximumHeartRate** que recebe como valor o retorno da function **maximumHeartRate( )** e depois mostramos o resultado. Lembre de passar o objeto _**user**_ como parâmetro nesta function:

```js
const user = { }
user.age = 34 // temporary
```

```js
headerFunctions.systemHeader()
headerFunctions.subTitle("Cardiorrespiratório")

// variables cardiorespiratoryFunctions
user.restingHeartRate = cardiorespiratoryFunctions.restingHeartRate()
user.maximumHeartRate = cardiorespiratoryFunctions.maximumHeartRate(user)
```

```js
// show results cardiorespiratoryFunctions
console.clear() //temporay
headerFunctions.systemHeader()
headerFunctions.subTitle("Cardiorespiratório")
console.log(`Frequência Cardíaca de Repouso: ${user.restingHeartRate} bpm.`)
console.log(`Frequência Cardíaca Máxima: ${user.maximumHeartRate} bpm.`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Cardiorrespiratório            
===============================
Digite a Frequência Cardíaca de Repouso (bpm): 60
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Cardiorespiratório            
===============================
Frequência Cardíaca de Repouso: 60 bpm.
Frequência Cardíaca Máxima: 186 bpm.
===============================
```

### Frequência Cardíaca de trabalho

Antes de começar esta function, vamos criar uma variável do tipo _**array**_ que vai receber os valores dos percentuais, para utilizarmos nesta function e em outras mais a frente. Logo, em **cardiorespiratoryFunctions.js**:

```js
const percentageValues = [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95]
```

Faça também a exportacão dessa variável:

```js
module.exports = {
    cardiorespiratoryFunctions, percentageValues
}
```

Em **saf.js**, vamos requerer esta variável e atribuir como propriedade no objeto _**user**_:

```js
/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')
const { anamnesisQuestions } = require('./anamnesisFunctions')
const { cardiorespiratoryFunctions } = require('./cardiorespiratoryFunctions')
const { percentageValues } = require('./cardiorespiratoryFunctions')
```

```js
// variables cardiorespiratoryFunctions
user.restingHeartRate = cardiorespiratoryFunctions.restingHeartRate()
user.maximumHeartRate = cardiorespiratoryFunctions.maximumHeartRate(user)
user.percentageValues = percentageValues
```

Agora vamos criar a function **workingHeartRate( )** que vai calcular a **Frequência Cardíaca de Treino** de acordo com os **percentuais**. Esta function terá como parâmetro o objeto _**user**_, sendo usado oos **percentuais**,  a **Frequência Cardíaca de Repouso** (**restingHeartRate**) e a **Frequência Cardíaca Máxima** (**maximumHeartRate**). Para os cálculos, vamos usar a fórmula: 

Frequência Cardíaca de Treino = ((( Frequência Cardíaca Máxima - Frequência Cardíaca de Repouso) * Percentual Desejado) + Frequência Cardíaca de Repouso)

Esta function retorna os valores da **Frequência Cardíaca de Treino** em um _**array**_ (**workingHeartRateValues**). Logo, em **cardiorespiratoryFunctions.js**:

```js
workingHeartRate(userObject){

      let restingHeartRate = userObject.restingHeartRate
      let maximumHeartRate = userObject.maximumHeartRate
      let workingHeartRateValues = []
    
      for(let percentage of userObject.percentageValues){
        workingHeartRateValues.push(Math.round(((( maximumHeartRate - restingHeartRate )* (percentage / 100) ) + restingHeartRate)))
      }
    
      return workingHeartRateValues
    },
```

Em **saf.js** atrobuímos ao objeto _**user**_ a propriedade **workingHeartRate** recebendo como valor o retorno da function **workingHeartRate( )** e passando como parâmetro o objeto _**user**_:

```js
// variables cardiorespiratoryFunctions
user.restingHeartRate = cardiorespiratoryFunctions.restingHeartRate()
user.maximumHeartRate = cardiorespiratoryFunctions.maximumHeartRate(user)
user.percentageValues = percentageValues
user.workingHeartRate = cardiorespiratoryFunctions.workingHeartRate(user)
```

Para mostrar os resultados, vamos criar a function **showWorkingHeartRate( )** que recebe como parâmetro o objeto _**user**_ e exibe os valores da **Frequência Cardíaca de Treino**. Logo, em **cardiorespiratoryFunctions.js**:

```js
showWorkingHeartRate(userObject){
  
      let percentage = userObject.percentageValues
      let workingHeartRate = userObject.workingHeartRate
    
      console.log(`Frequência Cardíaca de Treino:`)
      for(let i = 0; i < workingHeartRate.length; i++){
        console.log(`       ${percentage[i]}% = ${workingHeartRate[i]} bpm`)
      }
    
    },
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Cardiorespiratório            
===============================
Frequência Cardíaca de Repouso: 60 bpm.
Frequência Cardíaca Máxima: 186 bpm.
Frequência Cardíaca de Treino:
       40% = 110 bpm
       45% = 117 bpm
       50% = 123 bpm
       55% = 129 bpm
       60% = 136 bpm
       65% = 142 bpm
       70% = 148 bpm
       75% = 155 bpm
       80% = 161 bpm
       85% = 167 bpm
       90% = 173 bpm
       95% = 180 bpm
===============================
```

### Pressão Arterial de Repouso (mmHg)

Agora vamos criar a function **bloodPressure( )** que vai determinar a **Pressão Arterial de Repouso em mmHg**. Está function pedirá para o usuário digitar a **pressão arterial** (**sistólica / diastólica**). O formato aceito é até três dígitos para a sitólica, uma barra e até mais três dígitos, sendo o valor de 0 até 300. Caso qualquer valor diferente disso seja digitado ou fique vazio a function **incorrectValue( )** deverá ser chamada e o usuário deverá o valor novamente. A function retorna um objeto _**fullBloodPressure**_ com os valores da pressão **sistólica** e **diastólica** e o **formato completo** em **string**. Logo, em **cardiorespiratoryFunctions.js**:

```js
bloodPressure(){

      let fullBloodPressure = { }
      let bloodPressure = 0
      const regexBloodPressure = /^(([0-9])|([1-9][0-9])|([1-2][0-9]{2})|([3][0][0]))\/(([0-9])|([1-9][0-9])|([1-2][0-9]{2})|([3][0][0]))$/
      let itsRegexBloodPressure = true
    
      do{
    
        bloodPressure = input.question('Digite a pressão arterial [000/000] (mmHg): ')
        itsRegexBloodPressure = validationFunctions.isRegularExpression(bloodPressure, regexBloodPressure)
        validationFunctions.incorrectValue(false, !itsRegexBloodPressure, "Cardiorrespiratório")
    
      }while(!itsRegexBloodPressure)
    
      fullBloodPressure.systolic = Number(bloodPressure.substring(0, bloodPressure.indexOf("/")))
      fullBloodPressure.diastolic = Number(bloodPressure.substring(bloodPressure.indexOf("/")+ 1, bloodPressure.length))
      fullBloodPressure.bloodPressureString = bloodPressure
    
       return fullBloodPressure
    
    },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **restingBloodPressure** que receberá o retorno da function **restingBloodPressure( )** como valor e depois vamos mostrar o valor da **Pressão Arterial de Repouso**:

```js
// variables cardiorespiratoryFunctions
user.restingHeartRate = cardiorespiratoryFunctions.restingHeartRate()
user.maximumHeartRate = cardiorespiratoryFunctions.maximumHeartRate(user)
user.percentageValues = percentageValues
user.workingHeartRate = cardiorespiratoryFunctions.workingHeartRate(user)
user.restingBloodPressure = cardiorespiratoryFunctions.bloodPressure()
```

```js
// show results cardiorespiratoryFunctions
console.clear() //temporay
headerFunctions.systemHeader()
headerFunctions.subTitle("Cardiorespiratório")
console.log(`Frequência Cardíaca de Repouso: ${user.restingHeartRate} bpm.`)
console.log(`Frequência Cardíaca Máxima: ${user.maximumHeartRate} bpm.`)
cardiorespiratoryFunctions.showWorkingHeartRate(user)
console.log(`Pressão Arterial de Repouso: ${user.restingBloodPressure.bloodPressureString} mmHg.`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Cardiorrespiratório            
===============================
Digite a Frequência Cardíaca de Repouso (bpm): 60
Digite a pressão arterial [000/000] (mmHg): 120/80
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Cardiorespiratório            
===============================
Frequência Cardíaca de Repouso: 60 bpm.
Frequência Cardíaca Máxima: 186 bpm.
Frequência Cardíaca de Treino:
       40% = 110 bpm
       45% = 117 bpm
       50% = 123 bpm
       55% = 129 bpm
       60% = 136 bpm
       65% = 142 bpm
       70% = 148 bpm
       75% = 155 bpm
       80% = 161 bpm
       85% = 167 bpm
       90% = 173 bpm
       95% = 180 bpm
Pressão Arterial de Repouso: 120/80 mmHg.
===============================
```

### Pressão Arterial - Classificação 

Agora vamos criar a function **classificationOfBloodPressure( )** que vai retornar a classificação da pressão arterial. Esta function recebe como parâmetro o objeto _**user**_ e retorna a classificação de acordo com a tabela abaixo:

| Pressão Arterial Sistólica - Classificação                 | Pressão Arterial Diastólica - Classificação                 |
| ---------------------------------------------------------- | :---------------------------------------------------------- |
| Pressão Arterial Sistólica < 120 = "Ótima"                 | Pressão Arterial Diastólica < 80 = "Ótima"                  |
| Pressão Arterial Sistólica < 130 = "Normal"                | Pressão Arterial Diastólica < 85 = "Normal"                 |
| Pressão Arterial Sistólica < 140 = "Limítrofe"             | Pressão Arterial Diastólica < 90 = "Limítrofe"              |
| Pressão Arterial Sistólica < 160 = "Hipertensão Estágio 1" | Pressão Arterial Diastólica < 100 = "Hipertensão Estágio 1" |
| Pressão Arterial Sistólica < 180 = "Hipertensão Estágio 2" | Pressão Arterial Diastólica < 110 = "Hipertensão Estágio 2" |
| Pressão Arterial Sistólica > 179 = "Hipertensão Estágio 3" | Pressão Arterial Diastólica < 300 = "Hipertensão Estágio 3" |

O retorno desta function também será um objeto. Logo, em **cardiorespiratoryFunctions.js**:

```js
classificationOfBloodPressure(objectValue){

      let classification = { }
      const systolic = objectValue.restingBloodPressure.systolic
      const diastolic = objectValue.restingBloodPressure.diastolic
    
      /* Systolic Classification */
      const greatSystolic = systolic < 120
      const normalSystolic = systolic < 130
      const borderlineSystolic = systolic < 140
      const systolicHypertensionStageOne = systolic < 160
      const systolicHypertensionStageTwo = systolic < 180
    
      if(greatSystolic){
        classification.systolicClassification = 'Ótima'
      } else if(normalSystolic){
        classification.systolicClassification = 'Normal'
      } else if(borderlineSystolic){
        classification.systolicClassification = 'Limítrofe'
      } else if(systolicHypertensionStageOne){
        classification.systolicClassification = 'Hipertensão Estágio 1'
      } else if(systolicHypertensionStageTwo){
        classification.systolicClassification = 'Hipertensão Estágio 2'
      } else{
        classification.systolicClassification = 'Hipertensão Estágio 3'
      }
    
      /* Diastolic Classification */
      const greatDiastolic = diastolic < 80
      const normalDiastolic = diastolic < 85
      const borderlineDiastolic = diastolic < 90
      const diastolicHypertensionStageOne = diastolic < 100
      const diastolicHypertensionStageTwo = diastolic < 110
      
      if(greatDiastolic){
        classification.diastolicClassification = 'Ótima'
      } else if(normalDiastolic){
        classification.diastolicClassification = 'Normal'
      } else if(borderlineDiastolic){
        classification.diastolicClassification = 'Limítrofe'
      } else if(diastolicHypertensionStageOne){
        classification.diastolicClassification = 'Hipertensão Estágio 1'
      } else if(diastolicHypertensionStageTwo){
        classification.diastolicClassification = 'Hipertensão Estágio 2'
      } else{
        classification.diastolicClassification = 'Hipertensão Estágio 3'
      }
    
      return classification
    
    },
```

Em **saf.js** atribuímos ao objeto _**user**_ a propriedade **classificationBloodPressure** que recebe como valor o retorno da function **classificationOfBloodPressure( )** passando o objeto _**user**_ como parâmetro. Depois mostramos os resultados:

```js
// variables cardiorespiratoryFunctions
user.restingHeartRate = cardiorespiratoryFunctions.restingHeartRate()
user.maximumHeartRate = cardiorespiratoryFunctions.maximumHeartRate(user)
user.percentageValues = percentageValues
user.workingHeartRate = cardiorespiratoryFunctions.workingHeartRate(user)
user.restingBloodPressure = cardiorespiratoryFunctions.bloodPressure()
user.classificationBloodPressure = cardiorespiratoryFunctions.classificationOfBloodPressure(user)
```

```js
// show results cardiorespiratoryFunctions
console.clear() //temporay
headerFunctions.systemHeader()
headerFunctions.subTitle("Cardiorespiratório")
console.log(`Frequência Cardíaca de Repouso: ${user.restingHeartRate} bpm.`)
console.log(`Frequência Cardíaca Máxima: ${user.maximumHeartRate} bpm.`)
cardiorespiratoryFunctions.showWorkingHeartRate(user)
console.log(`Pressão Arterial de Repouso: ${user.restingBloodPressure.bloodPressureString} mmHg.`)
console.log(`Classificação da Pressão Arterial`)
console.log(`Sistólica: ${user.classificationBloodPressure.systolicClassification} / Diastólica: ${user.classificationBloodPressure.diastolicClassification}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Cardiorrespiratório            
===============================
Digite a Frequência Cardíaca de Repouso (bpm): 60
Digite a pressão arterial [000/000] (mmHg): 120/80
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Cardiorespiratório            
===============================
Frequência Cardíaca de Repouso: 60 bpm.
Frequência Cardíaca Máxima: 186 bpm.
Frequência Cardíaca de Treino:
       40% = 110 bpm
       45% = 117 bpm
       50% = 123 bpm
       55% = 129 bpm
       60% = 136 bpm
       65% = 142 bpm
       70% = 148 bpm
       75% = 155 bpm
       80% = 161 bpm
       85% = 167 bpm
       90% = 173 bpm
       95% = 180 bpm
Pressão Arterial de Repouso: 120/80 mmHg.
Classificação da Pressão Arterial
Sistólica: Normal / Diastólica: Normal
===============================
```

Com isto chega ao final a parte **Cardiorrespiratório** do projeto. Como ficaram os arquivos do programa até esta etapa:

Arquivo **cardiorespiratoryFunctions.js** completo:

```js
/* cardiorespiratory functions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const cardiorespiratoryFunctions = {
    
    restingHeartRate(){

        let restingHeartRate = 0
        let isANumberFromZeroToTwoHundredAndTwenty = true
        let regexNumber = /(^[0-9]$)|(^[1-9][0-9]$)|(^[1][0-9]{2}$)|(^[2][0][0]$)/
      
        do{
      
          restingHeartRate = input.question('Digite a Frequência Cardíaca de Repouso (bpm): ')
          isANumberFromZeroToTwoHundredAndTwenty = validationFunctions.isRegularExpression(restingHeartRate, regexNumber)
          validationFunctions.incorrectValue(!isANumberFromZeroToTwoHundredAndTwenty, false, "Cardiorrespiratório")
       
        }while(!isANumberFromZeroToTwoHundredAndTwenty)
         
        return Number(restingHeartRate)
      
    },

    maximumHeartRate(userObject){

        return Number(220 - userObject.age)
      
    },

    workingHeartRate(userObject){

      let restingHeartRate = userObject.restingHeartRate
      let maximumHeartRate = userObject.maximumHeartRate
      let workingHeartRateValues = []
    
      for(let percentage of userObject.percentageValues){
        workingHeartRateValues.push(Math.round(((( maximumHeartRate - restingHeartRate )* (percentage / 100) ) + restingHeartRate)))
      }
    
      return workingHeartRateValues
    },

    showWorkingHeartRate(userObject){
  
      let percentage = userObject.percentageValues
      let workingHeartRate = userObject.workingHeartRate
    
      console.log(`Frequência Cardíaca de Treino:`)
      for(let i = 0; i < workingHeartRate.length; i++){
        console.log(`       ${percentage[i]}% = ${workingHeartRate[i]} bpm`)
      }
    
    },

    bloodPressure(){

      let fullBloodPressure = { }
      let bloodPressure = 0
      const regexBloodPressure = /^(([0-9])|([1-9][0-9])|([1-2][0-9]{2})|([3][0][0]))\/(([0-9])|([1-9][0-9])|([1-2][0-9]{2})|([3][0][0]))$/
      let itsRegexBloodPressure = true
    
      do{
    
        bloodPressure = input.question('Digite a pressão arterial [000/000] (mmHg): ')
        itsRegexBloodPressure = validationFunctions.isRegularExpression(bloodPressure, regexBloodPressure)
        validationFunctions.incorrectValue(false, !itsRegexBloodPressure, "Cardiorrespiratório")
    
      }while(!itsRegexBloodPressure)
    
      fullBloodPressure.systolic = Number(bloodPressure.substring(0, bloodPressure.indexOf("/")))
      fullBloodPressure.diastolic = Number(bloodPressure.substring(bloodPressure.indexOf("/")+ 1, bloodPressure.length))
      fullBloodPressure.bloodPressureString = bloodPressure
    
       return fullBloodPressure
    
    },

    classificationOfBloodPressure(objectValue){

      let classification = { }
      const systolic = objectValue.restingBloodPressure.systolic
      const diastolic = objectValue.restingBloodPressure.diastolic
    
      /* Systolic Classification */
      const greatSystolic = systolic < 120
      const normalSystolic = systolic < 130
      const borderlineSystolic = systolic < 140
      const systolicHypertensionStageOne = systolic < 160
      const systolicHypertensionStageTwo = systolic < 180
    
      if(greatSystolic){
        classification.systolicClassification = 'Ótima'
      } else if(normalSystolic){
        classification.systolicClassification = 'Normal'
      } else if(borderlineSystolic){
        classification.systolicClassification = 'Limítrofe'
      } else if(systolicHypertensionStageOne){
        classification.systolicClassification = 'Hipertensão Estágio 1'
      } else if(systolicHypertensionStageTwo){
        classification.systolicClassification = 'Hipertensão Estágio 2'
      } else{
        classification.systolicClassification = 'Hipertensão Estágio 3'
      }
    
      /* Diastolic Classification */
      const greatDiastolic = diastolic < 80
      const normalDiastolic = diastolic < 85
      const borderlineDiastolic = diastolic < 90
      const diastolicHypertensionStageOne = diastolic < 100
      const diastolicHypertensionStageTwo = diastolic < 110
      
      if(greatDiastolic){
        classification.diastolicClassification = 'Ótima'
      } else if(normalDiastolic){
        classification.diastolicClassification = 'Normal'
      } else if(borderlineDiastolic){
        classification.diastolicClassification = 'Limítrofe'
      } else if(diastolicHypertensionStageOne){
        classification.diastolicClassification = 'Hipertensão Estágio 1'
      } else if(diastolicHypertensionStageTwo){
        classification.diastolicClassification = 'Hipertensão Estágio 2'
      } else{
        classification.diastolicClassification = 'Hipertensão Estágio 3'
      }
    
      return classification
    
    },

}

const percentageValues = [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95]

module.exports = {
    cardiorespiratoryFunctions, percentageValues
}
```

Arquivo **saf.js** completo:

```js
/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')
const { anamnesisQuestions } = require('./anamnesisFunctions')
const { cardiorespiratoryFunctions } = require('./cardiorespiratoryFunctions')
const { percentageValues } = require('./cardiorespiratoryFunctions')

const user = { }

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalDataFunctions
user.name = personalDataFunctions.userName()
user.birthdayInBrazilianFormat =  personalDataFunctions.dateOfBirth()
user.birthdayInFullFormat = personalDataFunctions.dateInFullFormat(user.birthdayInBrazilianFormat)
user.age = personalDataFunctions.age(user)
user.sexNumber = personalDataFunctions.sexNumber()
user.sex = personalDataFunctions.showSex(user)
user.profession = personalDataFunctions.userProfession()
user.userEmail = personalDataFunctions.userEmail()
user.phoneNumber = personalDataFunctions.phoneNumber()

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variables anamnesisFunctions
user.questionnairePARQ = anamnesisFunctions.questionnairePARQ()
user.currentPhysicalState = anamnesisFunctions.currentPhysicalState()
user.pastIllness = anamnesisFunctions.questions(anamnesisQuestions.pastIllness)
user.illnessesFamily = anamnesisFunctions.questions(anamnesisQuestions.illnessesInTheFamily)
user.surgeryPerformed = anamnesisFunctions.questions(anamnesisQuestions.surgeryPerformed)
user.useMedication = anamnesisFunctions.questions(anamnesisQuestions.useMedication)
user.sportsInjuries = anamnesisFunctions.questions(anamnesisQuestions.sportsInjuries)
user.trainingObjective = anamnesisFunctions.trainingObjective()
user.daysAvailableForTraining = anamnesisFunctions.daysAvailableForTraining()
user.timeAvailablePerTraining = anamnesisFunctions.timeAvailablePerTraining()

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Cardiorrespiratório")

// variables cardiorespiratoryFunctions
user.restingHeartRate = cardiorespiratoryFunctions.restingHeartRate()
user.maximumHeartRate = cardiorespiratoryFunctions.maximumHeartRate(user)
user.percentageValues = percentageValues
user.workingHeartRate = cardiorespiratoryFunctions.workingHeartRate(user)
user.restingBloodPressure = cardiorespiratoryFunctions.bloodPressure()
user.classificationBloodPressure = cardiorespiratoryFunctions.classificationOfBloodPressure(user)
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Nome: Fulano Cicrano
Data de nascimento: 04/12/1994
Idade: 27 anos
Sexo: Masculino
Profissão: Médico
E-mail: fulano@cicrano.com
Celular: 17981726354
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Não'!
Estado físico: Sedentário
Doença Pregressa: Sem doença pregressa.
Doença Pregressa na Família: Avos hipertensos
Cirurgia: Nunca realizou procedimento cirúrgico.
Uso de Medicamento: Não faz uso de medicamento.
Lesão Desportiva: Nunca sofreu lesão desportiva.
Objetivo do treino: Terapêutico
Dias disponíveis para treinar: 4 dias.
Tempo disponível para treino: 45 minutos.
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Cardiorespiratório            
===============================
Frequência Cardíaca de Repouso: 60 bpm.
Frequência Cardíaca Máxima: 193 bpm.
Frequência Cardíaca de Treino:
       40% = 113 bpm
       45% = 120 bpm
       50% = 127 bpm
       55% = 133 bpm
       60% = 140 bpm
       65% = 146 bpm
       70% = 153 bpm
       75% = 160 bpm
       80% = 166 bpm
       85% = 173 bpm
       90% = 180 bpm
       95% = 186 bpm
Pressão Arterial de Repouso: 120/80 mmHg.
Classificação da Pressão Arterial
Sistólica: Normal / Diastólica: Normal
===============================
```

Chegamos ao fim da parte de **Cardiorrespiratório**. Agora vamos entrar na próxima etapa, **Antropometria**, Let's Go!

## Antropometria

Vamos para a próxima etapa, onde vamos construir a parte de **Antropometria**. Para isto vamos criar o arquivo **anthropometryFunctions.js**. Dentro deste arquivo vamos:

- Criar a variável **input**;
- Requerer o arquivo **validationFunctions.js**;
- Criar uma variável objeto **anthropometryFunctions**;
- Exportar essa variável.

```js
/* anthropometryFunctions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const anthropometryFunctions = {


}

module.exports = {
  anthropometryFunctions
}
```

No arquivo **saf.js** vamos fazer a requisição do arquivo **anthropometryFunctions.js**:

```js
/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')
const { anamnesisQuestions } = require('./anamnesisFunctions')
const { cardiorespiratoryFunctions } = require('./cardiorespiratoryFunctions')
const { percentageValues } = require('./cardiorespiratoryFunctions')
const { anthropometryFunctions } = require('./anthropometryFunctions')
```

### Peso Corporal

Agora vamos criar a function **bodyWeight( )** que vai solicitar do usuário o seu peso corporal. Esta function só poderá aceitar números (inteiro/real), com uma casa decimal. Então, vamos fazer com que ela aceite de **0.0** até **1000.0** usando expressões regulares. Caso o usuário digite qualquer coisa diferente disso, a function **incorrectValue( )** deverá ser chamada e o usuário deverá colocar um valor de peso correto. Com o usuário inserindo o valor correto, a function retorna o valor do peso corporal inserido pelo usuário. Logo, em **anthropometryFunctions.js**:

```js
bodyWeight(){

    let bodyWeight = 0
    let itsRegexNumber = true
    let regexFromZeroToThousand = /(^[0-9]\.[0-9]$)|(^[1-9][0-9]\.[0-9]$)|(^[1-9][0-9]{2}\.[0-9]$)|(^[1][0]{3}\.[0]$)|(^[0-9]$)|(^[1-9][0-9]$)|(^[1-9][0-9]{2}$)|(^[1][0]{3}$)/
  
    do{
  
      bodyWeight = input.question('Digite seu peso [0000.0](kg): ')
      itsRegexNumber = validationFunctions.isRegularExpression(bodyWeight, regexFromZeroToThousand)
      validationFunctions.incorrectValue(false, !itsRegexNumber, "Antropometria")
  
    }while(!itsRegexNumber)
  
    return Number(bodyWeight)
    
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **bodyWeight** que receberá como valor o retorno da function **bodyWeight( )**, em seguinda mostramos o resultado:

```js
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")

// variables anthropometryFunctions
user.bodyWeight = anthropometryFunctions.bodyWeight()
```

```js
// show results anthropometryFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")
console.log(`Peso Corporal: ${user.bodyWeight} kilos`)
headerFunctions.baseboard()
```

Para executar, vamos comentar as outras partes, deixando apenas **variables anthropometryFunctions** e **show results anthropometryFunctions** ativos, logo:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Digite seu peso [0000.0](kg): 94.3
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 94.3 kilos
===============================
```

### Estatura

Agora vamos criar a function **stature( )** que vai solicitar do usuário a sua estatura corporal. Esta function só poderá aceitar números com duas casas decimais. Então, vamos fazer com que ela aceite de **0.00** até **9.99** usando expressões regulares. Caso o usuário digite qualquer coisa diferente disso, a function **incorrectValue( )** deverá ser chamada e o usuário deverá colocar um valor de estatura correto. Com o usuário inserindo o valor correto, a function retorna o valor da estatura corporal inserida pelo usuário. Logo, em **anthropometryFunctions.js**:

```js
stature(){

    let bodyStature = 0
    let itsRegexNumber = true
    let regexZeroToNinePointNinetyNine = /(^[0-9]\.([0-9]){2}$)/
  
    do{
  
      bodyStature =input.question('Digite sua estatura [0.00](m): ')
      itsRegexNumber = validationFunctions.isRegularExpression(bodyStature, regexZeroToNinePointNinetyNine)
      validationFunctions.incorrectValue(false, !itsRegexNumber, "Antropometria")
  
    }while(!itsRegexNumber)
    
    return Number(bodyStature)
  
  },
```

Em **saf.js** vamos inserir no objeto _**user**_ a propriedade **bodyStature** que receberá como valor o retorno da function **stature( )**, em seguinda mostramos o resultado:

```js
// variables anthropometryFunctions
user.bodyWeight = anthropometryFunctions.bodyWeight()
user.bodyStature = anthropometryFunctions.stature()
```

```js
// show results anthropometryFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")
console.log(`Peso Corporal: ${user.bodyWeight} kilos`)
console.log(`Estatura Corporal: ${user.bodyStature} metros`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Digite seu peso [0000.0](kg): 94.4
Digite sua estatura [0.00](m): 1.86
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 94.4 kilos
Estatura Corporal: 1.86 metros
===============================
```

### Índice de Massa Corporal - IMC

Function **bodyMassIndex( )** que vai determinar o **Índice de Massa Corporal - IMC** do usuário. Esta function recebe o objeto _**user**_ como parâmetro e retorna o **IMC** com duas casa decimais. A fórmula para determinar o IMC é ` IMC = (peso / (estatura * estatura))`. Logo, em **anthropometryFunctions.js**:

```js
bodyMassIndex(objectValue){

    const weight = objectValue.bodyWeight
    const height = objectValue.bodyStature
    // IMC = peso / estatura * estatura
    return Number((weight / (height * height)).toFixed(2))
  
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **bodyMassIndex** que vai receber como valor o retorno da function **bodyMassIndex( )** passando como parâmetro o objeto _**user**_:

```js
// variables anthropometryFunctions
user.bodyWeight = anthropometryFunctions.bodyWeight()
user.bodyStature = anthropometryFunctions.stature()
user.bodyMassIndex = anthropometryFunctions.bodyMassIndex(user)
```

```js
// show results anthropometryFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")
console.log(`Peso Corporal: ${user.bodyWeight} kilos`)
console.log(`Estatura Corporal: ${user.bodyStature} metros`)
console.log(`Índice de Massa Corporal - IMC: ${user.bodyMassIndex}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Digite seu peso [0000.0](kg): 95
Digite sua estatura [0.00](m): 1.86
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 95 kilos
Estatura Corporal: 1.86 metros
Índice de Massa Corporal - IMC: 27.46
===============================
```

### Índice de Massa Corporal - IMC - Classificação

Agora vamos criar a function **bodyMassIndexClassification( )** que vai retornar a **classificação do IMC**. Esta function recebe como parâmetro o objeto _**user**_. Em seguida retorna a classificação de acordo com a tabela abaixo:

| Índice de Massa Corporal - IMC - Classificação |
| :--------------------------------------------: |
|          IMC < 17 = "Magreza Grau 2"           |
|         IMC < 18,5 = "Abaixo do peso"          |
|            IMC < 25 = "Peso Normal"            |
|             IMC < 30 = "Sobrepeso"             |
|         IMC < 35 = "Obesidade nível 1"         |
|         IMC < 40 = "Obesidade nível 2"         |
|         IMC > 40 = "Obesidade Morbida"         |

Em **anthropometryFunctions.js**:

```js
bodyMassIndexClassification(objectValue){

    const bodyMassIndexValue = objectValue.bodyMassIndex
    let classification = ``
    const gradeTwoThinness = bodyMassIndexValue < 17
    const underWeight = bodyMassIndexValue < 18.5
    const normalWeight = bodyMassIndexValue < 25
    const overweight = bodyMassIndexValue < 30
    const levelOneObesity = bodyMassIndexValue < 35
    const levelTwoObesity = bodyMassIndexValue < 40
  
    if(gradeTwoThinness){
      classification = `Magreza Grau 2`
    } else if(underWeight){
      classification = `Abaixo do peso`
    } else if(normalWeight){
      classification = `Peso Normal`
    } else if(overweight){
      classification = `Sobrepeso`
    } else if(levelOneObesity){
      classification = `Obesidade nível 1`
    } else if(levelTwoObesity){
      classification = `Obesidade nível 2`
    } else{
      classification = `Obesidade Morbida`
    }
  
    return classification
  
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **bodyMassIndexClassification** que recebe como valor o retorno da function **bodyMassIndexClassification( )**. Devemos passar como parâmetro o objeto _**user**_ na function **bodyMassIndexClassification( )**. Depois vamos mostrar o resultado:

```js
// variables anthropometryFunctions
user.bodyWeight = anthropometryFunctions.bodyWeight()
user.bodyStature = anthropometryFunctions.stature()
user.bodyMassIndex = anthropometryFunctions.bodyMassIndex(user)
user.bodyMassIndexClassification = anthropometryFunctions.bodyMassIndexClassification(user)
```

```js
// show results anthropometryFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")
console.log(`Peso Corporal: ${user.bodyWeight} kilos`)
console.log(`Estatura Corporal: ${user.bodyStature} metros`)
console.log(`Índice de Massa Corporal - IMC: ${user.bodyMassIndex}`)
console.log(`Classificação IMC: ${user.bodyMassIndexClassification}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Digite seu peso [0000.0](kg): 95
Digite sua estatura [0.00](m): 1.86
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 95 kilos
Estatura Corporal: 1.86 metros
Índice de Massa Corporal - IMC: 27.46
Classificação IMC: Sobrepeso
===============================
```

### Perimetria

Function **bodyPerimetry( )** vai solicitar para o usuário digitar as medidas perimétricas de algumas partes do seu corpo em centímetros, como: **Braço**, **Antebraço**, **Cintura**, **Quadril**, **Coxa** e **Panturrilha**. Esta function só poderá aceitar números (inteiro/real), com uma casa decimal. Então, vamos fazer com que ela aceite de **0.0** até **1000.0** usando expressões regulares. Caso seja digitado algum valor diferente disso, a function **incorrectValue( )** deverá ser chamada e o usuário deverá digitar o valor correto. Esta function terá como retorno um objeto (_**measurementPoints**_) contendo como propriedades as partes do corpo listada acima e seus respectivos valores. Logo em **anthropometryFunctions.js**:

```js
bodyPerimetry(){

    let measurementPoints = {
      Braço: 0,
      Antebraço: 0,
      Cintura: 0,
      Quadril: 0,
      Coxa: 0,
      Panturrilha: 0
    } 
    let itsRegexNumber = true
    const regexFromZeroToThousand = /(^[0-9]\.[0-9]$)|(^[1-9][0-9]\.[0-9]$)|(^[1-9][0-9]{2}\.[0-9]$)|(^[1][0]{3}$)|(^[0-9]$)|(^[1-9][0-9]$)|(^[1-9][0-9]{2}$)|(^[1][0]{3}$)/
  
    console.log(` - Perimetria Corporal - `)
    for(let bodyPart in measurementPoints){
  
      do{
  
        measurementPoints[bodyPart] = input.question(`Digite a perimetria - ${bodyPart} [000.0](cm): `)
  
        itsRegexNumber = validationFunctions.isRegularExpression(measurementPoints[bodyPart], regexFromZeroToThousand)
        validationFunctions.incorrectValue(false, !itsRegexNumber, "Antropometria")
  
      }while(!itsRegexNumber)
      
    }
  
    return measurementPoints
  
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade**bodyPerimeter** que vai receber o objeto retornado da function **bodyPerimetry( )**.

```js
// variables anthropometryFunctions
user.bodyWeight = anthropometryFunctions.bodyWeight()
user.bodyStature = anthropometryFunctions.stature()
user.bodyMassIndex = anthropometryFunctions.bodyMassIndex(user)
user.bodyMassIndexClassification = anthropometryFunctions.bodyMassIndexClassification(user)
user.bodyPerimeter = anthropometryFunctions.bodyPerimetry()
```

Para mostrar o resultado, vamos criar outra function, **showPerimeter( )**. Esta funcion receberá como parâmetro o objeto _**user**_ e mostrará cada parte do corpo e seus repectivos valores. Logo, em **anthropometryFunctions.js**:

```js
showPerimeter(objectValue){
  
    const perimeters = objectValue.bodyPerimeter
    console.log(' - Perimetria Corporal - ')
    
    for(let property in perimeters){
      console.log(`   ${property}: ${perimeters[property]} cm`) 
    }
  
  },
```

Em **saf.js** chamamos a function **showPerimeter( )** e passamos como parâmetro a variável **bodyPerimeter**:

```js
// show results anthropometryFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")
console.log(`Peso Corporal: ${user.bodyWeight} kilos`)
console.log(`Estatura Corporal: ${user.bodyStature} metros`)
console.log(`Índice de Massa Corporal - IMC: ${user.bodyMassIndex}`)
console.log(`Classificação IMC: ${user.bodyMassIndexClassification}`)
anthropometryFunctions.showPerimeter(user)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Digite seu peso [0000.0](kg): 95.5
Digite sua estatura [0.00](m): 1.86
 - Perimetria Corporal - 
Digite a perimetria - Braço [000.0](cm): 30.2
Digite a perimetria - Antebraço [000.0](cm): 30
Digite a perimetria - Cintura [000.0](cm): 85.7
Digite a perimetria - Quadril [000.0](cm): 90
Digite a perimetria - Coxa [000.0](cm): 56.7
Digite a perimetria - Panturrilha [000.0](cm): 45
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 95.5 kilos
Estatura Corporal: 1.86 metros
Índice de Massa Corporal - IMC: 27.6
Classificação IMC: Sobrepeso
 - Perimetria Corporal -
   Braço: 30.2 cm
   Antebraço: 30 cm
   Cintura: 85.7 cm
   Quadril: 90 cm
   Coxa: 56.7 cm
   Panturrilha: 45 cm
===============================
```

### Relação Cintura Quadril

Function **hipWaistRatio( )**, determina a **Relação Cintura Quadril - RCQ** a partir das medidas perimétricas da **cintura** e **quadril**. Esta function recebe como parâmetro o objeto _**user**_ e retorna o **RCQ**, que será determinado pela fórmula: **RCQ = Perimetria Cintura / Perimetria Quadril**. Logo em **anthropometryFunctions.js**:

```js
hipWaistRatio(objectValue){

    const waistPerimetry = objectValue.bodyPerimeter.Cintura
    const hipPerimetry = objectValue.bodyPerimeter.Quadril
  
    return Number((waistPerimetry/ hipPerimetry).toFixed(2))
  
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **hipWaistRatio** que recebe como valor o retorno da function **hipWaistRatio( )**. Passamos como parâmetro o objeto _**user**_:

```js
// variables anthropometryFunctions
user.bodyWeight = anthropometryFunctions.bodyWeight()
user.bodyStature = anthropometryFunctions.stature()
user.bodyMassIndex = anthropometryFunctions.bodyMassIndex(user)
user.bodyMassIndexClassification = anthropometryFunctions.bodyMassIndexClassification(user)
user.bodyPerimeter = anthropometryFunctions.bodyPerimetry()
user.hipWaistRatio = anthropometryFunctions.hipWaistRatio(user)
```

Em seguida mostramos exibimos o resultado:

```js
// show results anthropometryFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")
console.log(`Peso Corporal: ${user.bodyWeight} kilos`)
console.log(`Estatura Corporal: ${user.bodyStature} metros`)
console.log(`Índice de Massa Corporal - IMC: ${user.bodyMassIndex}`)
console.log(`Classificação IMC: ${user.bodyMassIndexClassification}`)
anthropometryFunctions.showPerimeter(user)
console.log(`Relação Cintura Quadril- RCQ: ${user.hipWaistRatio}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Digite seu peso [0000.0](kg): 95
Digite sua estatura [0.00](m): 1.86
 - Perimetria Corporal -
Digite a perimetria - Braço [000.0](cm): 12
Digite a perimetria - Antebraço [000.0](cm): 23
Digite a perimetria - Cintura [000.0](cm): 34
Digite a perimetria - Quadril [000.0](cm): 45
Digite a perimetria - Coxa [000.0](cm): 56
Digite a perimetria - Panturrilha [000.0](cm): 67
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 95 kilos
Estatura Corporal: 1.86 metros
Índice de Massa Corporal - IMC: 27.46
Classificação IMC: Sobrepeso
 - Perimetria Corporal -
   Braço: 12 cm
   Antebraço: 23 cm
   Cintura: 34 cm
   Quadril: 45 cm
   Coxa: 56 cm
   Panturrilha: 67 cm
Relação Cintura Quadril- RCQ: 0.76
===============================
```

### Relação Cintura Quadril - Classificação

Function **waistHipRatioClassification( )** vai realizar a classificação da **Relação Cintura Quadril - RCQ** de acordo com as regras da tabela abaixo. Esta function recebe como parâmetro o objeto _**user**_, usando os valores das propriedades **sexo**, **idade** e o **RCQ** do usuário. Retorna a classificação:

| **Se Homem**                     | Se Mulher                        |
| -------------------------------- | -------------------------------- |
| **Com idade entre 20 a 29 anos** | **Com idade entre 20 a 29 anos** |
| RCQ < 0,83 = "Baixo Risco"       | RCQ < 0,71 = "Baixo Risco"       |
| RCQ < 0,89 = "Moderado Risco"    | RCQ < 0,78 = "Moderado Risco"    |
| RCQ < 0,95 = "Alto Risco"        | RCQ < 0,82 = "Alto Risco"        |
| RCQ >= 0,95 = "Muito Alto Risco" | RCQ >= 0,82 = "Muito Alto Risco" |
| **Com idade entre 30 a 39 anos** | **Com idade entre 30 a 39 anos** |
| RCQ < 0,84 = "Baixo Risco"       | RCQ < 0,72 = "Baixo Risco"       |
| RCQ < 0,92 = "Moderado Risco"    | RCQ < 0,79 = "Moderado Risco"    |
| RCQ < 0,97 = "Alto Risco"        | RCQ < 0,84 = "Alto Risco"        |
| RCQ >= 0,97 = "Muito Alto Risco" | RCQ >= 0,84 = "Muito Alto Risco" |
| **Com idade entre 40 a 49 anos** | **Com idade entre 40 a 49 anos** |
| RCQ < 0,88 = "Baixo Risco"       | RCQ < 0,73 = "Baixo Risco"       |
| RCQ < 0,96 = "Moderado Risco"    | RCQ < 0,80 = "Moderado Risco"    |
| RCQ < 1 = "Alto Risco"           | RCQ < 0,87 = "Alto Risco"        |
| RCQ >= 1 = "Muito Alto Risco"    | RCQ >= 0,87 = "Muito Alto Risco" |
| **Com idade entre 50 a 59 anos** | **Com idade entre 50 a 59 anos** |
| RCQ < 0,90 = "Baixo Risco"       | RCQ < 0,74 = "Baixo Risco"       |
| RCQ < 0,97 = "Moderado Risco"    | RCQ < 0,82 = "Moderado Risco"    |
| RCQ < 1,02 = "Alto Risco"        | RCQ < 0,88 = "Alto Risco"        |
| RCQ >= 1,02 = "Muito Alto Risco" | RCQ >= 0,88 = "Muito Alto Risco" |
| **Com idade entre 60 a 69 anos** | **Com idade entre 60 a 69 anos** |
| RCQ < 0,91 = "Baixo Risco"       | RCQ < 0,76 = "Baixo Risco"       |
| RCQ < 0,99 = "Moderado Risco"    | RCQ < 0,84 = "Moderado Risco"    |
| RCQ < 1,03 = "Alto Risco"        | RCQ < 0,90 = "Alto Risco"        |
| RCQ >= 1,03 = "Muito Alto Risco" | RCQ >= 0,90 = "Muito Alto Risco" |

Logo, em **anthropometryFunctions.js**:

```js
waistHipRatioClassification(objectValue){

    const sexValue = objectValue.sexNumber
    const ageValue = objectValue.age
    const waistHipRatioValue = objectValue.hipWaistRatio
  
    let classification = ``
    const unidentifiedSex = `[ERROR] Sexo não identificado!` 
    const ageBetweenTwentyAndTwentyNine = ageValue >= 20 && ageValue <= 29
    const ageBetweenThirtyAndThirtyNine = ageValue >= 30 && ageValue <= 39
    const ageBetweenFortyAndFortyNine = ageValue >= 40 && ageValue <= 49
    const ageBetweenFiftyAndFiftyNine = ageValue >= 50 && ageValue <= 59
    const ageBetweenSixtyAndSixtyNine = ageValue >= 60 && ageValue <= 69
    const Lowrisk = `Baixo Risco`
    const ModerateRisk = `Moderado Risco`
    const Highrisk = `Alto Risco`
    const VeryHighRisk = `Muito Alto Risco`
    const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`
  
    switch (sexValue) {
  
      // masculine - masculine - masculine - masculine - masculine
      case 1:
        
        if(ageBetweenTwentyAndTwentyNine){
          
          if(waistHipRatioValue < 0.83){
            classification = Lowrisk
          } else if(waistHipRatioValue < 0.89){
            classification = ModerateRisk
          } else if(waistHipRatioValue < 0.95){
            classification = Highrisk
          } else {
            classification = VeryHighRisk
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(waistHipRatioValue < 0.84){
            classification = Lowrisk
          } else if(waistHipRatioValue < 0.92){
            classification = ModerateRisk
          } else if(waistHipRatioValue < 0.97){
            classification = Highrisk
          } else {
            classification = VeryHighRisk
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(waistHipRatioValue < 0.88){
            classification = Lowrisk
          } else if(waistHipRatioValue < 0.96){
            classification = ModerateRisk
          } else if(waistHipRatioValue < 1){
            classification = Highrisk
          } else {
            classification = VeryHighRisk
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(waistHipRatioValue < 0.90){
            classification = Lowrisk
          } else if(waistHipRatioValue < 0.97){
            classification = ModerateRisk
          } else if(waistHipRatioValue < 1.02){
            classification = Highrisk
          } else {
            classification = VeryHighRisk
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(waistHipRatioValue < 0.91){
            classification = Lowrisk
          } else if(waistHipRatioValue < 0.99){
            classification = ModerateRisk
          } else if(waistHipRatioValue < 1.03){
            classification = Highrisk
          } else {
            classification = VeryHighRisk
          }
          
        } else{
          classification = classificationNotAppliedToAge
        }
  
        break;
      
      // feminine - feminine - feminine - feminine - feminine
      case 2:
        if(ageBetweenTwentyAndTwentyNine){
          
          if(waistHipRatioValue < 0.71){
            classification = Lowrisk
          } else if(waistHipRatioValue < 0.78){
            classification = ModerateRisk
          } else if(waistHipRatioValue < 0.82){
            classification = Highrisk
          } else {
            classification = VeryHighRisk
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(waistHipRatioValue < 0.72){
            classification = Lowrisk
          } else if(waistHipRatioValue < 0.79){
            classification = ModerateRisk
          } else if(waistHipRatioValue < 0.84){
            classification = Highrisk
          } else {
            classification = VeryHighRisk
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(waistHipRatioValue < 0.73){
            classification = Lowrisk
          } else if(waistHipRatioValue < 0.80){
            classification = ModerateRisk
          } else if(waistHipRatioValue < 0.87){
            classification = Highrisk
          } else {
            classification = VeryHighRisk
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(waistHipRatioValue < 0.74){
            classification = Lowrisk
          } else if(waistHipRatioValue < 0.82){
            classification = ModerateRisk
          } else if(waistHipRatioValue < 0.88){
            classification = Highrisk
          } else {
            classification = VeryHighRisk
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(waistHipRatioValue < 0.76){
            classification = Lowrisk
          } else if(waistHipRatioValue < 0.84){
            classification = ModerateRisk
          } else if(waistHipRatioValue < 0.90){
            classification = Highrisk
          } else {
            classification = VeryHighRisk
          }
          
        } else{
          classification = classificationNotAppliedToAge
        }
  
        break;
  
      default:
        classification = unidentifiedSex
        break;
    }
    
  
    return classification
  
  },
```

Em **saf.js** atribuir ao objeto _**user**_ a propriedade **waistHipRatioClassification** que vai receber como valor o retorno da function **waistHipRatioClassification( )** passando o objeto _**user**_ como parâmetro. Em seguida mostramos o resultado.

```js
// variables anthropometryFunctions
user.bodyWeight = anthropometryFunctions.bodyWeight()
user.bodyStature = anthropometryFunctions.stature()
user.bodyMassIndex = anthropometryFunctions.bodyMassIndex(user)
user.bodyMassIndexClassification = anthropometryFunctions.bodyMassIndexClassification(user)
user.bodyPerimeter = anthropometryFunctions.bodyPerimetry()
user.hipWaistRatio = anthropometryFunctions.hipWaistRatio(user)
user.waistHipRatioClassification = anthropometryFunctions.waistHipRatioClassification(user)
```

```js
// show results anthropometryFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")
console.log(`Peso Corporal: ${user.bodyWeight} kilos`)
console.log(`Estatura Corporal: ${user.bodyStature} metros`)
console.log(`Índice de Massa Corporal - IMC: ${user.bodyMassIndex}`)
console.log(`Classificação IMC: ${user.bodyMassIndexClassification}`)
anthropometryFunctions.showPerimeter(user)
console.log(`Relação Cintura Quadril- RCQ: ${user.hipWaistRatio}`)
console.log(`Classificação RCQ: ${user.waistHipRatioClassification}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Digite seu peso [0000.0](kg): 95.0
Digite sua estatura [0.00](m): 1.86
 - Perimetria Corporal -
Digite a perimetria - Braço [000.0](cm): 12
Digite a perimetria - Antebraço [000.0](cm): 23
Digite a perimetria - Cintura [000.0](cm): 34
Digite a perimetria - Quadril [000.0](cm): 45
Digite a perimetria - Coxa [000.0](cm): 56
Digite a perimetria - Panturrilha [000.0](cm): 67
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 95 kilos
Estatura Corporal: 1.86 metros
Índice de Massa Corporal - IMC: 27.46
Classificação IMC: Sobrepeso
 - Perimetria Corporal -
   Braço: 12 cm
   Antebraço: 23 cm
   Cintura: 34 cm
   Quadril: 45 cm
   Coxa: 56 cm
   Panturrilha: 67 cm
Relação Cintura Quadril- RCQ: 0.76
Classificação RCQ: Baixo Risco
===============================
```

### Circunfência Cintura - Classificação

Function **waistCircumferenceClassification( )** vai determinar a classificação da circunferência da cintura do usuário, de acordo com os valores da tabela abaixo. Esta function recebe o objeto _**user**_ como parâmetro, sendo usado os valores das propriedades **sexo** e **cincurferência cintura** . Retorna a classificação:

| se **homem**                     | se **mulher**                   |
| -------------------------------- | ------------------------------- |
| Cintura < 94 = "Nenhum Risco"    | Cintura < 80 = "Nenhum Risco"   |
| Cintura < 102 = "Risco Moderado" | Cintura < 88 = "Risco Moderado" |
| Cintura >= 102 = "Risco Alto"    | Cintura >= 88 = "Risco Alto"    |

Logo em **anthropometryFunctions.js**:

```js
waistCircumferenceClassification(objectValue){

    const waistValue = objectValue.bodyPerimeter.Cintura
    const sexValue = objectValue.sexNumber
    const unidentifiedSex = `[ERROR] Sexo não identificado!`
    const noRisk = `Nenhum Risco`
    const moderateRisk = `Risco Moderado`
    const highRisk = `Risco Alto`
  
    classification = ``
  
    switch (sexValue) {
      
      case 1:
        
        if(waistValue < 94){
          classification = noRisk
        } else if(waistValue < 102){
          classification = moderateRisk
        } else {
          classification = highRisk
        }
  
        break;
  
      case 2:
  
        if(waistValue < 80){
          classification = noRisk
        } else if(waistValue < 88){
          classification = moderateRisk
        } else {
          classification = highRisk
        }
  
        break;
  
      default:
        classification = unidentifiedSex
        break;
    }
  
    return classification
  
  },
```

Em **saf.js** atribuir ao objeto _**user**_ a propriedade **waistCircumference** que recebe como valor o retorno da function **waistCircumferenceClassification( )** passando como parâmetro para esta function o objeto _**user**_. Em seguida mostramos o resultado:

```js
// variables anthropometryFunctions
user.bodyWeight = anthropometryFunctions.bodyWeight()
user.bodyStature = anthropometryFunctions.stature()
user.bodyMassIndex = anthropometryFunctions.bodyMassIndex(user)
user.bodyMassIndexClassification = anthropometryFunctions.bodyMassIndexClassification(user)
user.bodyPerimeter = anthropometryFunctions.bodyPerimetry()
user.hipWaistRatio = anthropometryFunctions.hipWaistRatio(user)
user.waistHipRatioClassification = anthropometryFunctions.waistHipRatioClassification(user)
user.waistCircumference = anthropometryFunctions.waistCircumferenceClassification(user)
```

```js
// show results anthropometryFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")
console.log(`Peso Corporal: ${user.bodyWeight} kilos`)
console.log(`Estatura Corporal: ${user.bodyStature} metros`)
console.log(`Índice de Massa Corporal - IMC: ${user.bodyMassIndex}`)
console.log(`Classificação IMC: ${user.bodyMassIndexClassification}`)
anthropometryFunctions.showPerimeter(user)
console.log(`Relação Cintura Quadril- RCQ: ${user.hipWaistRatio}`)
console.log(`Classificação RCQ: ${user.waistHipRatioClassification}`)
console.log(`Circunfência Cintura - Classificação: ${user.waistCircumference}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Digite seu peso [0000.0](kg): 65
Digite sua estatura [0.00](m): 1.59
 - Perimetria Corporal -
Digite a perimetria - Braço [000.0](cm): 12
Digite a perimetria - Antebraço [000.0](cm): 23
Digite a perimetria - Cintura [000.0](cm): 34
Digite a perimetria - Quadril [000.0](cm): 45
Digite a perimetria - Coxa [000.0](cm): 56
Digite a perimetria - Panturrilha [000.0](cm): 67
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 65 kilos
Estatura Corporal: 1.59 metros
Índice de Massa Corporal - IMC: 25.71
Classificação IMC: Sobrepeso
 - Perimetria Corporal -
   Braço: 12 cm
   Antebraço: 23 cm
   Cintura: 34 cm
   Quadril: 45 cm
   Coxa: 56 cm
   Panturrilha: 67 cm
Relação Cintura Quadril- RCQ: 0.76
Classificação RCQ: Baixo Risco
Circunfência cintura - Classificação: Nenhum Risco
===============================
```

### Medidas subcutâneas

Function **subcutaneousMeasures( )** irá solicitar do usuário informar as medias das dobras cutâneas **Triciptal**, **Subescapular**, **Peitoral**, **SupraIliaca**, **Abdominal**, **Coxa** e **Panturrilha**. Esta function só aceitará números de **0** a **99**. Caso seja informado um valor diferente, a function **incorrectValue( )** deverá ser chamada e o usuário deverá informar um valor aceito. No final esta function retorna um **objeto** tendo como propriedade cada dobra cutânea e seus respectivos valores. logo, em **anthropometryFunctions.js**:

```js
subcutaneousMeasures(){

    let subcutaneousFolds = {
      Triciptal: 0,
      Subescapular: 0,
      Peitoral: 0,
      SupraIliaca: 0,
      Abdominal: 0,
      Coxa: 0,
      Panturrilha: 0
    } 
    let itsRegexNumber = true
    let regexFromZeroToNinetyNine = /(^[0-9]$)|(^[0-9]{2}$)/
    
    console.log(` - Dobras Cutâneas - `)
    for(let folds in subcutaneousFolds){
  
      do{
  
        subcutaneousFolds[folds] = input.question(`Digite a dobra cutânea - ${folds} [00](mm): `)
  
        itsRegexNumber = validationFunctions.isRegularExpression(subcutaneousFolds[folds], regexFromZeroToNinetyNine)
        validationFunctions.incorrectValue(false, !itsRegexNumber, "Antropometria")
  
      }while(!itsRegexNumber)
  
    }
  
    return subcutaneousFolds
  
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **subcutaneousFolds** que vai receber o retorno da function **subcutaneousMeasures( )**:

```js
// variables anthropometryFunctions
user.bodyWeight = anthropometryFunctions.bodyWeight()
user.bodyStature = anthropometryFunctions.stature()
user.bodyMassIndex = anthropometryFunctions.bodyMassIndex(user)
user.bodyMassIndexClassification = anthropometryFunctions.bodyMassIndexClassification(user)
user.bodyPerimeter = anthropometryFunctions.bodyPerimetry()
user.hipWaistRatio = anthropometryFunctions.hipWaistRatio(user)
user.waistHipRatioClassification = anthropometryFunctions.waistHipRatioClassification(user)
user.waistCircumference = anthropometryFunctions.waistCircumferenceClassification(user)
user.subcutaneousFolds = anthropometryFunctions.subcutaneousMeasures()
```

Em **anthropometryFunctions.js** vamos criar a function **showSubcutaneousFolds( )** que vai receber o objeto _**user**_ como parâmetro e será usado os valores das propriedades das dobras cutâneas, mostrando as mesmas e seus respectivos valores:

```js
showSubcutaneousFolds(objectValue){
  
    const subcutaneousMeasures = objectValue.subcutaneousFolds
    console.log(' - Dobras Cutâneas - ')
    
    for(let property in subcutaneousMeasures){
      console.log(`   ${property}: ${subcutaneousMeasures[property]} mm`) 
    }
  
  },
```

Em **saf.js** vamos chamar a function **showSubcutaneousFolds( )** passando como parâmetro o objeto _**user**_:

```js
showSubcutaneousFolds(objectValue){
  
    const subcutaneousMeasures = objectValue.subcutaneousFolds
    console.log(' - Dobras Cutâneas - ')
    
    for(let property in subcutaneousMeasures){
      console.log(`   ${property}: ${subcutaneousMeasures[property]} mm`) 
    }
  
  },
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Digite seu peso [0000.0](kg): 87
Digite sua estatura [0.00](m): 1.66
 - Perimetria Corporal - 
Digite a perimetria - Braço [000.0](cm): 12
Digite a perimetria - Antebraço [000.0](cm): 23
Digite a perimetria - Cintura [000.0](cm): 34
Digite a perimetria - Quadril [000.0](cm): 45
Digite a perimetria - Coxa [000.0](cm): 56
Digite a perimetria - Panturrilha [000.0](cm): 67
 - Dobras Cutâneas - 
Digite a dobra cutânea - Triciptal [00](mm): 10
Digite a dobra cutânea - Subescapular [00](mm): 29
Digite a dobra cutânea - Peitoral [00](mm): 38
Digite a dobra cutânea - SupraIliaca [00](mm): 47
Digite a dobra cutânea - Abdominal [00](mm): 56
Digite a dobra cutânea - Coxa [00](mm): 10
Digite a dobra cutânea - Panturrilha [00](mm): 29
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 87 kilos
Estatura Corporal: 1.66 metros
Índice de Massa Corporal - IMC: 31.57
Classificação IMC: Obesidade nível 1
 - Perimetria Corporal - 
   Braço: 12 cm
   Antebraço: 23 cm
   Cintura: 34 cm
   Quadril: 45 cm
   Coxa: 56 cm
   Panturrilha: 67 cm
Relação Cintura Quadril- RCQ: 0.76
Classificação RCQ: Baixo Risco
Circunfência Cintura - Classificação: Nenhum Risco
 - Dobras Cutâneas - 
   Triciptal: 10 mm
   Subescapular: 29 mm
   Peitoral: 38 mm
   SupraIliaca: 47 mm
   Abdominal: 56 mm
   Coxa: 10 mm
   Panturrilha: 29 mm
===============================
```

### Percentual de gordura

Function **fatPercentage( )** determina o percentual de gordura do usuário. Recebe como parâmetro o objeto _**user**_, sendo utilizado os valores das propriedades **idade**, **sexo do usuário** e as **dobras cutâneas**. Dentro desta function vamos somar os valores de três dobras cutâneas, sendo **Peitoral**, **Abdominal** e **Coxa** para homem, e **Triciptal**, **SupraIliaca** e **Coxa** para mulheres, armazenando a soma destes elementos na variável **sumOfFolds**.

Em seguida determinamos a **Densidade Corporal** que vai ser atribuída a variável **bodyDensity**, sendo a fórmula:

- Para homem: 

Densidade Corporal = ((1,10938 - (0,0008267 * Soma das dobras )) + ((0,0000016 * (Soma das dobras * Soma das dobras)) - (0,0002574 * idade)))

- Para mulher:

Densidade Corporal = ((1,0994921-(0,0009929 * Soma das dobras)) + ((0,0000023 * (Soma das dobras * Soma das dobras)) - (0,0001392 * idade))))

Por último vamos determinar o percentual de gordura **fatPercentage** que será o retorno da function **fatPercentage( )**, sendo a fórmula:

- Para homem:

Percentual de gordura = (((4,95 / Densidade Corporal) - 4,5 ) * 100);

- Para mulher:

Percentual de gordura = (((5,01 / Densidade Corporal) - 4,57) * 100))

Logo em **anthropometryFunctions.js**:

```js
fatPercentage(objectValue){

    const ageValue = objectValue.age
    const sexValue = objectValue.sexNumber
    const skinFoldObject = objectValue.subcutaneousFolds
    const unidentifiedSex = `[ERROR] Sexo não identificado!`
  
    let sumOfFolds = 0
    let bodyDensity = 0
    let fatPercentage = 0
  
    switch (sexValue) {
      
      case 1:
        
        sumOfFolds = (Number(skinFoldObject.Peitoral) + Number(skinFoldObject.Abdominal) + Number(skinFoldObject.Coxa))
        bodyDensity = ((1.10938 - (0.0008267 * sumOfFolds )) + ((0.0000016 * (sumOfFolds * sumOfFolds)) - (0.0002574 * ageValue)))
        fatPercentage = (((4.95 / bodyDensity) - 4.5 ) * 100).toFixed(2)
  
        return Number(fatPercentage)
  
        break;
      
      case 2:
  
        sumOfFolds = (Number(skinFoldObject.Triciptal) + Number(skinFoldObject.SupraIliaca) + Number(skinFoldObject.Coxa))
        bodyDensity = ((1.0994921-(0.0009929 * sumOfFolds)) + ((0.0000023 * (sumOfFolds * sumOfFolds)) - (0.0001392 * ageValue)))
        fatPercentage = (((5.01 / bodyDensity) - 4.57) * 100).toFixed(2)
  
        return Number(fatPercentage)
  
        break;
    
      default:
  
        return unidentifiedSex
  
        break;
  
    }
  
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **fatPercentage** que receberá como valor o retorno da function **fatPercentage( )** passando como parâmetro o objeto _**user**_. Depois vamos mostrar o resultado:

```js
// variables anthropometryFunctions
user.bodyWeight = anthropometryFunctions.bodyWeight()
user.bodyStature = anthropometryFunctions.stature()
user.bodyMassIndex = anthropometryFunctions.bodyMassIndex(user)
user.bodyMassIndexClassification = anthropometryFunctions.bodyMassIndexClassification(user)
user.bodyPerimeter = anthropometryFunctions.bodyPerimetry()
user.hipWaistRatio = anthropometryFunctions.hipWaistRatio(user)
user.waistHipRatioClassification = anthropometryFunctions.waistHipRatioClassification(user)
user.waistCircumference = anthropometryFunctions.waistCircumferenceClassification(user)
user.subcutaneousFolds = anthropometryFunctions.subcutaneousMeasures()
user.fatPercentage = anthropometryFunctions.fatPercentage(user)
```

```js
// show results anthropometryFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")
console.log(`Peso Corporal: ${user.bodyWeight} kilos`)
console.log(`Estatura Corporal: ${user.bodyStature} metros`)
console.log(`Índice de Massa Corporal - IMC: ${user.bodyMassIndex}`)
console.log(`Classificação IMC: ${user.bodyMassIndexClassification}`)
anthropometryFunctions.showPerimeter(user)
console.log(`Relação Cintura Quadril- RCQ: ${user.hipWaistRatio}`)
console.log(`Classificação RCQ: ${user.waistHipRatioClassification}`)
console.log(`Circunfência Cintura - Classificação: ${user.waistCircumference}`)
anthropometryFunctions.showSubcutaneousFolds(user)
console.log(`Percentual de Gordura: ${user.fatPercentage}%`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Digite seu peso [0000.0](kg): 95 
Digite sua estatura [0.00](m): 1.86
 - Perimetria Corporal - 
Digite a perimetria - Braço [000.0](cm): 12
Digite a perimetria - Antebraço [000.0](cm): 23
Digite a perimetria - Cintura [000.0](cm): 34
Digite a perimetria - Quadril [000.0](cm): 45
Digite a perimetria - Coxa [000.0](cm): 56
Digite a perimetria - Panturrilha [000.0](cm): 67
 - Dobras Cutâneas - 
Digite a dobra cutânea - Triciptal [00](mm): 7
Digite a dobra cutânea - Subescapular [00](mm): 15
Digite a dobra cutânea - Peitoral [00](mm): 5
Digite a dobra cutânea - SupraIliaca [00](mm): 18
Digite a dobra cutânea - Abdominal [00](mm): 24
Digite a dobra cutânea - Coxa [00](mm): 14
Digite a dobra cutânea - Panturrilha [00](mm): 10
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 95 kilos
Estatura Corporal: 1.86 metros
Índice de Massa Corporal - IMC: 27.46
Classificação IMC: Sobrepeso
 - Perimetria Corporal - 
   Braço: 12 cm
   Antebraço: 23 cm
   Cintura: 34 cm
   Quadril: 45 cm
   Coxa: 56 cm
   Panturrilha: 67 cm
Relação Cintura Quadril- RCQ: 0.76
Classificação RCQ: Baixo Risco
Circunfência Cintura - Classificação: Nenhum Risco
 - Dobras Cutâneas - 
   Triciptal: 7 mm
   Subescapular: 15 mm
   Peitoral: 5 mm
   SupraIliaca: 18 mm
   Abdominal: 24 mm
   Coxa: 14 mm
   Panturrilha: 10 mm
Percentual de Gordura: 13.47%
===============================
```

### Percentual de gordura - Classificação

Function **fatPercentageClassification( )** determina a classificação do percentual de gordura do usuário. Esta function recebe como parâmetro o objeto _**user**_, sendo usado os valores das propriedades **sexo** e **percentual de gordura** do usuário. Retorna a classificação de acordo com a tabela abaixo:

| homem                                          | mulher                                         |
| ---------------------------------------------- | ---------------------------------------------- |
| Percentual de gordura < 6 = "Desnutrição"      | Percentual de gordura < 9 = "Desnutrição"      |
| Percentual de gordura < 15 = "Abaixo da média" | Percentual de gordura < 23 = "Abaixo da média" |
| Percentual de gordura < 16 = "Média"           | Percentual de gordura < 24 = "Média"           |
| Percentual de gordura < 25 = "Sobrepeso"       | Percentual de gordura < 32 = "Sobrepeso"       |
| Percentual de gordura >= 25 = "Obesidade"      | Percentual de gordura >= 32 = "Obesidade"      |

Logo em **anthropometryFunctions.js**:

```js
fatPercentageClassification(objectValue){

    const sexValue = objectValue.sexNumber
    const fatPercentageValue = objectValue.fatPercentage
  
    let classification = ``
    const malnutritionClassification = `Desnutrição`
    const belowAverageClassification = `Abaixo da média`
    const averageClassification = `Média`
    const overweightClassification = `Sobrepeso`
    const obesityClassification = `Obesidade`
    const unidentifiedSex = `[ERROR] Sexo não identificado!`
    // male conditions
    const malnutritionMan = fatPercentageValue < 6
    const belowAverageMan = fatPercentageValue < 15
    const averageMan = fatPercentageValue < 16
    const overweightMan = fatPercentageValue < 25
    // female conditions
    const malnutritionWoman = fatPercentageValue < 9
    const belowAverageWoman = fatPercentageValue < 23
    const averageWoman = fatPercentageValue < 24
    const overweightWoman = fatPercentageValue < 32
  
    switch (sexValue) {
      
      case 1:
        
        if(malnutritionMan){
          classification = malnutritionClassification
        } else if(belowAverageMan){
          classification = belowAverageClassification
        } else if(averageMan){
          classification = averageClassification
        } else if(overweightMan){
          classification = overweightClassification
        } else{
          classification = obesityClassification
        }
  
        break;
  
      case 2:
  
        if(malnutritionWoman){
          classification = malnutritionClassification
        } else if(belowAverageWoman){
          classification = belowAverageClassification
        } else if(averageWoman){
          classification = averageClassification
        } else if(overweightWoman){
          classification = overweightClassification
        } else{
          classification = obesityClassification
        }
  
        break;
  
      default:
        classification = unidentifiedSex
        break;
    }
    
    return classification
  
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **fatPercentageClassification** que recebe como valor o retorno  da function **fatPercentageClassification( )** passando como parâmetro o objeto _**user**_. Em seguinda mostramos o resultado:

```js
// variables anthropometryFunctions
user.bodyWeight = anthropometryFunctions.bodyWeight()
user.bodyStature = anthropometryFunctions.stature()
user.bodyMassIndex = anthropometryFunctions.bodyMassIndex(user)
user.bodyMassIndexClassification = anthropometryFunctions.bodyMassIndexClassification(user)
user.bodyPerimeter = anthropometryFunctions.bodyPerimetry()
user.hipWaistRatio = anthropometryFunctions.hipWaistRatio(user)
user.waistHipRatioClassification = anthropometryFunctions.waistHipRatioClassification(user)
user.waistCircumference = anthropometryFunctions.waistCircumferenceClassification(user)
user.subcutaneousFolds = anthropometryFunctions.subcutaneousMeasures()
user.fatPercentage = anthropometryFunctions.fatPercentage(user)
user.fatPercentageClassification = anthropometryFunctions.fatPercentageClassification(user)
```

```js
// show results anthropometryFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")
console.log(`Peso Corporal: ${user.bodyWeight} kilos`)
console.log(`Estatura Corporal: ${user.bodyStature} metros`)
console.log(`Índice de Massa Corporal - IMC: ${user.bodyMassIndex}`)
console.log(`Classificação IMC: ${user.bodyMassIndexClassification}`)
anthropometryFunctions.showPerimeter(user)
console.log(`Relação Cintura Quadril- RCQ: ${user.hipWaistRatio}`)
console.log(`Classificação RCQ: ${user.waistHipRatioClassification}`)
console.log(`Circunfência Cintura - Classificação: ${user.waistCircumference}`)
anthropometryFunctions.showSubcutaneousFolds(user)
console.log(`Percentual de Gordura: ${user.fatPercentage}%`)
console.log(`Classificação % Gordura: ${user.fatPercentageClassification}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Digite seu peso [0000.0](kg): 94
Digite sua estatura [0.00](m): 1.86
 - Perimetria Corporal - 
Digite a perimetria - Braço [000.0](cm): 12
Digite a perimetria - Antebraço [000.0](cm): 23
Digite a perimetria - Cintura [000.0](cm): 34
Digite a perimetria - Quadril [000.0](cm): 45
Digite a perimetria - Coxa [000.0](cm): 56
Digite a perimetria - Panturrilha [000.0](cm): 67
 - Dobras Cutâneas - 
Digite a dobra cutânea - Triciptal [00](mm): 7
Digite a dobra cutânea - Subescapular [00](mm): 15
Digite a dobra cutânea - Peitoral [00](mm): 5
Digite a dobra cutânea - SupraIliaca [00](mm): 18
Digite a dobra cutânea - Abdominal [00](mm): 24
Digite a dobra cutânea - Coxa [00](mm): 14
Digite a dobra cutânea - Panturrilha [00](mm): 10
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 94 kilos
Estatura Corporal: 1.86 metros
Índice de Massa Corporal - IMC: 27.17
Classificação IMC: Sobrepeso
 - Perimetria Corporal - 
   Braço: 12 cm
   Antebraço: 23 cm
   Cintura: 34 cm
   Quadril: 45 cm
   Coxa: 56 cm
   Panturrilha: 67 cm
Relação Cintura Quadril- RCQ: 0.76
Classificação RCQ: Baixo Risco
Circunfência Cintura - Classificação: Nenhum Risco
 - Dobras Cutâneas - 
   Triciptal: 7 mm
   Subescapular: 15 mm
   Peitoral: 5 mm
   SupraIliaca: 18 mm
   Abdominal: 24 mm
   Coxa: 14 mm
   Panturrilha: 10 mm
Percentual de Gordura: 13.47%
Classificação % Gordura: Abaixo da média
===============================
```

### Massa Corporal Gorda

Function **fatBodyMass( )**, determina a massa corporal de gordura do usuário. Esta function recebe como parâmetro o objeto _**user**_, usando os valores das propriedades **peso** e o **percentual de gordura** do indivíduo. Retorna o peso em kilos de gordura corporal do usuário de acordo com a fóruma abaixo:

Massa Corporal Gorda = ((PESO * Percentual de gordura) / 100)

Logo em **anthropometryFunctions.js**:

```js
fatBodyMass(objectValue){

    const bodyWeight = Number(objectValue.bodyWeight)
    const fatPercentage = Number(objectValue.fatPercentage)
  
    return Number(((bodyWeight * fatPercentage) / 100).toFixed(1))
  
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **fatBodyMass** que recebe como valor o retorno da function **fatBodyMass( )** passando como parâmetro o objeto _**user**_, usando os valores das propriedades **bodyWeight** e **fatPercentage**. Em seguida mostramos o resultado:

```js
// variables anthropometryFunctions
user.bodyWeight = anthropometryFunctions.bodyWeight()
user.bodyStature = anthropometryFunctions.stature()
user.bodyMassIndex = anthropometryFunctions.bodyMassIndex(user)
user.bodyMassIndexClassification = anthropometryFunctions.bodyMassIndexClassification(user)
user.bodyPerimeter = anthropometryFunctions.bodyPerimetry()
user.hipWaistRatio = anthropometryFunctions.hipWaistRatio(user)
user.waistHipRatioClassification = anthropometryFunctions.waistHipRatioClassification(user)
user.waistCircumference = anthropometryFunctions.waistCircumferenceClassification(user)
user.subcutaneousFolds = anthropometryFunctions.subcutaneousMeasures()
user.fatPercentage = anthropometryFunctions.fatPercentage(user)
user.fatPercentageClassification = anthropometryFunctions.fatPercentageClassification(user)
user.fatBodyMass = anthropometryFunctions.fatBodyMass(user)
```

```js
// show results anthropometryFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")
console.log(`Peso Corporal: ${user.bodyWeight} kilos`)
console.log(`Estatura Corporal: ${user.bodyStature} metros`)
console.log(`Índice de Massa Corporal - IMC: ${user.bodyMassIndex}`)
console.log(`Classificação IMC: ${user.bodyMassIndexClassification}`)
anthropometryFunctions.showPerimeter(user)
console.log(`Relação Cintura Quadril- RCQ: ${user.hipWaistRatio}`)
console.log(`Classificação RCQ: ${user.waistHipRatioClassification}`)
console.log(`Circunfência Cintura - Classificação: ${user.waistCircumference}`)
anthropometryFunctions.showSubcutaneousFolds(user)
console.log(`Percentual de Gordura: ${user.fatPercentage}%`)
console.log(`Classificação % Gordura: ${user.fatPercentageClassification}`)
console.log(`Massa Corporal Gorda: ${user.fatBodyMass} kilos`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Digite seu peso [0000.0](kg): 94
Digite sua estatura [0.00](m): 1.86
 - Perimetria Corporal - 
Digite a perimetria - Braço [000.0](cm): 12
Digite a perimetria - Antebraço [000.0](cm): 23
Digite a perimetria - Cintura [000.0](cm): 34
Digite a perimetria - Quadril [000.0](cm): 45
Digite a perimetria - Coxa [000.0](cm): 56
Digite a perimetria - Panturrilha [000.0](cm): 67
 - Dobras Cutâneas - 
Digite a dobra cutânea - Triciptal [00](mm): 7
Digite a dobra cutânea - Subescapular [00](mm): 15
Digite a dobra cutânea - Peitoral [00](mm): 5
Digite a dobra cutânea - SupraIliaca [00](mm): 18
Digite a dobra cutânea - Abdominal [00](mm): 24
Digite a dobra cutânea - Coxa [00](mm): 14
Digite a dobra cutânea - Panturrilha [00](mm): 10
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 94 kilos
Estatura Corporal: 1.86 metros
Índice de Massa Corporal - IMC: 27.17
Classificação IMC: Sobrepeso
 - Perimetria Corporal - 
   Braço: 12 cm
   Antebraço: 23 cm
   Cintura: 34 cm
   Quadril: 45 cm
   Coxa: 56 cm
   Panturrilha: 67 cm
Relação Cintura Quadril- RCQ: 0.76
Classificação RCQ: Baixo Risco
Circunfência Cintura - Classificação: Nenhum Risco
 - Dobras Cutâneas - 
   Triciptal: 7 mm
   Subescapular: 15 mm
   Peitoral: 5 mm
   SupraIliaca: 18 mm
   Abdominal: 24 mm
   Coxa: 14 mm
   Panturrilha: 10 mm
Percentual de Gordura: 13.47%
Classificação % Gordura: Abaixo da média
Massa Corporal Gorda: 12.7 kilos
===============================
```

### Massa Corporal Magra

Function **leanBodyMass( )**, determina o peso da massa magra do indivíduo. Recebe como parâmetro o objeto _**user**_, usando os valores das propriedades **peso corporal**  e **peso da massa corporal gorda** do indivíduo. A function retorna a subtração desses valores, logo, em **anthropometryFunctions.js**:

```js
leanBodyMass(objectValue){

    const bodyWeight = Number(objectValue.bodyWeight)
    const fatBodyMass = Number(objectValue.fatBodyMass)
  
    return Number(bodyWeight - fatBodyMass)
  
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **leanBodyMass** que recebe como valor o retorno da function **leanBodyMass( )** passando como parâmetro o objeto _**user**_, usando os valores das propriedades **bodyWeight** e **fatBodyMass**. em seguida mostramos o resultado:

```js
// variables anthropometryFunctions
user.bodyWeight = anthropometryFunctions.bodyWeight()
user.bodyStature = anthropometryFunctions.stature()
user.bodyMassIndex = anthropometryFunctions.bodyMassIndex(user)
user.bodyMassIndexClassification = anthropometryFunctions.bodyMassIndexClassification(user)
user.bodyPerimeter = anthropometryFunctions.bodyPerimetry()
user.hipWaistRatio = anthropometryFunctions.hipWaistRatio(user)
user.waistHipRatioClassification = anthropometryFunctions.waistHipRatioClassification(user)
user.waistCircumference = anthropometryFunctions.waistCircumferenceClassification(user)
user.subcutaneousFolds = anthropometryFunctions.subcutaneousMeasures()
user.fatPercentage = anthropometryFunctions.fatPercentage(user)
user.fatPercentageClassification = anthropometryFunctions.fatPercentageClassification(user)
user.fatBodyMass = anthropometryFunctions.fatBodyMass(user)
user.leanBodyMass = anthropometryFunctions.leanBodyMass(user)
```

```js
// show results anthropometryFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")
console.log(`Peso Corporal: ${user.bodyWeight} kilos`)
console.log(`Estatura Corporal: ${user.bodyStature} metros`)
console.log(`Índice de Massa Corporal - IMC: ${user.bodyMassIndex}`)
console.log(`Classificação IMC: ${user.bodyMassIndexClassification}`)
anthropometryFunctions.showPerimeter(user)
console.log(`Relação Cintura Quadril- RCQ: ${user.hipWaistRatio}`)
console.log(`Classificação RCQ: ${user.waistHipRatioClassification}`)
console.log(`Circunfência Cintura - Classificação: ${user.waistCircumference}`)
anthropometryFunctions.showSubcutaneousFolds(user)
console.log(`Percentual de Gordura: ${user.fatPercentage}%`)
console.log(`Classificação % Gordura: ${user.fatPercentageClassification}`)
console.log(`Massa Corporal Gorda: ${user.fatBodyMass} kilos`)
console.log(`Massa Corporal Magra: ${user.leanBodyMass} kilos`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Digite seu peso [0000.0](kg): 94
Digite sua estatura [0.00](m): 1.86
 - Perimetria Corporal - 
Digite a perimetria - Braço [000.0](cm): 12
Digite a perimetria - Antebraço [000.0](cm): 23
Digite a perimetria - Cintura [000.0](cm): 34
Digite a perimetria - Quadril [000.0](cm): 45
Digite a perimetria - Coxa [000.0](cm): 56
Digite a perimetria - Panturrilha [000.0](cm): 67
 - Dobras Cutâneas - 
Digite a dobra cutânea - Triciptal [00](mm): 7
Digite a dobra cutânea - Subescapular [00](mm): 15
Digite a dobra cutânea - Peitoral [00](mm): 5
Digite a dobra cutânea - SupraIliaca [00](mm): 18
Digite a dobra cutânea - Abdominal [00](mm): 24
Digite a dobra cutânea - Coxa [00](mm): 14
Digite a dobra cutânea - Panturrilha [00](mm): 10
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 94 kilos
Estatura Corporal: 1.86 metros
Índice de Massa Corporal - IMC: 27.17
Classificação IMC: Sobrepeso
 - Perimetria Corporal - 
   Braço: 12 cm
   Antebraço: 23 cm
   Cintura: 34 cm
   Quadril: 45 cm
   Coxa: 56 cm
   Panturrilha: 67 cm
Relação Cintura Quadril- RCQ: 0.76
Classificação RCQ: Baixo Risco
Circunfência Cintura - Classificação: Nenhum Risco
 - Dobras Cutâneas - 
   Triciptal: 7 mm
   Subescapular: 15 mm
   Peitoral: 5 mm
   SupraIliaca: 18 mm
   Abdominal: 24 mm
   Coxa: 14 mm
   Panturrilha: 10 mm
Percentual de Gordura: 13.47%
Classificação % Gordura: Abaixo da média
Massa Corporal Gorda: 12.7 kilos
Massa Corporal Magra: 81.3 kilos
===============================
```

### Massa Corporal Ideal Prevista

Function **expectedIdealBodyMass( )** determina  **Massa Corporal Ideal Prevista** do usuário. Recebe como parâmetro o objeto _**user**_, usando os valores das propriedades **sexo** e a **massa corporal magra** do indivíduo. Retorna **Massa Corporal Ideal Prevista** de acordo com as fórmulas:

- Se homem:

Massa Corporal Ideal Prevista = (Masssa Corporal Magra / (1 - 0,15))

- Se mulher:

Massa Corporal Ideal Prevista = (Masssa Corporal Magra / (1 - 0,23))

Logo, em **anthropometryFunctions.js**:

```js
expectedIdealBodyMass(objectValue){

    const sexNumber = Number(objectValue.sexNumber)
    const leanBodyMass = Number(objectValue.leanBodyMass)
    let expectedIdealBodyMass = 0
    const men = sexNumber === 1
  
    if(men){
      expectedIdealBodyMass = Number((leanBodyMass / (1 - 0.15)).toFixed(1)) 
    } else {
      expectedIdealBodyMass =  Number((leanBodyMass / (1 - 0.23)).toFixed(1))
    }
    
    return expectedIdealBodyMass
  
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **expectedIdealBodyMass** que recebe como valor o retorno da function **expectedIdealBodyMass( )** passando como parâmetro o objeto _**user**_, usando os valores das propriedades **sexNumber** e **leanBodyMass**. Em seguida mostramos o resultado:

```js
// variables anthropometryFunctions
user.bodyWeight = anthropometryFunctions.bodyWeight()
user.bodyStature = anthropometryFunctions.stature()
user.bodyMassIndex = anthropometryFunctions.bodyMassIndex(user)
user.bodyMassIndexClassification = anthropometryFunctions.bodyMassIndexClassification(user)
user.bodyPerimeter = anthropometryFunctions.bodyPerimetry()
user.hipWaistRatio = anthropometryFunctions.hipWaistRatio(user)
user.waistHipRatioClassification = anthropometryFunctions.waistHipRatioClassification(user)
user.waistCircumference = anthropometryFunctions.waistCircumferenceClassification(user)
user.subcutaneousFolds = anthropometryFunctions.subcutaneousMeasures()
user.fatPercentage = anthropometryFunctions.fatPercentage(user)
user.fatPercentageClassification = anthropometryFunctions.fatPercentageClassification(user)
user.fatBodyMass = anthropometryFunctions.fatBodyMass(user)
user.leanBodyMass = anthropometryFunctions.leanBodyMass(user)
user.expectedIdealBodyMass = anthropometryFunctions.expectedIdealBodyMass(user)
```

```js
// show results anthropometryFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")
console.log(`Peso Corporal: ${user.bodyWeight} kilos`)
console.log(`Estatura Corporal: ${user.bodyStature} metros`)
console.log(`Índice de Massa Corporal - IMC: ${user.bodyMassIndex}`)
console.log(`Classificação IMC: ${user.bodyMassIndexClassification}`)
anthropometryFunctions.showPerimeter(user)
console.log(`Relação Cintura Quadril- RCQ: ${user.hipWaistRatio}`)
console.log(`Classificação RCQ: ${user.waistHipRatioClassification}`)
console.log(`Circunfência Cintura - Classificação: ${user.waistCircumference}`)
anthropometryFunctions.showSubcutaneousFolds(user)
console.log(`Percentual de Gordura: ${user.fatPercentage}%`)
console.log(`Classificação % Gordura: ${user.fatPercentageClassification}`)
console.log(`Massa Corporal Gorda: ${user.fatBodyMass} kilos`)
console.log(`Massa Corporal Magra: ${user.leanBodyMass} kilos`)
console.log(`Massa Corporal Ideal Prevista: ${user.expectedIdealBodyMass} kilos`)
headerFunctions.baseboard()
```

Ao executar  o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Digite seu peso [0000.0](kg): 94
Digite sua estatura [0.00](m): 1.86
 - Perimetria Corporal - 
Digite a perimetria - Braço [000.0](cm): 12
Digite a perimetria - Antebraço [000.0](cm): 23
Digite a perimetria - Cintura [000.0](cm): 34
Digite a perimetria - Quadril [000.0](cm): 45
Digite a perimetria - Coxa [000.0](cm): 56
Digite a perimetria - Panturrilha [000.0](cm): 67
 - Dobras Cutâneas - 
Digite a dobra cutânea - Triciptal [00](mm): 7
Digite a dobra cutânea - Subescapular [00](mm): 15
Digite a dobra cutânea - Peitoral [00](mm): 5
Digite a dobra cutânea - SupraIliaca [00](mm): 18
Digite a dobra cutânea - Abdominal [00](mm): 24
Digite a dobra cutânea - Coxa [00](mm): 14
Digite a dobra cutânea - Panturrilha [00](mm): 10
```

```shell
===============================
           Antropometria            
===============================
Peso Corporal: 94 kilos
Estatura Corporal: 1.86 metros
Índice de Massa Corporal - IMC: 27.17
Classificação IMC: Sobrepeso
 - Perimetria Corporal - 
   Braço: 12 cm
   Antebraço: 23 cm
   Cintura: 34 cm
   Quadril: 45 cm
   Coxa: 56 cm
   Panturrilha: 67 cm
Relação Cintura Quadril- RCQ: 0.76
Classificação RCQ: Baixo Risco
Circunfência Cintura - Classificação: Nenhum Risco
 - Dobras Cutâneas - 
   Triciptal: 7 mm
   Subescapular: 15 mm
   Peitoral: 5 mm
   SupraIliaca: 18 mm
   Abdominal: 24 mm
   Coxa: 14 mm
   Panturrilha: 10 mm
Percentual de Gordura: 13.47%
Classificação % Gordura: Abaixo da média
Massa Corporal Gorda: 12.7 kilos
Massa Corporal Magra: 81.3 kilos
Massa Corporal Ideal Prevista: 95.6 kilos
===============================
```

Com isto chega ao final a parte **Antropometria** do projeto. Como ficaram os arquivos do programa até esta etapa:

Arquivo **anthropometryFunctions.js** completo:

```js
/* anthropometryFunctions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const anthropometryFunctions = {

  bodyWeight(){

    let bodyWeight = 0
    let itsRegexNumber = true
    let regexFromZeroToThousand = /(^[0-9]\.[0-9]$)|(^[1-9][0-9]\.[0-9]$)|(^[1-9][0-9]{2}\.[0-9]$)|(^[1][0]{3}\.[0]$)|(^[0-9]$)|(^[1-9][0-9]$)|(^[1-9][0-9]{2}$)|(^[1][0]{3}$)/
  
    do{
  
      bodyWeight = input.question('Digite seu peso [0000.0](kg): ')
      itsRegexNumber = validationFunctions.isRegularExpression(bodyWeight, regexFromZeroToThousand)
      validationFunctions.incorrectValue(false, !itsRegexNumber, "Antropometria")
  
    }while(!itsRegexNumber)
  
    return Number(bodyWeight)
    
  },

  stature(){

    let bodyStature = 0
    let itsRegexNumber = true
    let regexZeroToNinePointNinetyNine = /(^[0-9]\.([0-9]){2}$)/
  
    do{
  
      bodyStature =input.question('Digite sua estatura [0.00](m): ')
      itsRegexNumber = validationFunctions.isRegularExpression(bodyStature, regexZeroToNinePointNinetyNine)
      validationFunctions.incorrectValue(false, !itsRegexNumber, "Antropometria")
  
    }while(!itsRegexNumber)
    
    return Number(bodyStature)
  
  },

  bodyMassIndex(objectValue){

    const weight = objectValue.bodyWeight
    const height = objectValue.bodyStature
    // IMC = peso / estatura * estatura
    return Number((weight / (height * height)).toFixed(2))
  
  },

  bodyMassIndexClassification(objectValue){

    const bodyMassIndexValue = objectValue.bodyMassIndex
    let classification = ``
    const gradeTwoThinness = bodyMassIndexValue < 17
    const underWeight = bodyMassIndexValue < 18.5
    const normalWeight = bodyMassIndexValue < 25
    const overweight = bodyMassIndexValue < 30
    const levelOneObesity = bodyMassIndexValue < 35
    const levelTwoObesity = bodyMassIndexValue < 40
  
    if(gradeTwoThinness){
      classification = `Magreza Grau 2`
    } else if(underWeight){
      classification = `Abaixo do peso`
    } else if(normalWeight){
      classification = `Peso Normal`
    } else if(overweight){
      classification = `Sobrepeso`
    } else if(levelOneObesity){
      classification = `Obesidade nível 1`
    } else if(levelTwoObesity){
      classification = `Obesidade nível 2`
    } else{
      classification = `Obesidade Morbida`
    }
  
    return classification
  
  },

  bodyPerimetry(){

    let measurementPoints = {
      Braço: 0,
      Antebraço: 0,
      Cintura: 0,
      Quadril: 0,
      Coxa: 0,
      Panturrilha: 0
    } 
    let itsRegexNumber = true
    const regexFromZeroToThousand = /(^[0-9]\.[0-9]$)|(^[1-9][0-9]\.[0-9]$)|(^[1-9][0-9]{2}\.[0-9]$)|(^[1][0]{3}$)|(^[0-9]$)|(^[1-9][0-9]$)|(^[1-9][0-9]{2}$)|(^[1][0]{3}$)/
  
    console.log(` - Perimetria Corporal - `)
    for(let bodyPart in measurementPoints){
  
      do{
  
        measurementPoints[bodyPart] = input.question(`Digite a perimetria - ${bodyPart} [000.0](cm): `)
  
        itsRegexNumber = validationFunctions.isRegularExpression(measurementPoints[bodyPart], regexFromZeroToThousand)
        validationFunctions.incorrectValue(false, !itsRegexNumber, "Antropometria")
  
      }while(!itsRegexNumber)
      
    }
  
    return measurementPoints
  
  },

  showPerimeter(objectValue){
  
    const perimeters = objectValue.bodyPerimeter
    console.log(' - Perimetria Corporal - ')
    
    for(let property in perimeters){
      console.log(`   ${property}: ${perimeters[property]} cm`) 
    }
  
  },

  hipWaistRatio(objectValue){

    const waistPerimetry = objectValue.bodyPerimeter.Cintura
    const hipPerimetry = objectValue.bodyPerimeter.Quadril
  
    return Number((waistPerimetry/ hipPerimetry).toFixed(2))
  
  },

  waistHipRatioClassification(objectValue){

    const sexValue = objectValue.sexNumber
    const ageValue = objectValue.age
    const waistHipRatioValue = objectValue.hipWaistRatio
  
    let classification = ``
    const unidentifiedSex = `[ERROR] Sexo não identificado!` 
    const ageBetweenTwentyAndTwentyNine = ageValue >= 20 && ageValue <= 29
    const ageBetweenThirtyAndThirtyNine = ageValue >= 30 && ageValue <= 39
    const ageBetweenFortyAndFortyNine = ageValue >= 40 && ageValue <= 49
    const ageBetweenFiftyAndFiftyNine = ageValue >= 50 && ageValue <= 59
    const ageBetweenSixtyAndSixtyNine = ageValue >= 60 && ageValue <= 69
    const Lowrisk = `Baixo Risco`
    const ModerateRisk = `Moderado Risco`
    const Highrisk = `Alto Risco`
    const VeryHighRisk = `Muito Alto Risco`
    const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`
  
    switch (sexValue) {
  
      // masculine - masculine - masculine - masculine - masculine
      case 1:
        
        if(ageBetweenTwentyAndTwentyNine){
          
          if(waistHipRatioValue < 0.83){
            classification = Lowrisk
          } else if(waistHipRatioValue < 0.89){
            classification = ModerateRisk
          } else if(waistHipRatioValue < 0.95){
            classification = Highrisk
          } else {
            classification = VeryHighRisk
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(waistHipRatioValue < 0.84){
            classification = Lowrisk
          } else if(waistHipRatioValue < 0.92){
            classification = ModerateRisk
          } else if(waistHipRatioValue < 0.97){
            classification = Highrisk
          } else {
            classification = VeryHighRisk
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(waistHipRatioValue < 0.88){
            classification = Lowrisk
          } else if(waistHipRatioValue < 0.96){
            classification = ModerateRisk
          } else if(waistHipRatioValue < 1){
            classification = Highrisk
          } else {
            classification = VeryHighRisk
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(waistHipRatioValue < 0.90){
            classification = Lowrisk
          } else if(waistHipRatioValue < 0.97){
            classification = ModerateRisk
          } else if(waistHipRatioValue < 1.02){
            classification = Highrisk
          } else {
            classification = VeryHighRisk
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(waistHipRatioValue < 0.91){
            classification = Lowrisk
          } else if(waistHipRatioValue < 0.99){
            classification = ModerateRisk
          } else if(waistHipRatioValue < 1.03){
            classification = Highrisk
          } else {
            classification = VeryHighRisk
          }
          
        } else{
          classification = classificationNotAppliedToAge
        }
  
        break;
      
      // feminine - feminine - feminine - feminine - feminine
      case 2:
        if(ageBetweenTwentyAndTwentyNine){
          
          if(waistHipRatioValue < 0.71){
            classification = Lowrisk
          } else if(waistHipRatioValue < 0.78){
            classification = ModerateRisk
          } else if(waistHipRatioValue < 0.82){
            classification = Highrisk
          } else {
            classification = VeryHighRisk
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(waistHipRatioValue < 0.72){
            classification = Lowrisk
          } else if(waistHipRatioValue < 0.79){
            classification = ModerateRisk
          } else if(waistHipRatioValue < 0.84){
            classification = Highrisk
          } else {
            classification = VeryHighRisk
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(waistHipRatioValue < 0.73){
            classification = Lowrisk
          } else if(waistHipRatioValue < 0.80){
            classification = ModerateRisk
          } else if(waistHipRatioValue < 0.87){
            classification = Highrisk
          } else {
            classification = VeryHighRisk
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(waistHipRatioValue < 0.74){
            classification = Lowrisk
          } else if(waistHipRatioValue < 0.82){
            classification = ModerateRisk
          } else if(waistHipRatioValue < 0.88){
            classification = Highrisk
          } else {
            classification = VeryHighRisk
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(waistHipRatioValue < 0.76){
            classification = Lowrisk
          } else if(waistHipRatioValue < 0.84){
            classification = ModerateRisk
          } else if(waistHipRatioValue < 0.90){
            classification = Highrisk
          } else {
            classification = VeryHighRisk
          }
          
        } else{
          classification = classificationNotAppliedToAge
        }
  
        break;
  
      default:
        classification = unidentifiedSex
        break;
    }
    
  
    return classification
  
  },

  waistCircumferenceClassification(objectValue){

    const waistValue = objectValue.bodyPerimeter.Cintura
    const sexValue = objectValue.sexNumber
    const unidentifiedSex = `[ERROR] Sexo não identificado!`
    const noRisk = `Nenhum Risco`
    const moderateRisk = `Risco Moderado`
    const highRisk = `Risco Alto`
  
    classification = ``
  
    switch (sexValue) {
      
      case 1:
        
        if(waistValue < 94){
          classification = noRisk
        } else if(waistValue < 102){
          classification = moderateRisk
        } else {
          classification = highRisk
        }
  
        break;
  
      case 2:
  
        if(waistValue < 80){
          classification = noRisk
        } else if(waistValue < 88){
          classification = moderateRisk
        } else {
          classification = highRisk
        }
  
        break;
  
      default:
        classification = unidentifiedSex
        break;
    }
  
    return classification
  
  },

  subcutaneousMeasures(){

    let subcutaneousFolds = {
      Triciptal: 0,
      Subescapular: 0,
      Peitoral: 0,
      SupraIliaca: 0,
      Abdominal: 0,
      Coxa: 0,
      Panturrilha: 0
    } 
    let itsRegexNumber = true
    let regexFromZeroToNinetyNine = /(^[0-9]$)|(^[0-9]{2}$)/
    
    console.log(` - Dobras Cutâneas - `)
    for(let folds in subcutaneousFolds){
  
      do{
  
        subcutaneousFolds[folds] = input.question(`Digite a dobra cutânea - ${folds} [00](mm): `)
  
        itsRegexNumber = validationFunctions.isRegularExpression(subcutaneousFolds[folds], regexFromZeroToNinetyNine)
        validationFunctions.incorrectValue(false, !itsRegexNumber, "Antropometria")
  
      }while(!itsRegexNumber)
  
    }
  
    return subcutaneousFolds
  
  },

  showSubcutaneousFolds(objectValue){
  
    const subcutaneousMeasures = objectValue.subcutaneousFolds
    console.log(' - Dobras Cutâneas - ')
    
    for(let property in subcutaneousMeasures){
      console.log(`   ${property}: ${subcutaneousMeasures[property]} mm`) 
    }
  
  },

  fatPercentage(objectValue){

    const ageValue = objectValue.age
    const sexValue = objectValue.sexNumber
    const skinFoldObject = objectValue.subcutaneousFolds
    const unidentifiedSex = `[ERROR] Sexo não identificado!`
  
    let sumOfFolds = 0
    let bodyDensity = 0
    let fatPercentage = 0
  
    switch (sexValue) {
      
      case 1:
        
        sumOfFolds = (Number(skinFoldObject.Peitoral) + Number(skinFoldObject.Abdominal) + Number(skinFoldObject.Coxa))
        bodyDensity = ((1.10938 - (0.0008267 * sumOfFolds )) + ((0.0000016 * (sumOfFolds * sumOfFolds)) - (0.0002574 * ageValue)))
        fatPercentage = (((4.95 / bodyDensity) - 4.5 ) * 100).toFixed(2)
  
        return Number(fatPercentage)
  
        break;
      
      case 2:
  
        sumOfFolds = (Number(skinFoldObject.Triciptal) + Number(skinFoldObject.SupraIliaca) + Number(skinFoldObject.Coxa))
        bodyDensity = ((1.0994921-(0.0009929 * sumOfFolds)) + ((0.0000023 * (sumOfFolds * sumOfFolds)) - (0.0001392 * ageValue)))
        fatPercentage = (((5.01 / bodyDensity) - 4.57) * 100).toFixed(2)
  
        return Number(fatPercentage)
  
        break;
    
      default:
  
        return unidentifiedSex
  
        break;
  
    }
  
  },

  fatPercentageClassification(objectValue){

    const sexValue = objectValue.sexNumber
    const fatPercentageValue = objectValue.fatPercentage
  
    let classification = ``
    const malnutritionClassification = `Desnutrição`
    const belowAverageClassification = `Abaixo da média`
    const averageClassification = `Média`
    const overweightClassification = `Sobrepeso`
    const obesityClassification = `Obesidade`
    const unidentifiedSex = `[ERROR] Sexo não identificado!`
    // male conditions
    const malnutritionMan = fatPercentageValue < 6
    const belowAverageMan = fatPercentageValue < 15
    const averageMan = fatPercentageValue < 16
    const overweightMan = fatPercentageValue < 25
    // female conditions
    const malnutritionWoman = fatPercentageValue < 9
    const belowAverageWoman = fatPercentageValue < 23
    const averageWoman = fatPercentageValue < 24
    const overweightWoman = fatPercentageValue < 32
  
    switch (sexValue) {
      
      case 1:
        
        if(malnutritionMan){
          classification = malnutritionClassification
        } else if(belowAverageMan){
          classification = belowAverageClassification
        } else if(averageMan){
          classification = averageClassification
        } else if(overweightMan){
          classification = overweightClassification
        } else{
          classification = obesityClassification
        }
  
        break;
  
      case 2:
  
        if(malnutritionWoman){
          classification = malnutritionClassification
        } else if(belowAverageWoman){
          classification = belowAverageClassification
        } else if(averageWoman){
          classification = averageClassification
        } else if(overweightWoman){
          classification = overweightClassification
        } else{
          classification = obesityClassification
        }
  
        break;
  
      default:
        classification = unidentifiedSex
        break;
    }
    
    return classification
  
  },

  fatBodyMass(objectValue){

    const bodyWeight = Number(objectValue.bodyWeight)
    const fatPercentage = Number(objectValue.fatPercentage)
  
    return Number(((bodyWeight * fatPercentage) / 100).toFixed(1))
  
  },

  leanBodyMass(objectValue){

    const bodyWeight = Number(objectValue.bodyWeight)
    const fatBodyMass = Number(objectValue.fatBodyMass)
  
    return Number(bodyWeight - fatBodyMass)
  
  },

  expectedIdealBodyMass(objectValue){

    const sexNumber = Number(objectValue.sexNumber)
    const leanBodyMass = Number(objectValue.leanBodyMass)
    let expectedIdealBodyMass = 0
    const men = sexNumber === 1
  
    if(men){
      expectedIdealBodyMass = Number((leanBodyMass / (1 - 0.15)).toFixed(1)) 
    } else {
      expectedIdealBodyMass =  Number((leanBodyMass / (1 - 0.23)).toFixed(1))
    }
    
    return expectedIdealBodyMass
  
  },

}

module.exports = {
  anthropometryFunctions
}
```

Arquivo **saf.js** completo:

```js
/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')
const { anamnesisQuestions } = require('./anamnesisFunctions')
const { cardiorespiratoryFunctions } = require('./cardiorespiratoryFunctions')
const { percentageValues } = require('./cardiorespiratoryFunctions')
const { anthropometryFunctions } = require('./anthropometryFunctions')

const user = { }

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalDataFunctions
user.name = personalDataFunctions.userName()
user.birthdayInBrazilianFormat =  personalDataFunctions.dateOfBirth()
user.birthdayInFullFormat = personalDataFunctions.dateInFullFormat(user.birthdayInBrazilianFormat)
user.age = personalDataFunctions.age(user)
user.sexNumber = personalDataFunctions.sexNumber()
user.sex = personalDataFunctions.showSex(user)
user.profession = personalDataFunctions.userProfession()
user.userEmail = personalDataFunctions.userEmail()
user.phoneNumber = personalDataFunctions.phoneNumber()

// console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variables anamnesisFunctions
user.questionnairePARQ = anamnesisFunctions.questionnairePARQ()
user.currentPhysicalState = anamnesisFunctions.currentPhysicalState()
user.pastIllness = anamnesisFunctions.questions(anamnesisQuestions.pastIllness)
user.illnessesFamily = anamnesisFunctions.questions(anamnesisQuestions.illnessesInTheFamily)
user.surgeryPerformed = anamnesisFunctions.questions(anamnesisQuestions.surgeryPerformed)
user.useMedication = anamnesisFunctions.questions(anamnesisQuestions.useMedication)
user.sportsInjuries = anamnesisFunctions.questions(anamnesisQuestions.sportsInjuries)
user.trainingObjective = anamnesisFunctions.trainingObjective()
user.daysAvailableForTraining = anamnesisFunctions.daysAvailableForTraining()
user.timeAvailablePerTraining = anamnesisFunctions.timeAvailablePerTraining()

// console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Cardiorrespiratório")

// variables cardiorespiratoryFunctions
user.restingHeartRate = cardiorespiratoryFunctions.restingHeartRate()
user.maximumHeartRate = cardiorespiratoryFunctions.maximumHeartRate(user)
user.percentageValues = percentageValues
user.workingHeartRate = cardiorespiratoryFunctions.workingHeartRate(user)
user.restingBloodPressure = cardiorespiratoryFunctions.bloodPressure()
user.classificationBloodPressure = cardiorespiratoryFunctions.classificationOfBloodPressure(user)

// console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")

// variables anthropometryFunctions
user.bodyWeight = anthropometryFunctions.bodyWeight()
user.bodyStature = anthropometryFunctions.stature()
user.bodyMassIndex = anthropometryFunctions.bodyMassIndex(user)
user.bodyMassIndexClassification = anthropometryFunctions.bodyMassIndexClassification(user)
user.bodyPerimeter = anthropometryFunctions.bodyPerimetry()
user.hipWaistRatio = anthropometryFunctions.hipWaistRatio(user)
user.waistHipRatioClassification = anthropometryFunctions.waistHipRatioClassification(user)
user.waistCircumference = anthropometryFunctions.waistCircumferenceClassification(user)
user.subcutaneousFolds = anthropometryFunctions.subcutaneousMeasures()
user.fatPercentage = anthropometryFunctions.fatPercentage(user)
user.fatPercentageClassification = anthropometryFunctions.fatPercentageClassification(user)
user.fatBodyMass = anthropometryFunctions.fatBodyMass(user)
user.leanBodyMass = anthropometryFunctions.leanBodyMass(user)
user.expectedIdealBodyMass = anthropometryFunctions.expectedIdealBodyMass(user)

// show results personalDataFunctions
// console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${user.name}`)
console.log(`Data de nascimento: ${user.birthdayInBrazilianFormat}`)
console.log(`Idade: ${user.age} anos`)
console.log(`Sexo: ${user.sex}`)
console.log(`Profissão: ${user.profession}`)
console.log(`E-mail: ${user.userEmail}`)
console.log(`Celular: ${user.phoneNumber}`)

// show results anamnesisFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")
console.log(`Questionário PAR-Q: ${user.questionnairePARQ}`)
console.log(`Estado físico: ${anamnesisFunctions.showPhysicalState(user)}`)
console.log(`Doença Pregressa: ${user.pastIllness}`)
console.log(`Doença Pregressa na Família: ${user.illnessesFamily}`)
console.log(`Cirurgia: ${user.surgeryPerformed}`)
console.log(`Uso de Medicamento: ${user.useMedication}`)
console.log(`Lesão Desportiva: ${user.sportsInjuries}`)
console.log(`Objetivo do treino: ${user.trainingObjective}`)
console.log(`Dias disponíveis para treinar: ${user.daysAvailableForTraining} dias.`)
console.log(`Tempo disponível para treino: ${user.timeAvailablePerTraining} minutos.`)

// show results cardiorespiratoryFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Cardiorespiratório")
console.log(`Frequência Cardíaca de Repouso: ${user.restingHeartRate} bpm.`)
console.log(`Frequência Cardíaca Máxima: ${user.maximumHeartRate} bpm.`)
cardiorespiratoryFunctions.showWorkingHeartRate(user)
console.log(`Pressão Arterial de Repouso: ${user.restingBloodPressure.bloodPressureString} mmHg.`)
console.log(`Classificação da Pressão Arterial`)
console.log(`Sistólica: ${user.classificationBloodPressure.systolicClassification} / Diastólica: ${user.classificationBloodPressure.diastolicClassification}`)

// show results anthropometryFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")
console.log(`Peso Corporal: ${user.bodyWeight} kilos`)
console.log(`Estatura Corporal: ${user.bodyStature} metros`)
console.log(`Índice de Massa Corporal - IMC: ${user.bodyMassIndex}`)
console.log(`Classificação IMC: ${user.bodyMassIndexClassification}`)
anthropometryFunctions.showPerimeter(user)
console.log(`Relação Cintura Quadril- RCQ: ${user.hipWaistRatio}`)
console.log(`Classificação RCQ: ${user.waistHipRatioClassification}`)
console.log(`Circunfência Cintura - Classificação: ${user.waistCircumference}`)
anthropometryFunctions.showSubcutaneousFolds(user)
console.log(`Percentual de Gordura: ${user.fatPercentage}%`)
console.log(`Classificação % Gordura: ${user.fatPercentageClassification}`)
console.log(`Massa Corporal Gorda: ${user.fatBodyMass} kilos`)
console.log(`Massa Corporal Magra: ${user.leanBodyMass} kilos`)
console.log(`Massa Corporal Ideal Prevista: ${user.expectedIdealBodyMass} kilos`)
headerFunctions.baseboard()
```

Ao executar o progama:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Nome: Maria Severina
Data de nascimento: 28/02/1998
Idade: 24 anos
Sexo: Feminino
Profissão: Secretaria
E-mail: maria@severina.com
Celular: 82910293847
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Não'!
Estado físico: Sedentário
Doença Pregressa: Sem doença pregressa.
Doença Pregressa na Família: Sem doença pregressa na família.
Cirurgia: Nunca realizou procedimento cirúrgico.
Uso de Medicamento: Não faz uso de medicamento.
Lesão Desportiva: Nunca sofreu lesão desportiva.
Objetivo do treino: Bem-estar e Saúde
Dias disponíveis para treinar: 5 dias.
Tempo disponível para treino: 60 minutos.
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Cardiorespiratório            
===============================
Frequência Cardíaca de Repouso: 60 bpm.
Frequência Cardíaca Máxima: 196 bpm.
Frequência Cardíaca de Treino:
       40% = 114 bpm
       45% = 121 bpm
       50% = 128 bpm
       55% = 135 bpm
       60% = 142 bpm
       65% = 148 bpm
       70% = 155 bpm
       75% = 162 bpm
       80% = 169 bpm
       85% = 176 bpm
       90% = 182 bpm
       95% = 189 bpm
Pressão Arterial de Repouso: 125/80 mmHg.
Classificação da Pressão Arterial
Sistólica: Normal / Diastólica: Normal
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 65 kilos
Estatura Corporal: 1.6 metros
Índice de Massa Corporal - IMC: 25.39
Classificação IMC: Sobrepeso
 - Perimetria Corporal - 
   Braço: 12 cm
   Antebraço: 23 cm
   Cintura: 66 cm
   Quadril: 75 cm
   Coxa: 45 cm
   Panturrilha: 32 cm
Relação Cintura Quadril- RCQ: 0.88
Classificação RCQ: Muito Alto Risco
Circunfência Cintura - Classificação: Nenhum Risco
 - Dobras Cutâneas - 
   Triciptal: 7 mm
   Subescapular: 18 mm
   Peitoral: 5 mm
   SupraIliaca: 15 mm
   Abdominal: 24 mm
   Coxa: 14 mm
   Panturrilha: 7 mm
Percentual de Gordura: 14.14%
Classificação % Gordura: Abaixo da média
Massa Corporal Gorda: 9.2 kilos
Massa Corporal Magra: 55.8 kilos
Massa Corporal Ideal Prevista: 72.5 kilos
===============================
```

## Testes Neuromuscular

Vamos para a próxima etapa onde vamos construir a parte dos **testes neuromusculares**. Para isto vamos criar o arquivo **neuromuscularFunctions.js**. Dentro deste arquivo vamos:

- Criar a variável **input**;
- Requerer a variável **validationFunctions**;
- Criar uma variável objeto **neuromuscularFunctions**;
- Exportar essa variável.

```js
/* neuromuscular functions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const neuromuscularFunctions = {

}

module.exports = {
  neuromuscularFunctions
}
```

### Teste de Flexibilidade Banco de Wells

Teste para medir a flexibilidade do usuário. Function **wellsBenchTest( )**, deve ser inserido um número, com no máximo dois dígitos, de **0 a 99**. Caso seja digitado qualquer outro valor diferente, a function **incorrectValue( )** deve ser chamada e o usuário deve digitar um valor correto. Retorna o valor alcançado no teste pelo o usuário. Logo, em **neuromuscularFunctions.js**:

```js
wellsBenchTest(){
  
    let testResult = 0
    const regexFromZeroToNinetyNine = /(^[0-9]$)|(^[0-9]{2}$)/
    let itsRegexNumber = true
    
    do{
      console.log(`Teste de flexibilidade banco de Wells`)
      testResult = input.question(`Digite a distância alcaçada [00](cm) : `)
      itsRegexNumber = validationFunctions.isRegularExpression(testResult, regexFromZeroToNinetyNine)
      validationFunctions.incorrectValue(false, !itsRegexNumber, `Neuromuscular`)
  
    }while(!itsRegexNumber)
    
    return Number(testResult)
  
  },
```

Em **saf.js** vamos fazer a requisição do arquivo **neuromuscularFunctions.js**:

```js
/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')
const { anamnesisQuestions } = require('./anamnesisFunctions')
const { cardiorespiratoryFunctions } = require('./cardiorespiratoryFunctions')
const { percentageValues } = require('./cardiorespiratoryFunctions')
const { anthropometryFunctions } = require('./anthropometryFunctions')
const { neuromuscularFunctions } = require('./neuromuscularFunctions')
```

Ainda em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **wellsBenchTest** que recebe como valor o retorno da function **wellsBenchTest( )**. Em seguida, mostramos o resultado:

```js
headerFunctions.systemHeader()
headerFunctions.subTitle("Neuromuscular")

// variables neuromuscularFunctions
user.wellsBenchTest = neuromuscularFunctions.wellsBenchTest()
```

```js
// show results neuromuscularFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Neuromuscular")
console.log(`Resultado Teste Flexibilidade Banco de Wells: ${user.wellsBenchTest} cm`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Neuromuscular            
===============================
Teste de flexibilidade banco de Wells
Digite a distância alcaçada [00](cm) : 45
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Neuromuscular            
===============================
Resultado teste Flexibilidade Banco de Wells: 45 cm
===============================
```

### Flexibilidade - Classificação

**flexibilityClassification( )** function, determina a classificação da flexibilidade do usuário. Recebe como parâmetro o objeto _**user**_, usando os valores das propriedades **sexo**, **idade** e o **teste de flexibilidade**. A classificação será determinada de acordo com a tabela abaixo:

| Flexibilidade - Classificação - HOMEM | Flexibilidade - Classificação - MULHER |
| ------------------------------------- | -------------------------------------- |
| **Com idade entre 0 e 19 anos**       | **Com idade entre 0 e 19 anos**        |
| Flexibilidade < 24 = "Fraca"          | Flexibilidade < 29 = "Fraca"           |
| Flexibilidade < 29 = "Regular"        | Flexibilidade < 34 = "Regular"         |
| Flexibilidade < 39 = "Boa"            | Flexibilidade < 43 = "Boa"             |
| Flexibilidade >= 39 = "Excelente"     | Flexibilidade >= 43 = "Excelente"      |
| **Com idade entre 20 e 29 anos**      | **Com idade entre 20 e 29 anos**       |
| Flexibilidade < 25 = "Fraca"          | Flexibilidade < 28 = "Fraca"           |
| Flexibilidade < 30 = "Regular"        | Flexibilidade < 33 = "Regular"         |
| Flexibilidade < 40 = "Boa"            | Flexibilidade < 41 = "Boa"             |
| Flexibilidade >= 40 = "Excelente"     | Flexibilidade >= 41 = "Excelente"      |
| **Com idade entre 30 e 39 anos**      | **Com idade entre 30 e 39 anos**       |
| Flexibilidade < 23 = "Fraca"          | Flexibilidade < 27 = "Fraca"           |
| Flexibilidade < 28 = "Regular"        | Flexibilidade < 32 = "Regular"         |
| Flexibilidade < 38 = "Boa"            | Flexibilidade < 41 = "Boa"             |
| Flexibilidade >= 38 = "Excelente"     | Flexibilidade >= 41 = "Excelente"      |
| **Com idade entre 40 e 49 anos**      | **Com idade entre 40 e 49 anos**       |
| Flexibilidade < 18 = "Fraca"          | Flexibilidade < 25 = "Fraca"           |
| Flexibilidade < 24 = "Regular"        | Flexibilidade < 30 = "Regular"         |
| Flexibilidade < 35 = "Boa"            | Flexibilidade < 38 = "Boa"             |
| Flexibilidade >= 35 = "Excelente"     | Flexibilidade >= 38 = "Excelente"      |
| **Com idade entre 50 e 59 anos**      | **Com idade entre 50 e 59 anos**       |
| Flexibilidade < 16 = "Fraca"          | Flexibilidade < 25 = "Fraca"           |
| Flexibilidade < 24 = "Regular"        | Flexibilidade < 30 = "Regular"         |
| Flexibilidade < 35 = "Boa"            | Flexibilidade < 39 = "Boa"             |
| Flexibilidade >= 35 = "Excelente"     | Flexibilidade >= 39 = "Excelente"      |
| **Com idade entre 60 e 69 anos**      | **Com idade entre 60 e 69 anos**       |
| Flexibilidade < 15 = "Fraca"          | Flexibilidade < 23 = "Fraca"           |
| Flexibilidade < 20 = "Regular"        | Flexibilidade < 27 = "Regular"         |
| Flexibilidade < 33 = "Boa"            | Flexibilidade < 35 = "Boa"             |
| Flexibilidade >= 33 = "Excelente"     | Flexibilidade >= 35 = "Excelente"      |

Logo, em **neuromuscularFunctions.js**:

```js
flexibilityClassification(objectValue){

  const sexNumber = objectValue.sexNumber
  const ageValue = objectValue.age
  const flexibilityTestResult = objectValue.wellsBenchTest

  let classification = ``
  const unidentifiedSex = `[ERROR] Sexo não identificado!`
  const ageLessThanTwenty = ageValue > 0 && ageValue < 20
  const ageLessThanThirty = ageValue < 30
  const ageLessThanForty = ageValue < 40
  const ageLessThanFifty = ageValue < 50
  const ageLessThanSixty = ageValue < 60
  const ageLessThanSeventy = ageValue < 70
  const weakRating = `Fraca`
  const regularRating = `Regular`
  const goodRating = `Boa`
  const excellentRating = `Excelente`
  const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`


  switch (sexNumber) {
    
    // men
    case 1:
      
      if(ageLessThanTwenty){
        
        if(flexibilityTestResult < 24){
          classification = weakRating
        } else if(flexibilityTestResult < 29){
          classification = regularRating
        } else if(flexibilityTestResult < 39){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanThirty){
        
        if(flexibilityTestResult < 25){
          classification = weakRating
        } else if(flexibilityTestResult < 30){
          classification = regularRating
        } else if(flexibilityTestResult < 40){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanForty){
        
        if(flexibilityTestResult < 23){
          classification = weakRating
        } else if(flexibilityTestResult < 28){
          classification = regularRating
        } else if(flexibilityTestResult < 38){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanFifty){
        
        if(flexibilityTestResult < 18){
          classification = weakRating
        } else if(flexibilityTestResult < 24){
          classification = regularRating
        } else if(flexibilityTestResult < 35){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanSixty){
        
        if(flexibilityTestResult < 16){
          classification = weakRating
        } else if(flexibilityTestResult < 24){
          classification = regularRating
        } else if(flexibilityTestResult < 35){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanSeventy){
        
        if(flexibilityTestResult < 15){
          classification = weakRating
        } else if(flexibilityTestResult < 20){
          classification = regularRating
        } else if(flexibilityTestResult < 33){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else {
        classification = classificationNotAppliedToAge
      }

      break;
    
    // woman
    case 2:

      if(ageLessThanTwenty){
        
        if(flexibilityTestResult < 29){
          classification = weakRating
        } else if(flexibilityTestResult < 34){
          classification = regularRating
        } else if(flexibilityTestResult < 43){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanThirty){
        
        if(flexibilityTestResult < 28){
          classification = weakRating
        } else if(flexibilityTestResult < 33){
          classification = regularRating
        } else if(flexibilityTestResult < 41){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanForty){
        
        if(flexibilityTestResult < 27){
          classification = weakRating
        } else if(flexibilityTestResult < 32){
          classification = regularRating
        } else if(flexibilityTestResult < 41){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanFifty){
        
        if(flexibilityTestResult < 25){
          classification = weakRating
        } else if(flexibilityTestResult < 30){
          classification = regularRating
        } else if(flexibilityTestResult < 38){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanSixty){
        
        if(flexibilityTestResult < 25){
          classification = weakRating
        } else if(flexibilityTestResult < 30){
          classification = regularRating
        } else if(flexibilityTestResult < 39){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else if(ageLessThanSeventy){
        
        if(flexibilityTestResult < 23){
          classification = weakRating
        } else if(flexibilityTestResult < 27){
          classification = regularRating
        } else if(flexibilityTestResult < 35){
          classification = goodRating
        } else {
          classification = excellentRating
        }
        
      } else {
        classification = classificationNotAppliedToAge
      }

      break;
  
    default:
      classification = unidentifiedSex
      break;
  }

  return classification
},
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **flexibilityClassification** que recebe como valor o retorno da function **flexibilityClassification( )** passando como parâmetro as variáveis **sexNumber**, **age** e **wellsBenchTest**. Depois mostramos o resultado:

```js
// variables neuromuscularFunctions
user.wellsBenchTest = neuromuscularFunctions.wellsBenchTest()
user.flexibilityClassification = neuromuscularFunctions.flexibilityClassification(user)
```

```js
// show results neuromuscularFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Neuromuscular")
console.log(`Resultado Teste Flexibilidade Banco de Wells: ${user.wellsBenchTest} cm`)
console.log(`Classificação Flexibilidade: ${user.flexibilityClassification}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Neuromuscular            
===============================
Teste de flexibilidade banco de Wells
Digite a distância alcaçada [00](cm) : 29
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Neuromuscular            
===============================
Resultado Teste Flexibilidade Banco de Wells: 29 cm
Classificação Flexibilidade: Boa
===============================
```

### Teste Abdominal

**abdominalTest( )** function, determina a quantidade de repetições abdominais realizadas pelo usuário em 1 minuto. Deve aceitar apenas números inteiros de até 2 dígitos. Caso seja digitado qualquer outro valor diferente, a function **incorrectValue( )** deve ser chamada e o usuário deve digitar um valor correto. Retorna o valor alcançado no teste pelo o usuário. Logo, em **neuromuscularFunctions.js**:

```js
abdominalTest(){

    let testResult = 0
    const regexFromZeroToNinetyNine = /(^[0-9]$)|(^[0-9]{2}$)/
    let itsRegexNumber = true
  
    do{
      console.log('Teste de Abdominais')
      testResult = input.question('Digite a quantidade de repetições em 1 min [00]: ')
      itsRegexNumber = validationFunctions.isRegularExpression(testResult, regexFromZeroToNinetyNine)
      validationFunctions.incorrectValue(false, !itsRegexNumber,'Neuromuscular' )
  
    }while(!itsRegexNumber)
    
    return Number(testResult)
  
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **numberOfAbs** que recebe como valor o retorno da function **abdominalTest( )**. Depois mostramos o resultado:

```js
// variables neuromuscularFunctions
user.wellsBenchTest = neuromuscularFunctions.wellsBenchTest()
user.flexibilityClassification = neuromuscularFunctions.flexibilityClassification(user)
user.numberOfAbs = neuromuscularFunctions.abdominalTest()
```

```js
// show results neuromuscularFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Neuromuscular")
console.log(`Resultado Teste Flexibilidade Banco de Wells: ${user.wellsBenchTest} cm`)
console.log(`Classificação Flexibilidade: ${user.flexibilityClassification}`)
console.log(`Quantidade de flexões abdominais: ${user.numberOfAbs}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Neuromuscular            
===============================
Teste de flexibilidade banco de Wells
Digite a distância alcaçada [00](cm) : 10
Teste de Abdominais
Digite a quantidade de repetições em 1 min [00]: 32
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Neuromuscular            
===============================
Resultado Teste Flexibilidade Banco de Wells: 10 cm
Classificação Flexibilidade: Fraca
Quantidade de flexões abdominais: 32
===============================
```

### Teste Abdominal - Classificação

**abdominalClassification( )** function determina a classificação da quantidade de abdominais realizadas pelo usuário. Recebe como parâmetro o  **sexo**, a **idade** e a **quantidade de abodominais** realizada pelo usuário. Retorna a classificação de acordo com a tabela abaixo:

| Teste Abdominal - Classificação - HOMEM | Teste Abdominal - Classificação - MULHER |
| --------------------------------------- | ---------------------------------------- |
| **Com idade entre 20 e 29 anos**        | **Com idade entre 20 e 29 anos**         |
| Abdominal < 30 = "Muito Fraco"          | Abdominal < 26 = "Muito Fraco"           |
| Abdominal < 35 = "Fraco"                | Abdominal < 30 = "Fraco"                 |
| Abdominal < 40 = "Regular"              | Abdominal < 35 = "Regular"               |
| Abdominal < 45 = "Bom"                  | Abdominal < 40 = "Bom"                   |
| Abdominal >= 45 = "Excelente"           | Abdominal >= 40 = "Excelente"            |
| **Com idade entre 30 e 39 anos**        | **Com idade entre 30 e 39 anos**         |
| Abdominal < 22 = "Muito Fraco"          | Abdominal < 21 = "Muito Fraco"           |
| Abdominal < 27 = "Fraco"                | Abdominal < 25 = "Fraco"                 |
| Abdominal < 32 = "Regular"              | Abdominal < 30 = "Regular"               |
| Abdominal < 37 = "Bom"                  | Abdominal < 35 = "Bom"                   |
| Abdominal >= 37 = "Excelente"           | Abdominal >= 35 = "Excelente"            |
| **Com idade entre 40 e 49 anos**        | **Com idade entre 40 e 49 anos**         |
| Abdominal < 17 = "Muito Fraco"          | Abdominal < 16 = "Muito Fraco"           |
| Abdominal < 21 = "Fraco"                | Abdominal < 20 = "Fraco"                 |
| Abdominal < 26 = "Regular"              | Abdominal < 25 = "Regular"               |
| Abdominal < 32 = "Bom"                  | Abdominal < 30 = "Bom"                   |
| Abdominal >= 32 = "Excelente"           | Abdominal >= 30 = "Excelente"            |
| **Com idade entre 50 e 59 anos**        | **Com idade entre 50 e 59 anos**         |
| Abdominal < 12 = "Muito Fraco"          | Abdominal < 11 = "Muito Fraco"           |
| Abdominal < 17 = "Fraco"                | Abdominal < 15 = "Fraco"                 |
| Abdominal < 23 = "Regular"              | Abdominal < 20 = "Regular"               |
| Abdominal < 29 = "Bom"                  | Abdominal < 25 = "Bom"                   |
| Abdominal >= 29 = "Excelente"           | Abdominal >= 25 = "Excelente"            |
| **Com idade entre 60 e 69 anos**        | **Com idade entre 60 e 69 anos**         |
| Abdominal < 9 = "Muito Fraco"           | Abdominal < 6 = "Muito Fraco"            |
| Abdominal < 13 = "Fraco"                | Abdominal < 10 = "Fraco"                 |
| Abdominal < 19 = "Regular"              | Abdominal < 15 = "Regular"               |
| Abdominal < 25 = "Bom"                  | Abdominal < 20 = "Bom"                   |
| Abdominal >= 25 = "Excelente"           | Abdominal >= 20 = "Excelente"            |

Logo, em **neuromuscularFunctions.js**:

```js
abdominalClassification(objectValue){
  
    const sexNumber = objectValue.sexNumber
    const ageValue = objectValue.age
    const abdominalTestResult = objectValue.numberOfAbs
  
    let classification = ``
    const unidentifiedSex = `[ERROR] Sexo não identificado!` 
    const ageBetweenTwentyAndTwentyNine = ageValue >= 20 && ageValue <= 29
    const ageBetweenThirtyAndThirtyNine = ageValue >= 30 && ageValue <= 39
    const ageBetweenFortyAndFortyNine = ageValue >= 40 && ageValue <= 49
    const ageBetweenFiftyAndFiftyNine = ageValue >= 50 && ageValue <= 59
    const ageBetweenSixtyAndSixtyNine = ageValue >= 60 && ageValue <= 69
    const veryPoorRating = `Muito Fraco`
    const weakRating = `Fraco`
    const regularRating = `Regular`
    const goodRating = `Bom`
    const excellentRating = `Excelente`
    const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`
  
    switch (sexNumber) {
      
      // men
      case 1:
        
        if(ageBetweenTwentyAndTwentyNine){
          
          if(abdominalTestResult < 30){
            classification = veryPoorRating
          } else if(abdominalTestResult < 35){
            classification = weakRating
          } else if(abdominalTestResult < 40){
            classification = regularRating
          } else if(abdominalTestResult < 45){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(abdominalTestResult < 22){
            classification = veryPoorRating
          } else if(abdominalTestResult < 27){
            classification = weakRating
          } else if(abdominalTestResult < 32){
            classification = regularRating
          } else if(abdominalTestResult < 37){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(abdominalTestResult < 17){
            classification = veryPoorRating
          } else if(abdominalTestResult < 21){
            classification = weakRating
          } else if(abdominalTestResult < 26){
            classification = regularRating
          } else if(abdominalTestResult < 32){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(abdominalTestResult < 12){
            classification = veryPoorRating
          } else if(abdominalTestResult < 17){
            classification = weakRating
          } else if(abdominalTestResult < 23){
            classification = regularRating
          } else if(abdominalTestResult < 29){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(abdominalTestResult < 9){
            classification = veryPoorRating
          } else if(abdominalTestResult < 13){
            classification = weakRating
          } else if(abdominalTestResult < 19){
            classification = regularRating
          } else if(abdominalTestResult < 25){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else {
          classification = classificationNotAppliedToAge
        }
  
        break;
      
      // woman
      case 2:
  
        if(ageBetweenTwentyAndTwentyNine){
          
          if(abdominalTestResult < 26){
            classification = veryPoorRating
          } else if(abdominalTestResult < 30){
            classification = weakRating
          } else if(abdominalTestResult < 35){
            classification = regularRating
          } else if(abdominalTestResult < 40){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(abdominalTestResult < 21){
            classification = veryPoorRating
          } else if(abdominalTestResult < 25){
            classification = weakRating
          } else if(abdominalTestResult < 30){
            classification = regularRating
          } else if(abdominalTestResult < 35){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(abdominalTestResult < 16){
            classification = veryPoorRating
          } else if(abdominalTestResult < 20){
            classification = weakRating
          } else if(abdominalTestResult < 25){
            classification = regularRating
          } else if(abdominalTestResult < 30){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(abdominalTestResult < 11){
            classification = veryPoorRating
          } else if(abdominalTestResult < 15){
            classification = weakRating
          } else if(abdominalTestResult < 20){
            classification = regularRating
          } else if(abdominalTestResult < 25){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(abdominalTestResult < 6){
            classification = veryPoorRating
          } else if(abdominalTestResult < 10){
            classification = weakRating
          } else if(abdominalTestResult < 15){
            classification = regularRating
          } else if(abdominalTestResult < 20){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else {
          classification = classificationNotAppliedToAge
        }
  
        break;
    
      default:
  
        classification = unidentifiedSex
  
        break;
    }
  
    return classification
  
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **abdominalClassification** que recebe como valor o retorno da function **abdominalClassification( )** passando o objeto _**user**_como parâmetro, sendo usado as propriedades **sexo**, **idade** e **quantidade de abdominais** realizadas no teste. Em seguida mostramos o resultado:

```js
// variables neuromuscularFunctions
user.wellsBenchTest = neuromuscularFunctions.wellsBenchTest()
user.flexibilityClassification = neuromuscularFunctions.flexibilityClassification(user)
user.numberOfAbs = neuromuscularFunctions.abdominalTest()
user.abdominalClassification = neuromuscularFunctions.abdominalClassification(user)
```

 ```js
 // show results neuromuscularFunctions
 headerFunctions.systemHeader()
 headerFunctions.subTitle("Neuromuscular")
 console.log(`Resultado Teste Flexibilidade Banco de Wells: ${user.wellsBenchTest} cm`)
 console.log(`Classificação Flexibilidade: ${user.flexibilityClassification}`)
 console.log(`Quantidade de flexões abdominais: ${user.numberOfAbs}`)
 console.log(`Classificação Abdominais: ${user.abdominalClassification}`)
 headerFunctions.baseboard()
 ```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Neuromuscular            
===============================
Teste de flexibilidade banco de Wells
Digite a distância alcaçada [00](cm) : 26
Teste de Abdominais
Digite a quantidade de repetições em 1 min [00]: 39
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Neuromuscular            
===============================
Resultado Teste Flexibilidade Banco de Wells: 26 cm
Classificação Flexibilidade: Regular
Quantidade de flexões abdominais: 39
Classificação Abdominais: Excelente
===============================
```

### Flexão de Braço

**flexArmTest( )** determina a quantidade de flexões de braço realizadas no teste. Deve aceitar apenas números inteiros de até 2 dígitos. Caso seja digitado qualquer outro valor diferente, a function **incorrectValue( )** deve ser chamada e o usuário deve digitar um valor correto. Retorna o valor alcançado no teste pelo o usuário. Logo, em **neuromuscularFunctions.js**:

```js
flexArmTest(){

    let testResult = 0
    const regexFromZeroToNinetyNine = /(^[0-9]$)|(^[0-9]{2}$)/
    let itsRegexNumber = true
  
    do{
      console.log('Teste de Flexão de Braço')
      testResult = input.question('Digite a quantidade de repetições [00]: ')
      itsRegexNumber = validationFunctions.isRegularExpression(testResult, regexFromZeroToNinetyNine)
      validationFunctions.incorrectValue(false, !itsRegexNumber,'Neuromuscular' )
  
    }while(!itsRegexNumber)
    
    return Number(testResult)
  
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **numberOfPushUps** que recebe como valor o retorno da function **flexArmTest( )**. Em seguida mostramos o resultado:

```js
// variables neuromuscularFunctions
user.wellsBenchTest = neuromuscularFunctions.wellsBenchTest()
user.flexibilityClassification = neuromuscularFunctions.flexibilityClassification(user)
user.numberOfAbs = neuromuscularFunctions.abdominalTest()
user.abdominalClassification = neuromuscularFunctions.abdominalClassification(user)
user.numberOfPushUps = neuromuscularFunctions.flexArmTest()
```

```js
// show results neuromuscularFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Neuromuscular")
console.log(`Resultado Teste Flexibilidade Banco de Wells: ${user.wellsBenchTest} cm`)
console.log(`Classificação Flexibilidade: ${user.flexibilityClassification}`)
console.log(`Quantidade de flexões abdominais: ${user.numberOfAbs}`)
console.log(`Classificação Abdominais: ${user.abdominalClassification}`)
console.log(`Quantidade de flexões de braço: ${user.numberOfPushUps}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Neuromuscular            
===============================
Teste de flexibilidade banco de Wells
Digite a distância alcaçada [00](cm) : 31
Teste de Abdominais
Digite a quantidade de repetições em 1 min [00]: 38
Teste de Flexão de Braço
Digite a quantidade de repetições [00]: 26
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Neuromuscular            
===============================
Resultado Teste Flexibilidade Banco de Wells: 31 cm
Classificação Flexibilidade: Boa
Quantidade de flexões abdominais: 38
Classificação Abdominais: Excelente
Quantidade de flexões de braço: 26
===============================
```

### Flexão de Braço - Classificação

**flexArmClassification( )** function determina a classificação da quantidade de flexões de braço realizadas pelo usuário. Recebe como parâmetro o o objeto _**user**_ usando as propriedades **sexo**, a **idade** e a **quantidade de flexões** realizada pelo usuário. Retorna a classificação de acordo com a tabela abaixo:

| Flexão de Braço - Classificação - HOMEM | Flexão de Braço - Classificação - MULHER |
| --------------------------------------- | ---------------------------------------- |
| **Com idade entre 20 e 29 anos**        | **Com idade entre 20 e 29 anos**         |
| Flexão de Braço < 17 = "Muito Fraco"    | Flexão de Braço < 7 = "Muito Fraco"      |
| Flexão de Braço < 30 = "Fraco"          | Flexão de Braço < 16 = "Fraco"           |
| Flexão de Braço < 40 = "Regular"        | Flexão de Braço < 27 = "Regular"         |
| Flexão de Braço < 50 = "Bom"            | Flexão de Braço < 38 = "Bom"             |
| Flexão de Braço >= 50 = "Excelente"     | Flexão de Braço >= 38 = "Excelente"      |
| **Com idade entre 30 e 39 anos**        | **Com idade entre 30 e 39 anos**         |
| Flexão de Braço < 14 = "Muito Fraco"    | Flexão de Braço < 5 = "Muito Fraco"      |
| Flexão de Braço < 22 = "Fraco"          | Flexão de Braço < 13 = "Fraco"           |
| Flexão de Braço < 31 = "Regular"        | Flexão de Braço < 24 = "Regular"         |
| Flexão de Braço < 40 = "Bom"            | Flexão de Braço < 35 = "Bom"             |
| Flexão de Braço >= 40 = "Excelente"     | Flexão de Braço >= 35 = "Excelente"      |
| **Com idade entre 40 e 49 anos**        | **Com idade entre 40 e 49 anos**         |
| Flexão de Braço < 11 = "Muito Fraco"    | Flexão de Braço < 4 = "Muito Fraco"      |
| Flexão de Braço < 18 = "Fraco"          | Flexão de Braço < 10 = "Fraco"           |
| Flexão de Braço < 27 = "Regular"        | Flexão de Braço < 21 = "Regular"         |
| Flexão de Braço < 35 = "Bom"            | Flexão de Braço < 32 = "Bom"             |
| Flexão de Braço >= 35 = "Excelente"     | Flexão de Braço >= 32 = "Excelente"      |
| **Com idade entre 50 e 59 anos**        | **Com idade entre 50 e 59 anos**         |
| Flexão de Braço < 8 = "Muito Fraco"     | Flexão de Braço < 3 = "Muito Fraco"      |
| Flexão de Braço < 15 = "Fraco"          | Flexão de Braço < 8 = "Fraco"            |
| Flexão de Braço < 24 = "Regular"        | Flexão de Braço < 18 = "Regular"         |
| Flexão de Braço < 30 = "Bom"            | Flexão de Braço < 29 = "Bom"             |
| Flexão de Braço >= 30 = "Excelente"     | Flexão de Braço >= 29 = "Excelente"      |
| **Com idade entre 60 e 69 anos**        | **Com idade entre 60 e 69 anos**         |
| Flexão de Braço < 5 = "Muito Fraco"     | Flexão de Braço < 2 = "Muito Fraco"      |
| Flexão de Braço < 10 = "Fraco"          | Flexão de Braço < 6 = "Fraco"            |
| Flexão de Braço < 17 = "Regular"        | Flexão de Braço < 13 = "Regular"         |
| Flexão de Braço < 25 = "Bom"            | Flexão de Braço < 20 = "Bom"             |
| Flexão de Braço >= 25 = "Excelente"     | Flexão de Braço >= 20 = "Excelente"      |

Logo, em **neuromuscularFunctions.js**:

```js
flexArmClassification(objectValue){

    const sexNumber = objectValue.sexNumber
    const ageValue = objectValue.age
    const flexArmTestResult = objectValue.numberOfPushUps
    
    let classification = ''
    const unidentifiedSex = `[ERROR] Sexo não identificado!` 
    const ageBetweenTwentyAndTwentyNine = ageValue >= 20 && ageValue <= 29
    const ageBetweenThirtyAndThirtyNine = ageValue >= 30 && ageValue <= 39
    const ageBetweenFortyAndFortyNine = ageValue >= 40 && ageValue <= 49
    const ageBetweenFiftyAndFiftyNine = ageValue >= 50 && ageValue <= 59
    const ageBetweenSixtyAndSixtyNine = ageValue >= 60 && ageValue <= 69
    const veryPoorRating = `Muito Fraco`
    const weakRating = `Fraco`
    const regularRating = `Regular`
    const goodRating = `Bom`
    const excellentRating = `Excelente`
    const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`
  
    switch (sexNumber) {
      
      // men
      case 1:
        
        if(ageBetweenTwentyAndTwentyNine){
          
          if(flexArmTestResult < 17){
            classification = veryPoorRating
          } else if(flexArmTestResult < 30){
            classification = weakRating
          } else if(flexArmTestResult < 40){
            classification = regularRating
          } else if(flexArmTestResult < 50){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(flexArmTestResult < 14){
            classification = veryPoorRating
          } else if(flexArmTestResult < 22){
            classification = weakRating
          } else if(flexArmTestResult < 31){
            classification = regularRating
          } else if(flexArmTestResult < 40){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(flexArmTestResult < 11){
            classification = veryPoorRating
          } else if(flexArmTestResult < 18){
            classification = weakRating
          } else if(flexArmTestResult < 27){
            classification = regularRating
          } else if(flexArmTestResult < 35){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(flexArmTestResult < 8){
            classification = veryPoorRating
          } else if(flexArmTestResult < 15){
            classification = weakRating
          } else if(flexArmTestResult < 24){
            classification = regularRating
          } else if(flexArmTestResult < 30){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(flexArmTestResult < 5){
            classification = veryPoorRating
          } else if(flexArmTestResult < 10){
            classification = weakRating
          } else if(flexArmTestResult < 17){
            classification = regularRating
          } else if(flexArmTestResult < 25){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else {
          classification = classificationNotAppliedToAge
        }
  
        break;
      
      // woman
      case 2:
  
        if(ageBetweenTwentyAndTwentyNine){
          
          if(flexArmTestResult < 7){
            classification = veryPoorRating
          } else if(flexArmTestResult < 16){
            classification = weakRating
          } else if(flexArmTestResult < 27){
            classification = regularRating
          } else if(flexArmTestResult < 38){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(flexArmTestResult < 5){
            classification = veryPoorRating
          } else if(flexArmTestResult < 13){
            classification = weakRating
          } else if(flexArmTestResult < 24){
            classification = regularRating
          } else if(flexArmTestResult < 35){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(flexArmTestResult < 4){
            classification = veryPoorRating
          } else if(flexArmTestResult < 10){
            classification = weakRating
          } else if(flexArmTestResult < 21){
            classification = regularRating
          } else if(flexArmTestResult < 32){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(flexArmTestResult < 3){
            classification = veryPoorRating
          } else if(flexArmTestResult < 8){
            classification = weakRating
          } else if(flexArmTestResult < 18){
            classification = regularRating
          } else if(flexArmTestResult < 29){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(flexArmTestResult < 2){
            classification = veryPoorRating
          } else if(flexArmTestResult < 6){
            classification = weakRating
          } else if(flexArmTestResult < 13){
            classification = regularRating
          } else if(flexArmTestResult < 20){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else {
          classification = classificationNotAppliedToAge
        }
  
        break;
    
      default:
  
        classification = unidentifiedSex
  
        break;
    }
  
    return classification
  
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **flexArmClassification** que recebe como valor o retorno da function **flexArmClassification( )** passando como parâmetro o objeto _**user**_, usando as propriedades **sexo**, **idade** e **quantidade de flexões** realizadas no teste. Em seguida mostramos o resultado:

```js
// variables neuromuscularFunctions
user.wellsBenchTest = neuromuscularFunctions.wellsBenchTest()
user.flexibilityClassification = neuromuscularFunctions.flexibilityClassification(user)
user.numberOfAbs = neuromuscularFunctions.abdominalTest()
user.abdominalClassification = neuromuscularFunctions.abdominalClassification(user)
user.numberOfPushUps = neuromuscularFunctions.flexArmTest()
user.flexArmClassification = neuromuscularFunctions.flexArmClassification(user)
```

```js
// show results neuromuscularFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Neuromuscular")
console.log(`Resultado Teste Flexibilidade Banco de Wells: ${user.wellsBenchTest} cm`)
console.log(`Classificação Flexibilidade: ${user.flexibilityClassification}`)
console.log(`Quantidade de flexões abdominais: ${user.numberOfAbs}`)
console.log(`Classificação Abdominais: ${user.abdominalClassification}`)
console.log(`Quantidade de flexões de braço: ${user.numberOfPushUps}`)
console.log(`Classificação flexões de braço: ${user.flexArmClassification}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Neuromuscular            
===============================
Teste de flexibilidade banco de Wells
Digite a distância alcaçada [00](cm) : 26
Teste de Abdominais
Digite a quantidade de repetições em 1 min [00]: 30
Teste de Flexão de Braço
Digite a quantidade de repetições [00]: 24
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Neuromuscular            
===============================
Resultado Teste Flexibilidade Banco de Wells: 26 cm
Classificação Flexibilidade: Regular
Quantidade de flexões abdominais: 30
Classificação Abdominais: Regular
Quantidade de flexões de braço: 24
Classificação flexões de braço: Regular
===============================
```

Com isto chega ao final a parte **Testes Neuromuscular** do projeto. Como ficaram os arquivos do programa até esta etapa:

Arquivo **neuromuscularFunctions.js** completo:

```js
/* neuromuscular functions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const neuromuscularFunctions = {

  wellsBenchTest(){
  
    let testResult = 0
    const regexFromZeroToNinetyNine = /(^[0-9]$)|(^[0-9]{2}$)/
    let itsRegexNumber = true
    
    do{
      console.log(`Teste de flexibilidade banco de Wells`)
      testResult = input.question(`Digite a distância alcaçada [00](cm) : `)
      itsRegexNumber = validationFunctions.isRegularExpression(testResult, regexFromZeroToNinetyNine)
      validationFunctions.incorrectValue(false, !itsRegexNumber, `Neuromuscular`)
  
    }while(!itsRegexNumber)
    
    return Number(testResult)
  
  },

  flexibilityClassification(objectValue){

    const sexNumber = objectValue.sexNumber
    const ageValue = objectValue.age
    const flexibilityTestResult = objectValue.wellsBenchTest
  
    let classification = ``
    const unidentifiedSex = `[ERROR] Sexo não identificado!`
    const ageLessThanTwenty = ageValue > 0 && ageValue < 20
    const ageLessThanThirty = ageValue < 30
    const ageLessThanForty = ageValue < 40
    const ageLessThanFifty = ageValue < 50
    const ageLessThanSixty = ageValue < 60
    const ageLessThanSeventy = ageValue < 70
    const weakRating = `Fraca`
    const regularRating = `Regular`
    const goodRating = `Boa`
    const excellentRating = `Excelente`
    const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`
  
  
    switch (sexNumber) {
      
      // men
      case 1:
        
        if(ageLessThanTwenty){
          
          if(flexibilityTestResult < 24){
            classification = weakRating
          } else if(flexibilityTestResult < 29){
            classification = regularRating
          } else if(flexibilityTestResult < 39){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageLessThanThirty){
          
          if(flexibilityTestResult < 25){
            classification = weakRating
          } else if(flexibilityTestResult < 30){
            classification = regularRating
          } else if(flexibilityTestResult < 40){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageLessThanForty){
          
          if(flexibilityTestResult < 23){
            classification = weakRating
          } else if(flexibilityTestResult < 28){
            classification = regularRating
          } else if(flexibilityTestResult < 38){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageLessThanFifty){
          
          if(flexibilityTestResult < 18){
            classification = weakRating
          } else if(flexibilityTestResult < 24){
            classification = regularRating
          } else if(flexibilityTestResult < 35){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageLessThanSixty){
          
          if(flexibilityTestResult < 16){
            classification = weakRating
          } else if(flexibilityTestResult < 24){
            classification = regularRating
          } else if(flexibilityTestResult < 35){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageLessThanSeventy){
          
          if(flexibilityTestResult < 15){
            classification = weakRating
          } else if(flexibilityTestResult < 20){
            classification = regularRating
          } else if(flexibilityTestResult < 33){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else {
          classification = classificationNotAppliedToAge
        }
  
        break;
      
      // woman
      case 2:
  
        if(ageLessThanTwenty){
          
          if(flexibilityTestResult < 29){
            classification = weakRating
          } else if(flexibilityTestResult < 34){
            classification = regularRating
          } else if(flexibilityTestResult < 43){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageLessThanThirty){
          
          if(flexibilityTestResult < 28){
            classification = weakRating
          } else if(flexibilityTestResult < 33){
            classification = regularRating
          } else if(flexibilityTestResult < 41){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageLessThanForty){
          
          if(flexibilityTestResult < 27){
            classification = weakRating
          } else if(flexibilityTestResult < 32){
            classification = regularRating
          } else if(flexibilityTestResult < 41){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageLessThanFifty){
          
          if(flexibilityTestResult < 25){
            classification = weakRating
          } else if(flexibilityTestResult < 30){
            classification = regularRating
          } else if(flexibilityTestResult < 38){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageLessThanSixty){
          
          if(flexibilityTestResult < 25){
            classification = weakRating
          } else if(flexibilityTestResult < 30){
            classification = regularRating
          } else if(flexibilityTestResult < 39){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageLessThanSeventy){
          
          if(flexibilityTestResult < 23){
            classification = weakRating
          } else if(flexibilityTestResult < 27){
            classification = regularRating
          } else if(flexibilityTestResult < 35){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else {
          classification = classificationNotAppliedToAge
        }
  
        break;
    
      default:
        classification = unidentifiedSex
        break;
    }
  
    return classification
  },
  
  abdominalTest(){

    let testResult = 0
    const regexFromZeroToNinetyNine = /(^[0-9]$)|(^[0-9]{2}$)/
    let itsRegexNumber = true
  
    do{
      console.log('Teste de Abdominais')
      testResult = input.question('Digite a quantidade de repetições em 1 min [00]: ')
      itsRegexNumber = validationFunctions.isRegularExpression(testResult, regexFromZeroToNinetyNine)
      validationFunctions.incorrectValue(false, !itsRegexNumber,'Neuromuscular' )
  
    }while(!itsRegexNumber)
    
    return Number(testResult)
  
  },

  abdominalClassification(objectValue){
  
    const sexNumber = objectValue.sexNumber
    const ageValue = objectValue.age
    const abdominalTestResult = objectValue.numberOfAbs
  
    let classification = ``
    const unidentifiedSex = `[ERROR] Sexo não identificado!` 
    const ageBetweenTwentyAndTwentyNine = ageValue >= 20 && ageValue <= 29
    const ageBetweenThirtyAndThirtyNine = ageValue >= 30 && ageValue <= 39
    const ageBetweenFortyAndFortyNine = ageValue >= 40 && ageValue <= 49
    const ageBetweenFiftyAndFiftyNine = ageValue >= 50 && ageValue <= 59
    const ageBetweenSixtyAndSixtyNine = ageValue >= 60 && ageValue <= 69
    const veryPoorRating = `Muito Fraco`
    const weakRating = `Fraco`
    const regularRating = `Regular`
    const goodRating = `Bom`
    const excellentRating = `Excelente`
    const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`
  
    switch (sexNumber) {
      
      // men
      case 1:
        
        if(ageBetweenTwentyAndTwentyNine){
          
          if(abdominalTestResult < 30){
            classification = veryPoorRating
          } else if(abdominalTestResult < 35){
            classification = weakRating
          } else if(abdominalTestResult < 40){
            classification = regularRating
          } else if(abdominalTestResult < 45){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(abdominalTestResult < 22){
            classification = veryPoorRating
          } else if(abdominalTestResult < 27){
            classification = weakRating
          } else if(abdominalTestResult < 32){
            classification = regularRating
          } else if(abdominalTestResult < 37){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(abdominalTestResult < 17){
            classification = veryPoorRating
          } else if(abdominalTestResult < 21){
            classification = weakRating
          } else if(abdominalTestResult < 26){
            classification = regularRating
          } else if(abdominalTestResult < 32){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(abdominalTestResult < 12){
            classification = veryPoorRating
          } else if(abdominalTestResult < 17){
            classification = weakRating
          } else if(abdominalTestResult < 23){
            classification = regularRating
          } else if(abdominalTestResult < 29){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(abdominalTestResult < 9){
            classification = veryPoorRating
          } else if(abdominalTestResult < 13){
            classification = weakRating
          } else if(abdominalTestResult < 19){
            classification = regularRating
          } else if(abdominalTestResult < 25){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else {
          classification = classificationNotAppliedToAge
        }
  
        break;
      
      // woman
      case 2:
  
        if(ageBetweenTwentyAndTwentyNine){
          
          if(abdominalTestResult < 26){
            classification = veryPoorRating
          } else if(abdominalTestResult < 30){
            classification = weakRating
          } else if(abdominalTestResult < 35){
            classification = regularRating
          } else if(abdominalTestResult < 40){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(abdominalTestResult < 21){
            classification = veryPoorRating
          } else if(abdominalTestResult < 25){
            classification = weakRating
          } else if(abdominalTestResult < 30){
            classification = regularRating
          } else if(abdominalTestResult < 35){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(abdominalTestResult < 16){
            classification = veryPoorRating
          } else if(abdominalTestResult < 20){
            classification = weakRating
          } else if(abdominalTestResult < 25){
            classification = regularRating
          } else if(abdominalTestResult < 30){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(abdominalTestResult < 11){
            classification = veryPoorRating
          } else if(abdominalTestResult < 15){
            classification = weakRating
          } else if(abdominalTestResult < 20){
            classification = regularRating
          } else if(abdominalTestResult < 25){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(abdominalTestResult < 6){
            classification = veryPoorRating
          } else if(abdominalTestResult < 10){
            classification = weakRating
          } else if(abdominalTestResult < 15){
            classification = regularRating
          } else if(abdominalTestResult < 20){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else {
          classification = classificationNotAppliedToAge
        }
  
        break;
    
      default:
  
        classification = unidentifiedSex
  
        break;
    }
  
    return classification
  
  },

  flexArmTest(){

    let testResult = 0
    const regexFromZeroToNinetyNine = /(^[0-9]$)|(^[0-9]{2}$)/
    let itsRegexNumber = true
  
    do{
      console.log('Teste de Flexão de Braço')
      testResult = input.question('Digite a quantidade de repetições [00]: ')
      itsRegexNumber = validationFunctions.isRegularExpression(testResult, regexFromZeroToNinetyNine)
      validationFunctions.incorrectValue(false, !itsRegexNumber,'Neuromuscular' )
  
    }while(!itsRegexNumber)
    
    return Number(testResult)
  
  },

  flexArmClassification(objectValue){

    const sexNumber = objectValue.sexNumber
    const ageValue = objectValue.age
    const flexArmTestResult = objectValue.numberOfPushUps
    
    let classification = ''
    const unidentifiedSex = `[ERROR] Sexo não identificado!` 
    const ageBetweenTwentyAndTwentyNine = ageValue >= 20 && ageValue <= 29
    const ageBetweenThirtyAndThirtyNine = ageValue >= 30 && ageValue <= 39
    const ageBetweenFortyAndFortyNine = ageValue >= 40 && ageValue <= 49
    const ageBetweenFiftyAndFiftyNine = ageValue >= 50 && ageValue <= 59
    const ageBetweenSixtyAndSixtyNine = ageValue >= 60 && ageValue <= 69
    const veryPoorRating = `Muito Fraco`
    const weakRating = `Fraco`
    const regularRating = `Regular`
    const goodRating = `Bom`
    const excellentRating = `Excelente`
    const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`
  
    switch (sexNumber) {
      
      // men
      case 1:
        
        if(ageBetweenTwentyAndTwentyNine){
          
          if(flexArmTestResult < 17){
            classification = veryPoorRating
          } else if(flexArmTestResult < 30){
            classification = weakRating
          } else if(flexArmTestResult < 40){
            classification = regularRating
          } else if(flexArmTestResult < 50){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(flexArmTestResult < 14){
            classification = veryPoorRating
          } else if(flexArmTestResult < 22){
            classification = weakRating
          } else if(flexArmTestResult < 31){
            classification = regularRating
          } else if(flexArmTestResult < 40){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(flexArmTestResult < 11){
            classification = veryPoorRating
          } else if(flexArmTestResult < 18){
            classification = weakRating
          } else if(flexArmTestResult < 27){
            classification = regularRating
          } else if(flexArmTestResult < 35){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(flexArmTestResult < 8){
            classification = veryPoorRating
          } else if(flexArmTestResult < 15){
            classification = weakRating
          } else if(flexArmTestResult < 24){
            classification = regularRating
          } else if(flexArmTestResult < 30){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(flexArmTestResult < 5){
            classification = veryPoorRating
          } else if(flexArmTestResult < 10){
            classification = weakRating
          } else if(flexArmTestResult < 17){
            classification = regularRating
          } else if(flexArmTestResult < 25){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else {
          classification = classificationNotAppliedToAge
        }
  
        break;
      
      // woman
      case 2:
  
        if(ageBetweenTwentyAndTwentyNine){
          
          if(flexArmTestResult < 7){
            classification = veryPoorRating
          } else if(flexArmTestResult < 16){
            classification = weakRating
          } else if(flexArmTestResult < 27){
            classification = regularRating
          } else if(flexArmTestResult < 38){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(flexArmTestResult < 5){
            classification = veryPoorRating
          } else if(flexArmTestResult < 13){
            classification = weakRating
          } else if(flexArmTestResult < 24){
            classification = regularRating
          } else if(flexArmTestResult < 35){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(flexArmTestResult < 4){
            classification = veryPoorRating
          } else if(flexArmTestResult < 10){
            classification = weakRating
          } else if(flexArmTestResult < 21){
            classification = regularRating
          } else if(flexArmTestResult < 32){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(flexArmTestResult < 3){
            classification = veryPoorRating
          } else if(flexArmTestResult < 8){
            classification = weakRating
          } else if(flexArmTestResult < 18){
            classification = regularRating
          } else if(flexArmTestResult < 29){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(flexArmTestResult < 2){
            classification = veryPoorRating
          } else if(flexArmTestResult < 6){
            classification = weakRating
          } else if(flexArmTestResult < 13){
            classification = regularRating
          } else if(flexArmTestResult < 20){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else {
          classification = classificationNotAppliedToAge
        }
  
        break;
    
      default:
  
        classification = unidentifiedSex
  
        break;
    }
  
    return classification
  
  },

}

module.exports = {
  neuromuscularFunctions
}
```

Arquivo **saf.js** completo:

```js
/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')
const { anamnesisQuestions } = require('./anamnesisFunctions')
const { cardiorespiratoryFunctions } = require('./cardiorespiratoryFunctions')
const { percentageValues } = require('./cardiorespiratoryFunctions')
const { anthropometryFunctions } = require('./anthropometryFunctions')
const { neuromuscularFunctions } = require('./neuromuscularFunctions')

const user = { }

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalDataFunctions
user.name = personalDataFunctions.userName()
user.birthdayInBrazilianFormat =  personalDataFunctions.dateOfBirth()
user.birthdayInFullFormat = personalDataFunctions.dateInFullFormat(user.birthdayInBrazilianFormat)
user.age = personalDataFunctions.age(user)
user.sexNumber = personalDataFunctions.sexNumber()
user.sex = personalDataFunctions.showSex(user)
user.profession = personalDataFunctions.userProfession()
user.userEmail = personalDataFunctions.userEmail()
user.phoneNumber = personalDataFunctions.phoneNumber()

// console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variables anamnesisFunctions
user.questionnairePARQ = anamnesisFunctions.questionnairePARQ()
user.currentPhysicalState = anamnesisFunctions.currentPhysicalState()
user.pastIllness = anamnesisFunctions.questions(anamnesisQuestions.pastIllness)
user.illnessesFamily = anamnesisFunctions.questions(anamnesisQuestions.illnessesInTheFamily)
user.surgeryPerformed = anamnesisFunctions.questions(anamnesisQuestions.surgeryPerformed)
user.useMedication = anamnesisFunctions.questions(anamnesisQuestions.useMedication)
user.sportsInjuries = anamnesisFunctions.questions(anamnesisQuestions.sportsInjuries)
user.trainingObjective = anamnesisFunctions.trainingObjective()
user.daysAvailableForTraining = anamnesisFunctions.daysAvailableForTraining()
user.timeAvailablePerTraining = anamnesisFunctions.timeAvailablePerTraining()

// console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Cardiorrespiratório")

// variables cardiorespiratoryFunctions
user.restingHeartRate = cardiorespiratoryFunctions.restingHeartRate()
user.maximumHeartRate = cardiorespiratoryFunctions.maximumHeartRate(user)
user.percentageValues = percentageValues
user.workingHeartRate = cardiorespiratoryFunctions.workingHeartRate(user)
user.restingBloodPressure = cardiorespiratoryFunctions.bloodPressure()
user.classificationBloodPressure = cardiorespiratoryFunctions.classificationOfBloodPressure(user)

// console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")

// variables anthropometryFunctions
user.bodyWeight = anthropometryFunctions.bodyWeight()
user.bodyStature = anthropometryFunctions.stature()
user.bodyMassIndex = anthropometryFunctions.bodyMassIndex(user)
user.bodyMassIndexClassification = anthropometryFunctions.bodyMassIndexClassification(user)
user.bodyPerimeter = anthropometryFunctions.bodyPerimetry()
user.hipWaistRatio = anthropometryFunctions.hipWaistRatio(user)
user.waistHipRatioClassification = anthropometryFunctions.waistHipRatioClassification(user)
user.waistCircumference = anthropometryFunctions.waistCircumferenceClassification(user)
user.subcutaneousFolds = anthropometryFunctions.subcutaneousMeasures()
user.fatPercentage = anthropometryFunctions.fatPercentage(user)
user.fatPercentageClassification = anthropometryFunctions.fatPercentageClassification(user)
user.fatBodyMass = anthropometryFunctions.fatBodyMass(user)
user.leanBodyMass = anthropometryFunctions.leanBodyMass(user)
user.expectedIdealBodyMass = anthropometryFunctions.expectedIdealBodyMass(user)

// console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Neuromuscular")

// variables neuromuscularFunctions
user.wellsBenchTest = neuromuscularFunctions.wellsBenchTest()
user.flexibilityClassification = neuromuscularFunctions.flexibilityClassification(user)
user.numberOfAbs = neuromuscularFunctions.abdominalTest()
user.abdominalClassification = neuromuscularFunctions.abdominalClassification(user)
user.numberOfPushUps = neuromuscularFunctions.flexArmTest()
user.flexArmClassification = neuromuscularFunctions.flexArmClassification(user)

// show results personalDataFunctions
// console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${user.name}`)
console.log(`Data de nascimento: ${user.birthdayInBrazilianFormat}`)
console.log(`Idade: ${user.age} anos`)
console.log(`Sexo: ${user.sex}`)
console.log(`Profissão: ${user.profession}`)
console.log(`E-mail: ${user.userEmail}`)
console.log(`Celular: ${user.phoneNumber}`)

// show results anamnesisFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")
console.log(`Questionário PAR-Q: ${user.questionnairePARQ}`)
console.log(`Estado físico: ${anamnesisFunctions.showPhysicalState(user)}`)
console.log(`Doença Pregressa: ${user.pastIllness}`)
console.log(`Doença Pregressa na Família: ${user.illnessesFamily}`)
console.log(`Cirurgia: ${user.surgeryPerformed}`)
console.log(`Uso de Medicamento: ${user.useMedication}`)
console.log(`Lesão Desportiva: ${user.sportsInjuries}`)
console.log(`Objetivo do treino: ${user.trainingObjective}`)
console.log(`Dias disponíveis para treinar: ${user.daysAvailableForTraining} dias.`)
console.log(`Tempo disponível para treino: ${user.timeAvailablePerTraining} minutos.`)

// show results cardiorespiratoryFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Cardiorespiratório")
console.log(`Frequência Cardíaca de Repouso: ${user.restingHeartRate} bpm.`)
console.log(`Frequência Cardíaca Máxima: ${user.maximumHeartRate} bpm.`)
cardiorespiratoryFunctions.showWorkingHeartRate(user)
console.log(`Pressão Arterial de Repouso: ${user.restingBloodPressure.bloodPressureString} mmHg.`)
console.log(`Classificação da Pressão Arterial`)
console.log(`Sistólica: ${user.classificationBloodPressure.systolicClassification} / Diastólica: ${user.classificationBloodPressure.diastolicClassification}`)

// show results anthropometryFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")
console.log(`Peso Corporal: ${user.bodyWeight} kilos`)
console.log(`Estatura Corporal: ${user.bodyStature} metros`)
console.log(`Índice de Massa Corporal - IMC: ${user.bodyMassIndex}`)
console.log(`Classificação IMC: ${user.bodyMassIndexClassification}`)
anthropometryFunctions.showPerimeter(user)
console.log(`Relação Cintura Quadril- RCQ: ${user.hipWaistRatio}`)
console.log(`Classificação RCQ: ${user.waistHipRatioClassification}`)
console.log(`Circunfência Cintura - Classificação: ${user.waistCircumference}`)
anthropometryFunctions.showSubcutaneousFolds(user)
console.log(`Percentual de Gordura: ${user.fatPercentage}%`)
console.log(`Classificação % Gordura: ${user.fatPercentageClassification}`)
console.log(`Massa Corporal Gorda: ${user.fatBodyMass} kilos`)
console.log(`Massa Corporal Magra: ${user.leanBodyMass} kilos`)
console.log(`Massa Corporal Ideal Prevista: ${user.expectedIdealBodyMass} kilos`)

// show results neuromuscularFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Neuromuscular")
console.log(`Resultado Teste Flexibilidade Banco de Wells: ${user.wellsBenchTest} cm`)
console.log(`Classificação Flexibilidade: ${user.flexibilityClassification}`)
console.log(`Quantidade de flexões abdominais: ${user.numberOfAbs}`)
console.log(`Classificação Abdominais: ${user.abdominalClassification}`)
console.log(`Quantidade de flexões de braço: ${user.numberOfPushUps}`)
console.log(`Classificação flexões de braço: ${user.flexArmClassification}`)
headerFunctions.baseboard()
```

Ao executar o progama:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Nome: Maria da Silva
Data de nascimento: 14/08/2001
Idade: 20 anos
Sexo: Feminino
Profissão: Arquiteta
E-mail: maria@silva.com
Celular: 27909182736
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Não'!
Estado físico: Sedentário
Doença Pregressa: Sem doença pregressa.
Doença Pregressa na Família: Sem doença pregressa na família.
Cirurgia: Nunca realizou procedimento cirúrgico.
Uso de Medicamento: Não faz uso de medicamento.
Lesão Desportiva: Nunca sofreu lesão desportiva.
Objetivo do treino: Bem-estar e Saúde
Dias disponíveis para treinar: 4 dias.
Tempo disponível para treino: 45 minutos.
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Cardiorespiratório            
===============================
Frequência Cardíaca de Repouso: 60 bpm.
Frequência Cardíaca Máxima: 200 bpm.
Frequência Cardíaca de Treino:
       40% = 116 bpm
       45% = 123 bpm
       50% = 130 bpm
       55% = 137 bpm
       60% = 144 bpm
       65% = 151 bpm
       70% = 158 bpm
       75% = 165 bpm
       80% = 172 bpm
       85% = 179 bpm
       90% = 186 bpm
       95% = 193 bpm
Pressão Arterial de Repouso: 120/80 mmHg.
Classificação da Pressão Arterial
Sistólica: Normal / Diastólica: Normal
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 63 kilos
Estatura Corporal: 1.63 metros
Índice de Massa Corporal - IMC: 23.71
Classificação IMC: Peso Normal
 - Perimetria Corporal - 
   Braço: 12 cm
   Antebraço: 23 cm
   Cintura: 34 cm
   Quadril: 45 cm
   Coxa: 56 cm
   Panturrilha: 67 cm
Relação Cintura Quadril- RCQ: 0.76
Classificação RCQ: Moderado Risco
Circunfência Cintura - Classificação: Nenhum Risco
 - Dobras Cutâneas - 
   Triciptal: 10 mm
   Subescapular: 18 mm
   Peitoral: 7 mm
   SupraIliaca: 21 mm
   Abdominal: 24 mm
   Coxa: 17 mm
   Panturrilha: 9 mm
Percentual de Gordura: 18.18%
Classificação % Gordura: Abaixo da média
Massa Corporal Gorda: 11.5 kilos
Massa Corporal Magra: 51.5 kilos
Massa Corporal Ideal Prevista: 66.9 kilos
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Neuromuscular            
===============================
Resultado Teste Flexibilidade Banco de Wells: 32 cm
Classificação Flexibilidade: Regular
Quantidade de flexões abdominais: 30
Classificação Abdominais: Regular
Quantidade de flexões de braço: 8
Classificação flexões de braço: Fraco
===============================
```

## Testes Aeróbicos

Vamos para a próxima etapa onde vamos construir a parte dos **testes aeróbicos**. Para isto vamos criar o arquivo **aerobicFunctions.js**. Dentro deste arquivo vamos:

- Criar a variável **input**;
- Requerer a variável **validationFunctions**;
- Criar uma variável objeto **aerobicFunctions**;
- Exportar essa variável.

```js
/* aerobic functions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const aerobicFunctions = {

}

module.exports = {
  aerobicFunctions
}
```

Agora vamos começar criando as functions de **Testes Aeróbicos**. Esses testes irão determinar o VO² máx. do usuário, que nada mais é do que a sua capacidade cardiorespiratória para realizar exercícios físicos.

### VO² máx

Aqui vamos criar a function **voTwoMax( )** que vai determinar o **VO² máx** do usuário. Esta function terá como parâmetro o objeto **user**, _**objectValue**_, que será usado nas functions dos testes. Nesta function o usuário irá escolher qual o protocolo de teste ele quer fazer, através de um menu que irá aparecer. Este menu será acionado através da function **menuVoTwoMax( )**. Este menu só aceitará números de 1 a 4 e caso o usuário digite qualquer valor diferente, a function **incorrectValue( )** deve ser chamada e ele terá que escolher novamente. O menu terá como opções os seguintes protocolos:

- [1] Cicloergômetro - Astrand-Rhyming
- [2] Cooper - 12 min
- [3] Caminhada de 1600 - Rockport
- [4] Banco - McArdle

 Depois que o usuário escolher um protocolo, a function correspondente ao protocolo escolhido será chamada e o determina o **VO² máx**. Logo, em **aerobicFunctions.js**:

```js
menuVoTwoMax(){
  
    let choise = 0
    let validChoise = false
    const regexFromOneToFour = /(^[1]$)|(^[2]$)|(^[3]$)|(^[4]$)/
  
    do{
      
      console.log(`Escolha um teste: `)
      console.log(`[1] Cicloergômetro - Astrand-Rhyming`)
      console.log(`[2] Cooper - 12 min`)
      console.log(`[3] Caminhada de 1600 - Rockport`)
      console.log(`[4] Banco - McArdle`)
      choise = input.question(``)
  
      validChoise = validationFunctions.isRegularExpression(choise, regexFromOneToFour)
      validationFunctions.incorrectValue(false, !validChoise, "Aeróbico")
  
    }while(!validChoise)
  
    return Number(choise)
  
  },
```

 ```js
 voTwoMax(objectValue){
 
     let voTwoMaxValue = 0
     let protocol = aerobicFunctions.menuVoTwoMax()
   
     switch (protocol) {
   
       case 1:
         voTwoMaxValue = aerobicFunctions.cycleErgometerAstrandRhyming(objectValue)
         break;
       
       case 2:
         voTwoMaxValue = aerobicFunctions.cooperTwelveMin()
         break;
   
       case 3:
         voTwoMaxValue = aerobicFunctions.oneThousandSixHundredFromRockport(objectValue) 
         break;
   
       case 4:
         voTwoMaxValue = aerobicFunctions.bankMcArdle(objectValue)
         break;
     
       default:
         voTwoMaxValue = 0
         break;
     }
   
     return Number(voTwoMaxValue)
   
   },
 ```

### Cicloergômetro - Astrand-Rhyming

**cycleErgometerAstrandRhyming( )** function será o nosso primeiro protocolo. Ele recebe o objeto _**user**_ como parâmetro, usando as propriedades **frequência cardíaca máxima**, a **frequência cardíaca de repouso** e o **peso corporal** do usuário. Dentro desta function vamos precisar da frequência cardíaca do usuário no 5º e 6º minuto de teste. Para isto vamos criar a function **validHeartRate( )** para validar as frequências digitadas pelo usuário. Esta function só aceitará números de 0 a 200. Caso qualquer outro valor seja digitado, a function **incorrectValue( )** deve ser chamada e o valor correto deve ser colocado. A function **validHeartRate( )** terá como parâmetro uma **Expressão Regular** e o **minuto** do teste e retorna a frequência cardíaca digitada pelo usuário. Logo, em **aerobicFunctions.js**:

```js
validHeartRate(regex, minute){

    let heartRateValue = 0
    let validHeartRate = false
  
    do{
  
      console.log(`Cicloergômetro - Astrand-Rhyming:`)
      heartRateValue = input.question(`Digite a frequência cardíaca do ${minute}º minuto de teste (bpm): `)
      validHeartRate = validationFunctions.isRegularExpression(heartRateValue, regex)
      validationFunctions.incorrectValue(false, !validHeartRate, "Aeróbico")
  
    }while(!validHeartRate)
  
    return Number(heartRateValue)
  },
```

Dentro da function **cycleErgometerAstrandRhyming( )** vamos precisar informar a **carga do teste**, para isto vamos criar a function **chargeCycleErgometerAstrandRhyming( )** que vai solicitar do usuário digitar o valor da carga, sendo aceito apenas números de 0 a 200. Caso qualquer outro valor seja digitado, a function **incorrectValue( )** deve ser chamada e o valor correto deve ser colocado. Esta function terá como parâmetro uma **expressão regular** e retorna o valor da carga digitada pelo usuário. Logo, em **aerobicFunctions.js**:

```js
chargeCycleErgometerAstrandRhyming(regex){

    let charge = 0
    let validCharge = false
  
    do{
  
      console.log(`Cicloergômetro - Astrand-Rhyming:`)
      charge = input.question(`Digite a carga utilizada no teste (W): `)
      validCharge = validationFunctions.isRegularExpression(charge, regex)
      validationFunctions.incorrectValue(false, !validCharge, "Aeróbico")
  
    }while(!validCharge)
  
    return Number(charge)
  },
```

Enfim vamos criar a function **cycleErgometerAstrandRhyming( )**. Primeiro vamos criar a **expressão regular** que será usada nas duas function anteriores: **regexFromOneToTwoHundred**. Em seguida vamos criar duas variáveis que vão receber as frequências cardíacas do 5º e 6º minuto de teste: **fifthMinuteValue** e **sixthMinuteValue**. Em seguida vamos criar a variável que vai receber a carga utilizada no teste: **chargeValue**. Com estes valores e também os valores do objeto passado como parâmetro, vamos determinar: 

- Frequência cardíaca de esforço - **exertionalHeartRate**

  Frequência cardíaca de esforço = (Frequência cardíaca do 5º minuto + Frequência cardíaca do 6º minuto) / 2

- VO² de Carga - **loadVO2**

  VO²Carga = (0,129 + ( 0,014 * carga do teste ))

- VO² máx.(L.min) - **VO2max_L_min**

  VO² máx.(L.min) = ((( frequencia cardíaca máxima - frequencia cardíaca de repouso ) / ( Frequência cardíaca de esforço - frequencia cardíaca de repouso )) * VO2 de Carga)

- VO² máx.(mL(kg.min) - **VO2max_mL_Kg_min**

  VO² máx.(mL(kg.min) = ((1000 * VO2 máximo (litro/minuto) ) / Peso Corporal)

O valor retornado pela function **cycleErgometerAstrandRhyming( )** será o **VO² máx.(mL(kg.min)**. Logo, em **aerobicFunctions.js**:

```js
cycleErgometerAstrandRhyming(objectValue){

    const maximumHeartRate = objectValue.maximumHeartRate
    const restingHeartRate = objectValue.restingHeartRate
    const bodyWeight = objectValue.bodyWeight
  
    const regexFromOneToTwoHundred = /(^[0-9]$)|(^[0-9]{2}$)|(^[1][0-9]{2}$)|(^[2][0][0])/
    const fifthMinuteValue = aerobicFunctions.validHeartRate(regexFromOneToTwoHundred, 5)
    const sixthMinuteValue = aerobicFunctions.validHeartRate(regexFromOneToTwoHundred, 6)
    const chargeValue = aerobicFunctions.chargeCycleErgometerAstrandRhyming(regexFromOneToTwoHundred)
    const exertionalHeartRate = Number(((fifthMinuteValue + sixthMinuteValue) / 2))
    const loadVO2 = Number((0.129 + ( 0.014 * chargeValue )))
    const VO2max_L_min =  Number(((( maximumHeartRate - restingHeartRate ) / ( exertionalHeartRate - restingHeartRate )) * loadVO2))
    const VO2max_mL_Kg_min = Number(((1000 * VO2max_L_min ) / bodyWeight).toFixed(2))
  
    return VO2max_mL_Kg_min
  
  },
```

Em **saf.js** vamos atribuir ao objeto ***user*** a propriedade **voTwoMax** que vai receber como valor a function **voTwoMax( )**:

```js
// console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Aeróbico")

// variables aerobicFunctions
user.voTwoMax = aerobicFunctions.voTwoMax(user)
```

Em seguida, vamos mostrar o resultado:

```js
// show results aerobicFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Aeróbico")
console.log(`VO²máx (mL(kg.min): ${user.voTwoMax}`)
headerFunctions.baseboard()
```

Ao executar o programa:

 ```shell
 ===============================
   SISTEMA DE AVALIAÇÃO FÍSICA  
 ===============================
            Aeróbico            
 ===============================
 Escolha um teste: 
 [1] Cicloergômetro - Astrand-Rhyming
 [2] Cooper - 12 min
 [3] Caminhada de 1600 - Rockport
 [4] Banco - McArdle
 1
 Cicloergômetro - Astrand-Rhyming:
 Digite a frequência cardíaca do 5º minuto de teste (bpm): 130
 Cicloergômetro - Astrand-Rhyming:
 Digite a frequência cardíaca do 6º minuto de teste (bpm): 140
 Cicloergômetro - Astrand-Rhyming:
 Digite a carga utilizada no teste (W): 150
 ```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Aeróbico            
===============================
VO²máx (mL(kg.min): 39.84
===============================
```

### Cooper - 12 min

**cooperTwelveMin( )** function, determina o VO² máx.(mL(kg.min) do usuário após ele inserir a distância que atingiu no teste, em metros. Esta function aceitará apenas números inteiros de até 4 dígitos, 0 até 9999. Caso outro valor seja digitado, a function **incorrectValue( )** deve ser chamada e o usuário precisa digitar a distância novamente. De posse da distância em metros, a function retorna o VO² máx.(mL(kg.min) determinado pela fórmula:

VO² máx= ((Distância percorrida (metros) - 504.9) / 44.73)

Logo, em **aerobicFunctions.js**:

```js
cooperTwelveMin(){

    let distance = 0
    let validDistance = false
    let VO2max_mL_Kg_min = 0
    let regexFrom0To9999 = /(^[0-9]$)|(^[0-9]{2}$)|(^[0-9]{3}$)|(^[0-9]{4}$)/
  
    do{
  
      console.log(`Teste de Cooper - 12 min:`)
      distance = input.question(`Digite a distância atingida pelo usuário (m): `)
      validDistance = validationFunctions.isRegularExpression(distance, regexFrom0To9999)
      validationFunctions.incorrectValue(false, !validDistance, "Aeróbico")
  
    }while(!validDistance)
  
    VO2max_mL_Kg_min = Number(((distance - 504.9) / 44.73).toFixed(2))
  
    return VO2max_mL_Kg_min
  
  },
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Aeróbico            
===============================
Escolha um teste: 
[1] Cicloergômetro - Astrand-Rhyming
[2] Cooper - 12 min
[3] Caminhada de 1600 - Rockport
[4] Banco - McArdle
2
Teste de Cooper - 12 min:
Digite a distância atingida pelo usuário (m): 2500
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Aeróbico            
===============================
VO²máx (mL(kg.min): 44.6
===============================
```

### Caminhada de 1600 - Rockport

**oneThousandSixHundredFromRockport( )** determina o VO²máx (ml.kg-¹.min-¹) do usuário a partir do teste de caminhada de 1600 metros de Rockport. Esta function recebe como parâmetro o objeto _**user**_, usando as propriedades **idade** e **peso coporal**. Dentro dela vamos precisar que o usuário digite o **tempo** que ele realizou o teste em **minutos** e **segundos**, para isto vamos usar a function **rockportTestTime( )** que vai validar este tempo. Esta function recebe como parâmetro oo **nome do teste** e deve aceitar apenas números inteiros de no máximo dois dígitos, sendo de 0 até 59. Caso outro valor seja digitado, a function **incorrectValue( )** deverá ser chamada e o usuário terá que digitar o tempo novamente. Retorna o **tempo em minutos** digitado pelo usuário. Logo, em **aerobicFunctions.js**:

```js
rockportTestTime(testName){

    let rockportTestTime = 0
    let minutes = 0
    let seconds = 0
    let validMinutes = false
    let validSeconds = false
    let regexMinutesAndSeconds = /(^[0-9]$)|(^[0-5][0-9]$)/ 
  
    do{
  
      console.log(`${testName}`)
      minutes = input.question(`Tempo que levou para chegar (minutos): `)
      seconds = input.question(`Tempo que levou para chegar (segundos): `)
      validMinutes = validationFunctions.isRegularExpression(minutes, regexMinutesAndSeconds)
      validSeconds = validationFunctions.isRegularExpression(seconds, regexMinutesAndSeconds)
      validationFunctions.incorrectValue(!validMinutes, !validSeconds, "Aeróbico")
  
    }while(!validMinutes || !validSeconds)
  
    rockportTestTime = (Number(minutes) + (Number(seconds) / 60))
    
    return rockportTestTime
  },
```

O usuário também precisa informar a frequência cardíaca ao final do teste, para isto vamos criar a function **testHeartRate( )**. Está function terá como **parâmetro** o **nome do teste** e aceitará apenas números inteiros de até três dígitos, sendo de 0 até 220. Caso outro valor seja digitado, a function **incorrectValue( )** deverá ser chamada e o usuário terá que digitar a frequência novamente. Retorna a frequêncioa cardíaca ao final do teste digitada pelo usuário. Logo, em **aerobicFunctions.js**:

```js
testHeartRate(testName){

    let testHeartRate = 0
    let validTestHeartRate = false
    let isNumberFromZeroToTwoHundredAndTwenty = /(^[0-9]$)|(^[0-9]{2}$)|(^[1][0-9]{2}$)|(^[2][0-1][0-9]$)|(^[2][2][0]$)/ 
  
    do{
  
      console.log(`${testName}`)
      testHeartRate = input.question(`Frequência Cardíaca ao final do teste (bpm): `)
      validTestHeartRate = validationFunctions.isRegularExpression(testHeartRate, isNumberFromZeroToTwoHundredAndTwenty)
      validationFunctions.incorrectValue(false, !validTestHeartRate, "Aeróbico")
  
    }while(!validTestHeartRate)
    
    return Number(testHeartRate)
  
  },
```

Agora com o tempo do teste e com a frequência cardíaca ao final do teste, vamos construir a function **oneThousandSixHundredFromRockport( )**. Como citado acima, ela recebe o objeto _**user**_ como parâmetro, usando a propriedade **peso** em quilos e transfomá-lo em **libras**, a propriedade **idade** e **sexo** do usuário para determinar o **VO²máx (ml.kg-¹.min-¹)** de acordo com as fórmulas abaixo:

- Se homem:

  VO²máx (ml.kg-¹.min-¹) = 132,853 - (0,0769 x Peso Corporal em Libras) - (0,3877 x Idade) + (6,315 x 1) - (3,2649 x Tempo do teste) - (0,1565 x Frequência Cardíaca ao Final do Teste)

- Se mulher:

  VO²máx (ml.kg-¹.min-¹) = 132,853 - (0,0769 x Peso Corporal em Libras) - (0,3877 x Idade) + (6,315 x 0) - (3,2649 x Tempo do teste) - (0,1565 x Frequência Cardíaca ao Final do Teste)

Logo, em **aerobicFunctions.js**:

```js
oneThousandSixHundredFromRockport(objectValue){

    const bodyWeight = objectValue.bodyWeight
    const age = objectValue.age
    const sex = objectValue.sexNumber
    
    const testName = `Teste de Caminhada Rockport`
    const testTime = aerobicFunctions.rockportTestTime(testName)
    const heartRate = aerobicFunctions.testHeartRate(testName)
    const weightInPounds = Number(bodyWeight / 0.454)
    let VO2max_mL_Kg_min = 0
  
    if(sex === 1){
      VO2max_mL_Kg_min = Number((132.853 - (0.0769 * weightInPounds) - (0.3877 * age) + (6.315 * 1) - (3.2649 * testTime) - (0.1565 * heartRate)).toFixed(2))
    } else {
      VO2max_mL_Kg_min = Number((132.853 - (0.0769 * weightInPounds) - (0.3877 * age) + (6.315 * 0) - (3.2649 * testTime) - (0.1565 * heartRate)).toFixed(2))
    }
    
    return VO2max_mL_Kg_min
  
  },
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Aeróbico            
===============================
Escolha um teste: 
[1] Cicloergômetro - Astrand-Rhyming
[2] Cooper - 12 min
[3] Caminhada de 1600 - Rockport
[4] Banco - McArdle
3
Teste de Caminhada Rockport
Tempo que levou para chegar (minutos): 11
Tempo que levou para chegar (segundos): 30
Teste de Caminhada Rockport
Frequência Cardíaca ao final do teste (bpm): 160
```

```
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Aeróbico            
===============================
VO²máx (mL(kg.min): 47.48
===============================
```

### Banco - McArdle

**bankMcArdle( )** function, recebe o objeto _**user**_ como parâmetro usando a propriedade **sexo** e determina o **VO²máx (ml.kg-¹.min-¹)** do usuário. Esta function precisa que o usuário digite a **Frequência Cardíaca de Esforço no final do teste (bpm)**. Para isto vamos usar a function **testHeartRate( )** para validar a frequência digitada pelo usuário. Depois vamos determinar o VO²máx (ml.kg-¹.min-¹) de acordo com as fórmulas abaixo:

- Se homem:

  VO²máx (ml.kg-¹.min-¹) = ( 111,33 - ( 0,42 * Frequência cardíaca de esforço ))

- Se mulher:

  VO²máx (ml.kg-¹.min-¹) = ( 65,81- ( 0,1847 * Frequência cardíaca de esforço))

Logo, em **aerobicFunctions.js**:

```js
bankMcArdle(objectValue){

    const sex = objectValue.sexNumber
    const heartRate = aerobicFunctions.testHeartRate('Teste Banco - McArdle')
    let VO2max_mL_Kg_min = 0

    if(sex === 1){
  
      VO2max_mL_Kg_min = Number((111.33 - ( 0.42 * heartRate )).toFixed(2))
  
    } else {
  
      VO2max_mL_Kg_min = Number(( 65.81 - ( 0.1847 * heartRate)).toFixed(2))
    }
  
    return VO2max_mL_Kg_min
  },
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Aeróbico            
===============================
Escolha um teste: 
[1] Cicloergômetro - Astrand-Rhyming
[2] Cooper - 12 min
[3] Caminhada de 1600 - Rockport
[4] Banco - McArdle
4
Teste Banco - McArdle
Frequência Cardíaca ao final do teste (bpm): 160
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Aeróbico            
===============================
VO²máx (mL(kg.min): 44.13
===============================
```

### VO² máx.(mL(kg.min) Previsto

**vo2maxExpected( )** function, determina o **VO²máx Previsto (ml.kg-¹.min-¹)** do usuário. Recebe como parâmetro o objeto _**user**_ usando as propriedades idade e sexo do usuário. Retorna o VO²máx Previsto de acordo com as fórmulas abaixo:

- Se homem:

  VO² máx. Previsto (mL(kg.min) = ( 60 - ( 0,55 * idade ))

- Se mulher:

  VO² máx. Previsto (mL(kg.min) = ( 48 - (0,37 * idade))

Logo, em **aerobicFunctions.js**:

```js
vo2maxExpected(objectValue){

    const sex = objectValue.sexNumber
    const age = objectValue.age
    let VO2max_mL_Kg_min_Expected = 0
  
    if(sex === 1){
  
      VO2max_mL_Kg_min_Expected = Number(( 60 - ( 0.55 * age)).toFixed(2))
  
    } else {
  
      VO2max_mL_Kg_min_Expected = Number(( 48 - (0.37 * age)).toFixed(2))
  
    }
  
    return VO2max_mL_Kg_min_Expected
  
  },
```

Em **saf.js** vamos adicionar ao objeto _**user**_ a propriedade **voTwoMaxExpected** que recebe como valor o retorno da function **vo2maxExpected( )** e depois mostrar o resultado:

```js
// variables aerobicFunctions
user.voTwoMax = aerobicFunctions.voTwoMax(user)
user.voTwoMaxExpected = aerobicFunctions.vo2maxExpected(user)
```

```js
// show results aerobicFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Aeróbico")
console.log(`VO²máx (mL(kg.min): ${user.voTwoMax}`)
console.log(`VO²máx Previsto(mL(kg.min): ${user.voTwoMaxExpected}`)
headerFunctions.baseboard()

```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Aeróbico            
===============================
VO²máx (mL(kg.min): 44.6
VO²máx Previsto(mL(kg.min): 41.3
===============================
```

### VO² máx.(mL(kg.min) - Classificação

**vo2maxClassification( )** function determina a classificação do **VO²máx (mL(kg.min)** do usuário obtido no teste. Recebe como parâmetro o objeto ***user***. Retorna a classificação de acordo com a tabela abaixo:

| VO² máx.(mL(kg.min) - Classificação - HOMEM | VO² máx.(mL(kg.min) - Classificação - MULHER |
| ------------------------------------------- | -------------------------------------------- |
| **Com idade entre 20 e 29 anos**            | **Com idade entre 20 e 29 anos**             |
| Flexão de Braço < 25 = "Muito Fraco"        | Flexão de Braço < 24 = "Muito Fraco"         |
| Flexão de Braço < 34 = "Fraco"              | Flexão de Braço < 31 = "Fraco"               |
| Flexão de Braço < 43 = "Regular"            | Flexão de Braço < 38 = "Regular"             |
| Flexão de Braço < 54 = "Bom"                | Flexão de Braço < 49 = "Bom"                 |
| Flexão de Braço >= 54 = "Excelente"         | Flexão de Braço >= 49 = "Excelente"          |
| **Com idade entre 30 e 39 anos**            | **Com idade entre 30 e 39 anos**             |
| Flexão de Braço < 23 = "Muito Fraco"        | Flexão de Braço < 20 = "Muito Fraco"         |
| Flexão de Braço < 31 = "Fraco"              | Flexão de Braço < 28 = "Fraco"               |
| Flexão de Braço < 39 = "Regular"            | Flexão de Braço < 34 = "Regular"             |
| Flexão de Braço < 49 = "Bom"                | Flexão de Braço < 45 = "Bom"                 |
| Flexão de Braço >= 49 = "Excelente"         | Flexão de Braço >= 45 = "Excelente"          |
| **Com idade entre 40 e 49 anos**            | **Com idade entre 40 e 49 anos**             |
| Flexão de Braço < 20 = "Muito Fraco"        | Flexão de Braço < 17 = "Muito Fraco"         |
| Flexão de Braço < 27 = "Fraco"              | Flexão de Braço < 24 = "Fraco"               |
| Flexão de Braço < 36 = "Regular"            | Flexão de Braço < 31 = "Regular"             |
| Flexão de Braço < 45 = "Bom"                | Flexão de Braço < 42 = "Bom"                 |
| Flexão de Braço >= 45 = "Excelente"         | Flexão de Braço >= 42 = "Excelente"          |
| **Com idade entre 50 e 59 anos**            | **Com idade entre 50 e 59 anos**             |
| Flexão de Braço < 18 = "Muito Fraco"        | Flexão de Braço < 15 = "Muito Fraco"         |
| Flexão de Braço < 25 = "Fraco"              | Flexão de Braço < 21 = "Fraco"               |
| Flexão de Braço < 34 = "Regular"            | Flexão de Braço < 28 = "Regular"             |
| Flexão de Braço < 43 = "Bom"                | Flexão de Braço < 38 = "Bom"                 |
| Flexão de Braço >= 43 = "Excelente"         | Flexão de Braço >= 38 = "Excelente"          |
| **Com idade entre 60 e 69 anos**            | **Com idade entre 60 e 69 anos**             |
| Flexão de Braço < 16 = "Muito Fraco"        | Flexão de Braço < 13 = "Muito Fraco"         |
| Flexão de Braço < 23 = "Fraco"              | Flexão de Braço < 18 = "Fraco"               |
| Flexão de Braço < 31 = "Regular"            | Flexão de Braço < 24 = "Regular"             |
| Flexão de Braço < 41 = "Bom"                | Flexão de Braço < 35 = "Bom"                 |
| Flexão de Braço >= 41 = "Excelente"         | Flexão de Braço >= 35 = "Excelente"          |

Logo, em **aerobicFunctions.js**:

```js
vo2maxClassification(objectValue){
  
    const sex = objectValue.sexNumber
    const age = objectValue.age
    const voTwoMax = objectValue.voTwoMax

    let classification = ''
    const unidentifiedSex = `[ERROR] Sexo não identificado!` 
    const ageBetweenTwentyAndTwentyNine = age >= 20 && age <= 29
    const ageBetweenThirtyAndThirtyNine = age >= 30 && age <= 39
    const ageBetweenFortyAndFortyNine = age >= 40 && age <= 49
    const ageBetweenFiftyAndFiftyNine = age >= 50 && age <= 59
    const ageBetweenSixtyAndSixtyNine = age >= 60 && age <= 69
    const veryPoorRating = `Muito Fraco`
    const weakRating = `Fraco`
    const regularRating = `Regular`
    const goodRating = `Bom`
    const excellentRating = `Excelente`
    const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`
  
    switch (sex) {
      
      // men
      case 1:
        
        if(ageBetweenTwentyAndTwentyNine){
          
          if(voTwoMax < 25){
            classification = veryPoorRating
          } else if(voTwoMax < 34){
            classification = weakRating
          } else if(voTwoMax < 43){
            classification = regularRating
          } else if(voTwoMax < 54){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(voTwoMax < 23){
            classification = veryPoorRating
          } else if(voTwoMax < 31){
            classification = weakRating
          } else if(voTwoMax < 39){
            classification = regularRating
          } else if(voTwoMax < 49){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(voTwoMax < 20){
            classification = veryPoorRating
          } else if(voTwoMax < 27){
            classification = weakRating
          } else if(voTwoMax < 36){
            classification = regularRating
          } else if(voTwoMax < 45){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(voTwoMax < 18){
            classification = veryPoorRating
          } else if(voTwoMax < 25){
            classification = weakRating
          } else if(voTwoMax < 34){
            classification = regularRating
          } else if(voTwoMax < 43){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(voTwoMax < 16){
            classification = veryPoorRating
          } else if(voTwoMax < 23){
            classification = weakRating
          } else if(voTwoMax < 31){
            classification = regularRating
          } else if(voTwoMax < 41){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else {
          classification = classificationNotAppliedToAge
        }
  
        break;
      
      // woman
      case 2:
  
        if(ageBetweenTwentyAndTwentyNine){
          
          if(voTwoMax < 24){
            classification = veryPoorRating
          } else if(voTwoMax < 31){
            classification = weakRating
          } else if(voTwoMax < 38){
            classification = regularRating
          } else if(voTwoMax < 49){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(voTwoMax < 20){
            classification = veryPoorRating
          } else if(voTwoMax < 28){
            classification = weakRating
          } else if(voTwoMax < 34){
            classification = regularRating
          } else if(voTwoMax < 45){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(voTwoMax < 17){
            classification = veryPoorRating
          } else if(voTwoMax < 24){
            classification = weakRating
          } else if(voTwoMax < 31){
            classification = regularRating
          } else if(voTwoMax < 42){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(voTwoMax < 15){
            classification = veryPoorRating
          } else if(voTwoMax < 21){
            classification = weakRating
          } else if(voTwoMax < 28){
            classification = regularRating
          } else if(voTwoMax < 38){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(voTwoMax < 13){
            classification = veryPoorRating
          } else if(voTwoMax < 18){
            classification = weakRating
          } else if(voTwoMax < 24){
            classification = regularRating
          } else if(voTwoMax < 35){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else {
          classification = classificationNotAppliedToAge
        }
  
        break;
    
      default:
  
        classification = unidentifiedSex
  
        break;
    }
  
    return classification
  
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **voTwoMaxClassification** que recebe como valor o retorno da function **vo2maxClassification( )**. Em seguida, mostramos o resultado:

```js
// variables aerobicFunctions
user.voTwoMax = aerobicFunctions.voTwoMax(user)
user.voTwoMaxExpected = aerobicFunctions.vo2maxExpected(user)
user.voTwoMaxClassification = aerobicFunctions.vo2maxClassification(user)
```

```js
// show results aerobicFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Aeróbico")
console.log(`VO²máx (mL(kg.min): ${user.voTwoMax}`)
console.log(`VO²máx Previsto(mL(kg.min): ${user.voTwoMaxExpected}`)
console.log(`Classificação do VO²máx: ${user.voTwoMaxClassification}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```js
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Aeróbico            
===============================
VO²máx (mL(kg.min): 44.6
VO²máx Previsto(mL(kg.min): 41.3
Classificação do VO²máx: Bom
===============================
```

### Velocidade de treino 

**trainingSpeed( )** function determinar a velocidade de treino do usuário, mostrado a velocidade de acordo com os percentuais de 40% até 95%, mostrando de 5% em 5%. Esta function recebe como parâmetro o objeto ***user***, sendo usado as propriedades **VO²máx (mL(kg.min)**, **valores dos percentuais** e **estado físico atual**. Retorna um _array_ contendo as velocidades de treino.

Dentro desta function, para chegarmos a velocidade de treino, primeiro precisamos determinar o **MET's** do usuário, que é obtido pela fórmula:

MET's = VO² máx.(mL(kg.min) / 3,5

Em seguida, se determina a **Frequência de Treino (FT) - (trainingFrequency)**, colocando-a dentro de um array. Para determinar a frequência de treino do usuário, será usado as fórmulas abaixo, de acordo com seu estado físico atual:

| Estado físico sedentário              | Estado físico ativo                             |
| ------------------------------------- | ----------------------------------------------- |
| FT = ( percentual de trabalho / 100 ) | FT = ((MET's + percentual de trabalho ) / 100)) |

Por último a Velocidade de Treino **(_trainingSpeed_)** **[array]** que é determinada pela fórmula:

Velocidade de Treino = ( MET's * Frequência de Treino)

Logo, em **aerobicFunctions.js**:

```js
trainingSpeed(objectValue){

    const voTwoMax = objectValue.voTwoMax
    const percentageValues = objectValue.percentageValues
    const currentPhysicalState = objectValue.currentPhysicalState
  
    let METs = 0
    let trainingFrequency = []
    let trainingSpeed = []
  
    // Calculate METs
    METs = Number((voTwoMax / 3.5))
  
    // Calculate Training Frequency
    for(let percentage of percentageValues){
  
      if(currentPhysicalState === 1){
        trainingFrequency.push(Number((percentage / 100)))
      } else if(currentPhysicalState === 2){
        trainingFrequency.push(Number(((METs + percentage) / 100)))
      }
    }
    
    // Calculate Training Speed
    for(let frequency of trainingFrequency){
    
      trainingSpeed.push(Number((METs * frequency).toFixed(2)))
    }
  
    return trainingSpeed
  
  },
```

Para mostrar os resultados, vamos criar a function **showTrainingSpeed( )** que recebe como parâmetro o objeto ***user***, usando as propriedades **percentuais** e **velocidade de treino** e exibe os valores da **Velocidade de Treino**. Logo, em **aerobicFunctions.js**:

```js
showTrainingSpeed(objectValue){
  
    const percentage = objectValue.percentageValues
    const trainingSpeed = objectValue.trainingSpeed
  
    console.log(` - Velocidade de Treino - `)
    for(let i = 0; i < trainingSpeed.length; i++){
      console.log(`       ${percentage[i]}% = ${trainingSpeed[i]} km/h`)
    }
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **trainingSpeed** que recebe como valor o retorno da function **trainingSpeed( )**:

```js
// variables aerobicFunctions
user.voTwoMax = aerobicFunctions.voTwoMax(user)
user.voTwoMaxExpected = aerobicFunctions.vo2maxExpected(user)
user.voTwoMaxClassification = aerobicFunctions.vo2maxClassification(user)
user.trainingSpeed = aerobicFunctions.trainingSpeed(user)
```

Para exibir o resultado, basta apenas chamar a function **showTrainingSpeed( )**:

```js
// show results aerobicFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Aeróbico")
console.log(`VO²máx (mL(kg.min): ${user.voTwoMax}`)
console.log(`VO²máx Previsto(mL(kg.min): ${user.voTwoMaxExpected}`)
console.log(`Classificação do VO²máx: ${user.voTwoMaxClassification}`)
aerobicFunctions.showTrainingSpeed(user)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Aeróbico            
===============================
Escolha um teste: 
[1] Cicloergômetro - Astrand-Rhyming
[2] Cooper - 12 min
[3] Caminhada de 1600 - Rockport
[4] Banco - McArdle
2
Teste de Cooper - 12 min:
Digite a distância atingida pelo usuário (m): 2500
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Aeróbico            
===============================
VO²máx (mL(kg.min): 44.6
VO²máx Previsto(mL(kg.min): 41.3
Classificação do VO²máx: Bom
 - Velocidade de Treino - 
       40% = 5.1 km/h
       45% = 5.73 km/h
       50% = 6.37 km/h
       55% = 7.01 km/h
       60% = 7.65 km/h
       65% = 8.28 km/h
       70% = 8.92 km/h
       75% = 9.56 km/h
       80% = 10.19 km/h
       85% = 10.83 km/h
       90% = 11.47 km/h
       95% = 12.11 km/h
===============================
```

### Déficit Funcional Aeróbio - FAI

**Déficit Funcional Aeróbio( )** function determina o **Déficit Funcional Aeróbio** do usuário. Recebe como parâmetro o objeto _**user**_, usando as propriedades **VO² máx.(mL(kg.min) Previsto** e **VO² máx.(mL(kg.min) )** obtido no teste pelo usuário. Retorna o Déficit Funcional Aeróbio de acordo com a seguinte fórmula:

FAI == ((( VO² máx.(mL(kg.min) Previsto  -  VO² máx.(mL(kg.min) )  /  VO² máx.(mL(kg.min) Previsto ) * 100)

Logo, em **aerobicFunctions.js**:

```js
aerobicFunctionalDeficit(objectValue){

    const voTwoMaxExpected = objectValue.voTwoMaxExpected
    const voTwoMax = objectValue.voTwoMax

    let aerobicFunctionalDeficit = Number((((voTwoMaxExpected - voTwoMax)  /  voTwoMaxExpected) * 100).toFixed(2))

    return aerobicFunctionalDeficit
  
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **aerobicFunctionalDeficit** que recebe como valor o retorno da function **aerobicFunctionalDeficit( )**. em seguida, mostramos o resultado:

```js
// variables aerobicFunctions
user.voTwoMax = aerobicFunctions.voTwoMax(user)
user.voTwoMaxExpected = aerobicFunctions.vo2maxExpected(user)
user.voTwoMaxClassification = aerobicFunctions.vo2maxClassification(user)
user.trainingSpeed = aerobicFunctions.trainingSpeed(user)
user.aerobicFunctionalDeficit = aerobicFunctions.aerobicFunctionalDeficit(user)
```

```js
// show results aerobicFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Aeróbico")
console.log(`VO²máx (mL(kg.min): ${user.voTwoMax}`)
console.log(`VO²máx Previsto(mL(kg.min): ${user.voTwoMaxExpected}`)
console.log(`Classificação do VO²máx: ${user.voTwoMaxClassification}`)
aerobicFunctions.showTrainingSpeed(user)
console.log(`Déficit Funcional Aeróbio: ${user.aerobicFunctionalDeficit}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Aeróbico            
===============================
Escolha um teste: 
[1] Cicloergômetro - Astrand-Rhyming
[2] Cooper - 12 min
[3] Caminhada de 1600 - Rockport
[4] Banco - McArdle
2
Teste de Cooper - 12 min:
Digite a distância atingida pelo usuário (m): 2500
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Aeróbico            
===============================
VO²máx (mL(kg.min): 44.6
VO²máx Previsto(mL(kg.min): 41.3
Classificação do VO²máx: Bom
 - Velocidade de Treino - 
       40% = 5.1 km/h
       45% = 5.73 km/h
       50% = 6.37 km/h
       55% = 7.01 km/h
       60% = 7.65 km/h
       65% = 8.28 km/h
       70% = 8.92 km/h
       75% = 9.56 km/h
       80% = 10.19 km/h
       85% = 10.83 km/h
       90% = 11.47 km/h
       95% = 12.11 km/h
Déficit Funcional Aeróbio: -7.99
===============================
```

### Déficit Funcional Aeróbio - FAI - Classificação

**aerobicFunctionalDeficitClassification( )** function determina a **classificação** do **Déficit Funcional Aeróbio** do usuário. Recebe como parâmetro o objeto ***user***, usando a propriedade **Déficit Funcional Aeróbio**. A classificação é determinada de acordo com a tabela abaixo:

| Déficit Funcional Aeróbio - FAI - Classificação |
| ----------------------------------------------- |
| FAI > 25 = "Muito Baixo"                        |
| FAI > 9 = "Baixo"                               |
| FAI > 0 = "Bom"                                 |
| FAI <= 0 = "Ótimo"                              |

Logo, em **aerobicFunctions.js**:

```js
aerobicFunctionalDeficitClassification(objectValue){

    let classification = ``
    const aerobicFunctionalDeficit = objectValue.aerobicFunctionalDeficit
    const veryLow = aerobicFunctionalDeficit > 25
    const veryLowRating = `Muito Baixo`
    const low = aerobicFunctionalDeficit >  9
    const lowRating = `Baixo`
    const good = aerobicFunctionalDeficit > 0
    const goodRating = `Bom`
    const greatRating = `Ótimo`
    
    if(veryLow){
      classification = veryLowRating
    } else if(low){
      classification = lowRating
    } else if(good){
      classification = goodRating
    } else {
      classification = greatRating
    }
  
    return classification
  
  },
```

Em **saf.js** vamos atribuir ao objeto _**user**_ a propriedade **aerobicFunctionalDeficitClassification** que recebe como valor o retorno da function **aerobicFunctionalDeficitClassification( )**. Em seguida, mostramos o resultado:

```js
// variables aerobicFunctions
user.voTwoMax = aerobicFunctions.voTwoMax(user)
user.voTwoMaxExpected = aerobicFunctions.vo2maxExpected(user)
user.voTwoMaxClassification = aerobicFunctions.vo2maxClassification(user)
user.trainingSpeed = aerobicFunctions.trainingSpeed(user)
user.aerobicFunctionalDeficit = aerobicFunctions.aerobicFunctionalDeficit(user)
user.aerobicFunctionalDeficitClassification = aerobicFunctions.aerobicFunctionalDeficitClassification(user)
```

```js
// show results aerobicFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Aeróbico")
console.log(`VO²máx (mL(kg.min): ${user.voTwoMax}`)
console.log(`VO²máx Previsto(mL(kg.min): ${user.voTwoMaxExpected}`)
console.log(`Classificação do VO²máx: ${user.voTwoMaxClassification}`)
aerobicFunctions.showTrainingSpeed(user)
console.log(`Déficit Funcional Aeróbio: ${user.aerobicFunctionalDeficit}`)
console.log(`Classificação do Déficit Funcional Aeróbio: ${user.aerobicFunctionalDeficitClassification}`)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Aeróbico            
===============================
Escolha um teste: 
[1] Cicloergômetro - Astrand-Rhyming
[2] Cooper - 12 min
[3] Caminhada de 1600 - Rockport
[4] Banco - McArdle
2
Teste de Cooper - 12 min:
Digite a distância atingida pelo usuário (m): 2500
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Aeróbico            
===============================
VO²máx (mL(kg.min): 44.6
VO²máx Previsto(mL(kg.min): 41.3
Classificação do VO²máx: Bom
 - Velocidade de Treino - 
       40% = 5.1 km/h
       45% = 5.73 km/h
       50% = 6.37 km/h
       55% = 7.01 km/h
       60% = 7.65 km/h
       65% = 8.28 km/h
       70% = 8.92 km/h
       75% = 9.56 km/h
       80% = 10.19 km/h
       85% = 10.83 km/h
       90% = 11.47 km/h
       95% = 12.11 km/h
Déficit Funcional Aeróbio: -7.99
Classificação do Déficit Funcional Aeróbio: Ótimo
===============================
```

Com isto chega ao final a parte **Aeróbico** do projeto. Como ficaram os arquivos do programa até esta etapa:

Arquivo **aerobicFunctions.js** completo:

```js
/* aerobic functions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')

const aerobicFunctions = {

  menuVoTwoMax(){
  
    let choise = 0
    let validChoise = false
    const regexFromOneToFour = /(^[1]$)|(^[2]$)|(^[3]$)|(^[4]$)/
  
    do{
      
      console.log(`Escolha um teste: `)
      console.log(`[1] Cicloergômetro - Astrand-Rhyming`)
      console.log(`[2] Cooper - 12 min`)
      console.log(`[3] Caminhada de 1600 - Rockport`)
      console.log(`[4] Banco - McArdle`)
      choise = input.question(``)
  
      validChoise = validationFunctions.isRegularExpression(choise, regexFromOneToFour)
      validationFunctions.incorrectValue(false, !validChoise, "Aeróbico")
  
    }while(!validChoise)
  
    return Number(choise)
  
  },

  voTwoMax(objectValue){

    let voTwoMaxValue = 0
    let protocol = aerobicFunctions.menuVoTwoMax()
  
    switch (protocol) {
  
      case 1:
        voTwoMaxValue = aerobicFunctions.cycleErgometerAstrandRhyming(objectValue)
        break;
      
      case 2:
        voTwoMaxValue = aerobicFunctions.cooperTwelveMin()
        break;
  
      case 3:
        voTwoMaxValue = aerobicFunctions.oneThousandSixHundredFromRockport(objectValue) 
        break;
  
      case 4:
        voTwoMaxValue = aerobicFunctions.bankMcArdle(objectValue)
        break;
    
      default:
        voTwoMaxValue = 0
        break;
    }
  
    return Number(voTwoMaxValue)
  
  },

  validHeartRate(regex, minute){

    let heartRateValue = 0
    let validHeartRate = false
  
    do{
  
      console.log(`Cicloergômetro - Astrand-Rhyming:`)
      heartRateValue = input.question(`Digite a frequência cardíaca do ${minute}º minuto de teste (bpm): `)
      validHeartRate = validationFunctions.isRegularExpression(heartRateValue, regex)
      validationFunctions.incorrectValue(false, !validHeartRate, "Aeróbico")
  
    }while(!validHeartRate)
  
    return Number(heartRateValue)
  },

  chargeCycleErgometerAstrandRhyming(regex){

    let charge = 0
    let validCharge = false
  
    do{
  
      console.log(`Cicloergômetro - Astrand-Rhyming:`)
      charge = input.question(`Digite a carga utilizada no teste (W): `)
      validCharge = validationFunctions.isRegularExpression(charge, regex)
      validationFunctions.incorrectValue(false, !validCharge, "Aeróbico")
  
    }while(!validCharge)
  
    return Number(charge)
  },

  cycleErgometerAstrandRhyming(objectValue){

    const maximumHeartRate = objectValue.maximumHeartRate
    const restingHeartRate = objectValue.restingHeartRate
    const bodyWeight = objectValue.bodyWeight
  
    const regexFromOneToTwoHundred = /(^[0-9]$)|(^[0-9]{2}$)|(^[1][0-9]{2}$)|(^[2][0][0])/
    const fifthMinuteValue = aerobicFunctions.validHeartRate(regexFromOneToTwoHundred, 5)
    const sixthMinuteValue = aerobicFunctions.validHeartRate(regexFromOneToTwoHundred, 6)
    const chargeValue = aerobicFunctions.chargeCycleErgometerAstrandRhyming(regexFromOneToTwoHundred)
    const exertionalHeartRate = Number(((fifthMinuteValue + sixthMinuteValue) / 2))
    const loadVO2 = Number((0.129 + ( 0.014 * chargeValue )))
    const VO2max_L_min =  Number(((( maximumHeartRate - restingHeartRate ) / ( exertionalHeartRate - restingHeartRate )) * loadVO2))
    const VO2max_mL_Kg_min = Number(((1000 * VO2max_L_min ) / bodyWeight).toFixed(2))
  
    return VO2max_mL_Kg_min
  
  },

  cooperTwelveMin(){

    let distance = 0
    let validDistance = false
    let VO2max_mL_Kg_min = 0
    let regexFrom0To9999 = /(^[0-9]$)|(^[0-9]{2}$)|(^[0-9]{3}$)|(^[0-9]{4}$)/
  
    do{
  
      console.log(`Teste de Cooper - 12 min:`)
      distance = input.question(`Digite a distância atingida pelo usuário (m): `)
      validDistance = validationFunctions.isRegularExpression(distance, regexFrom0To9999)
      validationFunctions.incorrectValue(false, !validDistance, "Aeróbico")
  
    }while(!validDistance)
  
    VO2max_mL_Kg_min = Number(((distance - 504.9) / 44.73).toFixed(2))
  
    return VO2max_mL_Kg_min
  
  },

  rockportTestTime(testName){

    let rockportTestTime = 0
    let minutes = 0
    let seconds = 0
    let validMinutes = false
    let validSeconds = false
    let regexMinutesAndSeconds = /(^[0-9]$)|(^[0-5][0-9]$)/ 
  
    do{
  
      console.log(`${testName}`)
      minutes = input.question(`Tempo que levou para chegar (minutos): `)
      seconds = input.question(`Tempo que levou para chegar (segundos): `)
      validMinutes = validationFunctions.isRegularExpression(minutes, regexMinutesAndSeconds)
      validSeconds = validationFunctions.isRegularExpression(seconds, regexMinutesAndSeconds)
      validationFunctions.incorrectValue(!validMinutes, !validSeconds, "Aeróbico")
  
    }while(!validMinutes || !validSeconds)
  
    rockportTestTime = (Number(minutes) + (Number(seconds) / 60))
    
    return rockportTestTime
  },

  testHeartRate(testName){

    let testHeartRate = 0
    let validTestHeartRate = false
    let isNumberFromZeroToTwoHundredAndTwenty = /(^[0-9]$)|(^[0-9]{2}$)|(^[1][0-9]{2}$)|(^[2][0-1][0-9]$)|(^[2][2][0]$)/ 
  
    do{
  
      console.log(`${testName}`)
      testHeartRate = input.question(`Frequência Cardíaca ao final do teste (bpm): `)
      validTestHeartRate = validationFunctions.isRegularExpression(testHeartRate, isNumberFromZeroToTwoHundredAndTwenty)
      validationFunctions.incorrectValue(false, !validTestHeartRate, "Aeróbico")
  
    }while(!validTestHeartRate)
    
    return Number(testHeartRate)
  
  },

  oneThousandSixHundredFromRockport(objectValue){

    const bodyWeight = objectValue.bodyWeight
    const age = objectValue.age
    const sex = objectValue.sexNumber

    const testName = `Teste de Caminhada Rockport`
    const testTime = aerobicFunctions.rockportTestTime(testName)
    const heartRate = aerobicFunctions.testHeartRate(testName)
    const weightInPounds = Number(bodyWeight / 0.454)
    let VO2max_mL_Kg_min = 0
  
    if(sex === 1){
      VO2max_mL_Kg_min = Number((132.853 - (0.0769 * weightInPounds) - (0.3877 * age) + (6.315 * 1) - (3.2649 * testTime) - (0.1565 * heartRate)).toFixed(2))
    } else {
      VO2max_mL_Kg_min = Number((132.853 - (0.0769 * weightInPounds) - (0.3877 * age) + (6.315 * 0) - (3.2649 * testTime) - (0.1565 * heartRate)).toFixed(2))
    }
    
    return VO2max_mL_Kg_min
  
  },

  bankMcArdle(objectValue){

    const sex = objectValue.sexNumber
    const heartRate = aerobicFunctions.testHeartRate('Teste Banco - McArdle')
    let VO2max_mL_Kg_min = 0

    if(sex === 1){
  
      VO2max_mL_Kg_min = Number((111.33 - ( 0.42 * heartRate )).toFixed(2))
  
    } else {
  
      VO2max_mL_Kg_min = Number(( 65.81 - ( 0.1847 * heartRate)).toFixed(2))
    }
  
    return VO2max_mL_Kg_min
  },

  vo2maxExpected(objectValue){

    const sex = objectValue.sexNumber
    const age = objectValue.age
    let VO2max_mL_Kg_min_Expected = 0
  
    if(sex === 1){
  
      VO2max_mL_Kg_min_Expected = Number(( 60 - ( 0.55 * age)).toFixed(2))
  
    } else {
  
      VO2max_mL_Kg_min_Expected = Number(( 48 - (0.37 * age)).toFixed(2))
  
    }
  
    return VO2max_mL_Kg_min_Expected
  
  },

  vo2maxClassification(objectValue){
  
    const sex = objectValue.sexNumber
    const age = objectValue.age
    const voTwoMax = objectValue.voTwoMax

    let classification = ''
    const unidentifiedSex = `[ERROR] Sexo não identificado!` 
    const ageBetweenTwentyAndTwentyNine = age >= 20 && age <= 29
    const ageBetweenThirtyAndThirtyNine = age >= 30 && age <= 39
    const ageBetweenFortyAndFortyNine = age >= 40 && age <= 49
    const ageBetweenFiftyAndFiftyNine = age >= 50 && age <= 59
    const ageBetweenSixtyAndSixtyNine = age >= 60 && age <= 69
    const veryPoorRating = `Muito Fraco`
    const weakRating = `Fraco`
    const regularRating = `Regular`
    const goodRating = `Bom`
    const excellentRating = `Excelente`
    const classificationNotAppliedToAge = `Esta classificação não se aplica a sua idade!`
  
    switch (sex) {
      
      // men
      case 1:
        
        if(ageBetweenTwentyAndTwentyNine){
          
          if(voTwoMax < 25){
            classification = veryPoorRating
          } else if(voTwoMax < 34){
            classification = weakRating
          } else if(voTwoMax < 43){
            classification = regularRating
          } else if(voTwoMax < 54){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(voTwoMax < 23){
            classification = veryPoorRating
          } else if(voTwoMax < 31){
            classification = weakRating
          } else if(voTwoMax < 39){
            classification = regularRating
          } else if(voTwoMax < 49){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(voTwoMax < 20){
            classification = veryPoorRating
          } else if(voTwoMax < 27){
            classification = weakRating
          } else if(voTwoMax < 36){
            classification = regularRating
          } else if(voTwoMax < 45){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(voTwoMax < 18){
            classification = veryPoorRating
          } else if(voTwoMax < 25){
            classification = weakRating
          } else if(voTwoMax < 34){
            classification = regularRating
          } else if(voTwoMax < 43){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(voTwoMax < 16){
            classification = veryPoorRating
          } else if(voTwoMax < 23){
            classification = weakRating
          } else if(voTwoMax < 31){
            classification = regularRating
          } else if(voTwoMax < 41){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else {
          classification = classificationNotAppliedToAge
        }
  
        break;
      
      // woman
      case 2:
  
        if(ageBetweenTwentyAndTwentyNine){
          
          if(voTwoMax < 24){
            classification = veryPoorRating
          } else if(voTwoMax < 31){
            classification = weakRating
          } else if(voTwoMax < 38){
            classification = regularRating
          } else if(voTwoMax < 49){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenThirtyAndThirtyNine){
          
          if(voTwoMax < 20){
            classification = veryPoorRating
          } else if(voTwoMax < 28){
            classification = weakRating
          } else if(voTwoMax < 34){
            classification = regularRating
          } else if(voTwoMax < 45){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFortyAndFortyNine){
          
          if(voTwoMax < 17){
            classification = veryPoorRating
          } else if(voTwoMax < 24){
            classification = weakRating
          } else if(voTwoMax < 31){
            classification = regularRating
          } else if(voTwoMax < 42){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenFiftyAndFiftyNine){
          
          if(voTwoMax < 15){
            classification = veryPoorRating
          } else if(voTwoMax < 21){
            classification = weakRating
          } else if(voTwoMax < 28){
            classification = regularRating
          } else if(voTwoMax < 38){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else if(ageBetweenSixtyAndSixtyNine){
          
          if(voTwoMax < 13){
            classification = veryPoorRating
          } else if(voTwoMax < 18){
            classification = weakRating
          } else if(voTwoMax < 24){
            classification = regularRating
          } else if(voTwoMax < 35){
            classification = goodRating
          } else {
            classification = excellentRating
          }
          
        } else {
          classification = classificationNotAppliedToAge
        }
  
        break;
    
      default:
  
        classification = unidentifiedSex
  
        break;
    }
  
    return classification
  
  },

  trainingSpeed(objectValue){

    const voTwoMax = objectValue.voTwoMax
    const percentageValues = objectValue.percentageValues
    const currentPhysicalState = objectValue.currentPhysicalState
  
    let METs = 0
    let trainingFrequency = []
    let trainingSpeed = []
  
    // Calculate METs
    METs = Number((voTwoMax / 3.5))
  
    // Calculate Training Frequency
    for(let percentage of percentageValues){
  
      if(currentPhysicalState === 1){
        trainingFrequency.push(Number((percentage / 100)))
      } else if(currentPhysicalState === 2){
        trainingFrequency.push(Number(((METs + percentage) / 100)))
      }
    }
    
    // Calculate Training Speed
    for(let frequency of trainingFrequency){
    
      trainingSpeed.push(Number((METs * frequency).toFixed(2)))
    }
  
    return trainingSpeed
  
  },

  showTrainingSpeed(objectValue){
  
    const percentage = objectValue.percentageValues
    const trainingSpeed = objectValue.trainingSpeed
  
    console.log(` - Velocidade de Treino - `)
    for(let i = 0; i < trainingSpeed.length; i++){
      console.log(`       ${percentage[i]}% = ${trainingSpeed[i]} km/h`)
    }
  },

  aerobicFunctionalDeficit(objectValue){

    const voTwoMaxExpected = objectValue.voTwoMaxExpected
    const voTwoMax = objectValue.voTwoMax

    let aerobicFunctionalDeficit = Number((((voTwoMaxExpected - voTwoMax)  /  voTwoMaxExpected) * 100).toFixed(2))

    return aerobicFunctionalDeficit
  
  },

  aerobicFunctionalDeficitClassification(objectValue){

    let classification = ``
    const aerobicFunctionalDeficit = objectValue.aerobicFunctionalDeficit
    const veryLow = aerobicFunctionalDeficit > 25
    const veryLowRating = `Muito Baixo`
    const low = aerobicFunctionalDeficit >  9
    const lowRating = `Baixo`
    const good = aerobicFunctionalDeficit > 0
    const goodRating = `Bom`
    const greatRating = `Ótimo`
    
    if(veryLow){
      classification = veryLowRating
    } else if(low){
      classification = lowRating
    } else if(good){
      classification = goodRating
    } else {
      classification = greatRating
    }
  
    return classification
  
  },

}

module.exports = {
  aerobicFunctions
}
```

Arquivo **saf.js** completo:

```js
/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')
const { anamnesisQuestions } = require('./anamnesisFunctions')
const { cardiorespiratoryFunctions } = require('./cardiorespiratoryFunctions')
const { percentageValues } = require('./cardiorespiratoryFunctions')
const { anthropometryFunctions } = require('./anthropometryFunctions')
const { neuromuscularFunctions } = require('./neuromuscularFunctions')
const { aerobicFunctions } = require('./aerobicFunctions')

const user = { }

headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")

// variables personalDataFunctions
user.name = personalDataFunctions.userName()
user.birthdayInBrazilianFormat =  personalDataFunctions.dateOfBirth()
user.birthdayInFullFormat = personalDataFunctions.dateInFullFormat(user.birthdayInBrazilianFormat)
user.age = personalDataFunctions.age(user)
user.sexNumber = personalDataFunctions.sexNumber()
user.sex = personalDataFunctions.showSex(user)
user.profession = personalDataFunctions.userProfession()
user.userEmail = personalDataFunctions.userEmail()
user.phoneNumber = personalDataFunctions.phoneNumber()

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")

// variables anamnesisFunctions
user.questionnairePARQ = anamnesisFunctions.questionnairePARQ()
user.currentPhysicalState = anamnesisFunctions.currentPhysicalState()
user.pastIllness = anamnesisFunctions.questions(anamnesisQuestions.pastIllness)
user.illnessesFamily = anamnesisFunctions.questions(anamnesisQuestions.illnessesInTheFamily)
user.surgeryPerformed = anamnesisFunctions.questions(anamnesisQuestions.surgeryPerformed)
user.useMedication = anamnesisFunctions.questions(anamnesisQuestions.useMedication)
user.sportsInjuries = anamnesisFunctions.questions(anamnesisQuestions.sportsInjuries)
user.trainingObjective = anamnesisFunctions.trainingObjective()
user.daysAvailableForTraining = anamnesisFunctions.daysAvailableForTraining()
user.timeAvailablePerTraining = anamnesisFunctions.timeAvailablePerTraining()

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Cardiorrespiratório")

// variables cardiorespiratoryFunctions
user.restingHeartRate = cardiorespiratoryFunctions.restingHeartRate()
user.maximumHeartRate = cardiorespiratoryFunctions.maximumHeartRate(user)
user.percentageValues = percentageValues
user.workingHeartRate = cardiorespiratoryFunctions.workingHeartRate(user)
user.restingBloodPressure = cardiorespiratoryFunctions.bloodPressure()
user.classificationBloodPressure = cardiorespiratoryFunctions.classificationOfBloodPressure(user)

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")

// variables anthropometryFunctions
user.bodyWeight = anthropometryFunctions.bodyWeight()
user.bodyStature = anthropometryFunctions.stature()
user.bodyMassIndex = anthropometryFunctions.bodyMassIndex(user)
user.bodyMassIndexClassification = anthropometryFunctions.bodyMassIndexClassification(user)
user.bodyPerimeter = anthropometryFunctions.bodyPerimetry()
user.hipWaistRatio = anthropometryFunctions.hipWaistRatio(user)
user.waistHipRatioClassification = anthropometryFunctions.waistHipRatioClassification(user)
user.waistCircumference = anthropometryFunctions.waistCircumferenceClassification(user)
user.subcutaneousFolds = anthropometryFunctions.subcutaneousMeasures()
user.fatPercentage = anthropometryFunctions.fatPercentage(user)
user.fatPercentageClassification = anthropometryFunctions.fatPercentageClassification(user)
user.fatBodyMass = anthropometryFunctions.fatBodyMass(user)
user.leanBodyMass = anthropometryFunctions.leanBodyMass(user)
user.expectedIdealBodyMass = anthropometryFunctions.expectedIdealBodyMass(user)

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Neuromuscular")

// variables neuromuscularFunctions
user.wellsBenchTest = neuromuscularFunctions.wellsBenchTest()
user.flexibilityClassification = neuromuscularFunctions.flexibilityClassification(user)
user.numberOfAbs = neuromuscularFunctions.abdominalTest()
user.abdominalClassification = neuromuscularFunctions.abdominalClassification(user)
user.numberOfPushUps = neuromuscularFunctions.flexArmTest()
user.flexArmClassification = neuromuscularFunctions.flexArmClassification(user)

console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Aeróbico")

// variables aerobicFunctions
user.voTwoMax = aerobicFunctions.voTwoMax(user)
user.voTwoMaxExpected = aerobicFunctions.vo2maxExpected(user)
user.voTwoMaxClassification = aerobicFunctions.vo2maxClassification(user)
user.trainingSpeed = aerobicFunctions.trainingSpeed(user)
user.aerobicFunctionalDeficit = aerobicFunctions.aerobicFunctionalDeficit(user)
user.aerobicFunctionalDeficitClassification = aerobicFunctions.aerobicFunctionalDeficitClassification(user)

// show results personalDataFunctions
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Dados Pessoais")
console.log(`Nome: ${user.name}`)
console.log(`Data de nascimento: ${user.birthdayInBrazilianFormat}`)
console.log(`Idade: ${user.age} anos`)
console.log(`Sexo: ${user.sex}`)
console.log(`Profissão: ${user.profession}`)
console.log(`E-mail: ${user.userEmail}`)
console.log(`Celular: ${user.phoneNumber}`)

// show results anamnesisFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Anamnese")
console.log(`Questionário PAR-Q: ${user.questionnairePARQ}`)
console.log(`Estado físico: ${anamnesisFunctions.showPhysicalState(user)}`)
console.log(`Doença Pregressa: ${user.pastIllness}`)
console.log(`Doença Pregressa na Família: ${user.illnessesFamily}`)
console.log(`Cirurgia: ${user.surgeryPerformed}`)
console.log(`Uso de Medicamento: ${user.useMedication}`)
console.log(`Lesão Desportiva: ${user.sportsInjuries}`)
console.log(`Objetivo do treino: ${user.trainingObjective}`)
console.log(`Dias disponíveis para treinar: ${user.daysAvailableForTraining} dias.`)
console.log(`Tempo disponível para treino: ${user.timeAvailablePerTraining} minutos.`)

// show results cardiorespiratoryFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Cardiorespiratório")
console.log(`Frequência Cardíaca de Repouso: ${user.restingHeartRate} bpm.`)
console.log(`Frequência Cardíaca Máxima: ${user.maximumHeartRate} bpm.`)
cardiorespiratoryFunctions.showWorkingHeartRate(user)
console.log(`Pressão Arterial de Repouso: ${user.restingBloodPressure.bloodPressureString} mmHg.`)
console.log(`Classificação da Pressão Arterial`)
console.log(`Sistólica: ${user.classificationBloodPressure.systolicClassification} / Diastólica: ${user.classificationBloodPressure.diastolicClassification}`)

// show results anthropometryFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Antropometria")
console.log(`Peso Corporal: ${user.bodyWeight} kilos`)
console.log(`Estatura Corporal: ${user.bodyStature} metros`)
console.log(`Índice de Massa Corporal - IMC: ${user.bodyMassIndex}`)
console.log(`Classificação IMC: ${user.bodyMassIndexClassification}`)
anthropometryFunctions.showPerimeter(user)
console.log(`Relação Cintura Quadril- RCQ: ${user.hipWaistRatio}`)
console.log(`Classificação RCQ: ${user.waistHipRatioClassification}`)
console.log(`Circunfência Cintura - Classificação: ${user.waistCircumference}`)
anthropometryFunctions.showSubcutaneousFolds(user)
console.log(`Percentual de Gordura: ${user.fatPercentage}%`)
console.log(`Classificação % Gordura: ${user.fatPercentageClassification}`)
console.log(`Massa Corporal Gorda: ${user.fatBodyMass} kilos`)
console.log(`Massa Corporal Magra: ${user.leanBodyMass} kilos`)
console.log(`Massa Corporal Ideal Prevista: ${user.expectedIdealBodyMass} kilos`)

// show results neuromuscularFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Neuromuscular")
console.log(`Resultado Teste Flexibilidade Banco de Wells: ${user.wellsBenchTest} cm`)
console.log(`Classificação Flexibilidade: ${user.flexibilityClassification}`)
console.log(`Quantidade de flexões abdominais: ${user.numberOfAbs}`)
console.log(`Classificação Abdominais: ${user.abdominalClassification}`)
console.log(`Quantidade de flexões de braço: ${user.numberOfPushUps}`)
console.log(`Classificação flexões de braço: ${user.flexArmClassification}`)

// show results aerobicFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Aeróbico")
console.log(`VO²máx (mL(kg.min): ${user.voTwoMax}`)
console.log(`VO²máx Previsto(mL(kg.min): ${user.voTwoMaxExpected}`)
console.log(`Classificação do VO²máx: ${user.voTwoMaxClassification}`)
aerobicFunctions.showTrainingSpeed(user)
console.log(`Déficit Funcional Aeróbio: ${user.aerobicFunctionalDeficit}`)
console.log(`Classificação do Déficit Funcional Aeróbio: ${user.aerobicFunctionalDeficitClassification}`)
headerFunctions.baseboard()

console.log(user)
```

Ao executaro programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Nome: Fulana Cicrana
Data de nascimento: 18/11/1996
Idade: 25 anos
Sexo: Feminino
Profissão: Médica
E-mail: fulana@cicrana.com
Celular: 12912348765
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Não'!
Estado físico: Ativo
Doença Pregressa: Sem doença pregressa.
Doença Pregressa na Família: Sem doença pregressa na família.
Cirurgia: Nunca realizou procedimento cirúrgico.
Uso de Medicamento: Não faz uso de medicamento.
Lesão Desportiva: Nunca sofreu lesão desportiva.
Objetivo do treino: Bem-estar e Saúde
Dias disponíveis para treinar: 5 dias.
Tempo disponível para treino: 60 minutos.
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Cardiorespiratório            
===============================
Frequência Cardíaca de Repouso: 55 bpm.
Frequência Cardíaca Máxima: 195 bpm.
Frequência Cardíaca de Treino:
       40% = 111 bpm
       45% = 118 bpm
       50% = 125 bpm
       55% = 132 bpm
       60% = 139 bpm
       65% = 146 bpm
       70% = 153 bpm
       75% = 160 bpm
       80% = 167 bpm
       85% = 174 bpm
       90% = 181 bpm
       95% = 188 bpm
Pressão Arterial de Repouso: 120/80 mmHg.
Classificação da Pressão Arterial
Sistólica: Normal / Diastólica: Normal
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 65 kilos
Estatura Corporal: 1.65 metros
Índice de Massa Corporal - IMC: 23.88
Classificação IMC: Peso Normal
 - Perimetria Corporal - 
   Braço: 23 cm
   Antebraço: 12 cm
   Cintura: 67 cm
   Quadril: 85 cm
   Coxa: 50 cm
   Panturrilha: 38 cm
Relação Cintura Quadril- RCQ: 0.79
Classificação RCQ: Alto Risco
Circunfência Cintura - Classificação: Nenhum Risco
 - Dobras Cutâneas - 
   Triciptal: 8 mm
   Subescapular: 15 mm
   Peitoral: 6 mm
   SupraIliaca: 22 mm
   Abdominal: 25 mm
   Coxa: 15 mm
   Panturrilha: 9 mm
Percentual de Gordura: 17.44%
Classificação % Gordura: Abaixo da média
Massa Corporal Gorda: 11.3 kilos
Massa Corporal Magra: 53.7 kilos
Massa Corporal Ideal Prevista: 69.7 kilos
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Neuromuscular            
===============================
Resultado Teste Flexibilidade Banco de Wells: 35 cm
Classificação Flexibilidade: Boa
Quantidade de flexões abdominais: 32
Classificação Abdominais: Regular
Quantidade de flexões de braço: 5
Classificação flexões de braço: Muito Fraco
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Aeróbico            
===============================
VO²máx (mL(kg.min): 36.26
VO²máx Previsto(mL(kg.min): 38.75
Classificação do VO²máx: Regular
 - Velocidade de Treino - 
       40% = 5.22 km/h
       45% = 5.74 km/h
       50% = 6.25 km/h
       55% = 6.77 km/h
       60% = 7.29 km/h
       65% = 7.81 km/h
       70% = 8.33 km/h
       75% = 8.84 km/h
       80% = 9.36 km/h
       85% = 9.88 km/h
       90% = 10.4 km/h
       95% = 10.92 km/h
Déficit Funcional Aeróbio: 6.43
Classificação do Déficit Funcional Aeróbio: Bom
===============================
```

## Outros

### Observações

**comments( )** function irá perguntar ao usuário se ele quer digitar alguma observação. Só aceita com resposta os numerais 1 e 2. Caso algum valor diferente seja digitado, a function **incorrectValue( )** deve ser chamada e o usuário deve digitar uma resposta correta. Digitado o número 1 (sim), o usuário deve digitar a observação em caracteres/texto. Caso seja constatado que a observação não possue caractere/texto, a function **incorrectValue( )** deverá ser chamada e o usuário deverá digitar a observação. Caso o usuário digite 2, a mensagem **"Sem Observações!"** deverá ser retornada. A function **comments( )** retorna a observação digitada pelo usuário.

Logo, em **personalData.js**:

```js
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
```

Ainda em **personalData.js** vamos requerer a variável **anamnesisFunctions** que será usada na function **comments( )**:

```js
/* personal data functions */

var input = require('readline-sync')

const { validationFunctions } = require('./validationFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')
```

Em **saf.js** vamos atribuir o retorno da function **comments( )** ao objeto ***user*** e depois mostrar o resultado:

```js
console.clear()
headerFunctions.systemHeader()
headerFunctions.subTitle("Observações")

// variables personalDataFunctions
user.comments = personalDataFunctions.comments()
```

```js
// show results personalDataFunctions
headerFunctions.systemHeader()
headerFunctions.subTitle("Observações")
console.log(user.comments)
headerFunctions.baseboard()
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Observações            
===============================
Observações?
Escolha:
[1] Sim
[2] Não
1
Digite a Observação:
Usuário ficou tonto no teste cardiorrespiratório.
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Observações            
===============================
Usuário ficou tonto no teste cardiorrespiratório.
===============================
```

Com isto chega ao final a parte **Dados pessoais** do projeto. Como ficaram os arquivos do programa até esta etapa:

Arquivo **personalDataFunctions.js** completo:

```js
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

```

Antes de mostrar como ficou o arquivo **saf.js** vamos fazer algumas alterções neste arquivo e dá funcioalidade ao programa.

Vamos fazer a importar o objeto **validationFunctions**:

```js
const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')
const { anamnesisQuestions } = require('./anamnesisFunctions')
const { cardiorespiratoryFunctions } = require('./cardiorespiratoryFunctions')
const { percentageValues } = require('./cardiorespiratoryFunctions')
const { anthropometryFunctions } = require('./anthropometryFunctions')
const { neuromuscularFunctions } = require('./neuromuscularFunctions')
const { aerobicFunctions } = require('./aerobicFunctions')
const { validationFunctions } = require('./validationFunctions')
```

  Agora vamos criar a variável **input** e uma variável chamada **choiseMenu**. Esta variável será usada na funcionalidade de menu que iremos criar. Ao iniciar o programa, um menu deve ser apresentado ao usuário mostrando as opções:

```shell
[1] Iniciar a avaliação!
[2] Sair do sistema!
```

Caso o usuário digite **[1]** a avaliação deverá ser iniciada e ao finalizar a inserção de todos os dados, o menu deve retornar da seguinte forma:

```shell
[1] Iniciar a avaliação!
[2] Sair do sistema!
[3] Mostrar resultados!
```

Digitando o número **[1]** a avaliação irá começar novamente, digitando **[2]** o sistema será encerrado e digitando **[3]** os resultados serão apresentados e depois destes, o menu aparece novamente. Este menu assim que iniciado o sistema só poderá receber números de 1 a 2 e após a inserção dos dados, apenas números de 1 a 3. Caso qualquer outro valor seja digitado, o sistema não aceitará e o menu continua sendo apresentado até que o usuário digite um dos valores aceitos.

Outro fator é que de acordo com a opção escolhida pelo usuário, o cabeçalho do sistema e uma mensagem de carregamento de 20% até 100% será apresentada conforme a baixo:

Digitando **[1]**:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
Iniciando..20%
```

Digitando **[2]**:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
Finalizando..20%
```

Digitando **[3]**:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
Carregando..20%
```

Outro detalhe é que ao iniciar o programa, uma mensagem de boas vindas deve ser apresentada antes do menu. Para isto, vamos criar a function **welcome( )** e executá-la antes do menu. Atenção, esta mensagem deverá aparecer apenas ao iniciar o programa. Após o usuário inserir os dados da avalição, esta mensagem não pode aparecer. Logo, em **headerFunctions.js**:

```js
welcome(){
    console.log(`\nBem-vindo ao Sistema de Avaliação Física!\n`)
  },
```

Para criar o sistema de carregamento, vamos criar a function **load( )** que recebe como parâmetro um título, de acordo com a opção escoliha pelo uisuário. Logo, em **headerFunctions.js**:

```js
load(title){
  
    function syncDelay(milliseconds){
      var start = new Date().getTime();
      var end=0;
      while( (end-start) < milliseconds){
          end = new Date().getTime();
      }
     }  
    
    let carregar = `..`
    let percentual = 20
    for(i = 1; i <= 5; i++){
      console.clear()
      headerFunctions.systemHeader()
      console.log(`${title}${carregar}${percentual}%`)
      syncDelay(1000);
      carregar += `..`
      percentual += 20
    }
     console.clear()
   },
```

Quando o sistema for encerrado, deverá ser apresentado a mensagem `Sistema Encerrado!`. Para isto, vamos criar a function **theAnd( )**. Logo, em **headerFunctions.js**:

```js
theAnd(){
    console.log(`Sistema Encerrado!`)
  },
```

Agora em **saf.js** vamos criar este sistema:

```js
const user = { }
var input = require('readline-sync')
var choiseMenu = 0

do{

  let itsRegexNumber = false
  let regexFromOneToThree = /^[1-3]$/
  let regexFromOneToTwo = /^[1-2]$/
  let objectSize = Object.keys(user).length == 0

  do{

    choiseMenu == 3 ? `` : console.clear()
    headerFunctions.systemHeader()
    objectSize ? headerFunctions.welcome() : ``
    console.log(`[1] Iniciar a avaliação!`)
    console.log(`[2] Sair do sistema!`)
    objectSize ? `` : console.log(`[3] Mostrar resultados!`)
    choiseMenu = input.question(``)
    if(objectSize){
      itsRegexNumber = validationFunctions.isRegularExpression(choiseMenu, regexFromOneToTwo)
      console.clear()  
    } else {
      itsRegexNumber = validationFunctions.isRegularExpression(choiseMenu, regexFromOneToThree)
    }
    
  }while(!itsRegexNumber)
  
  switch (Number(choiseMenu)) {

    case 1:
      headerFunctions.load(`Iniciando`)
      headerFunctions.systemHeader()
      headerFunctions.subTitle("Dados Pessoais")

      // variables personalDataFunctions
      
      break

    case 3:
     
      console.clear()
      headerFunctions.load(`Carregando`)
      headerFunctions.systemHeader()
      headerFunctions.subTitle("Dados Pessoais")
      
      // show results personalDataFunctions
      
      break

    default:

      console.clear()
      headerFunctions.load(`Finalizando`)
      headerFunctions.systemHeader()
      headerFunctions.theAnd()
      headerFunctions.baseboard()

      break
  }

}while(choiseMenu != 2)
```

Dentro do sistema **switch** em **case 1** vamos colocar todas as partes de inserção de dados que já criamos. Dentro de **case 3** vamos colocar todas as partes de mostrar os resultados. Ao final do programa, vamos fazer um **console.log** do objeto _**user**_. Logo, o arquivo **saf.js** completo:

```js
/* physical assessment system */

const { headerFunctions } = require('./headerFunctions')
const { personalDataFunctions } = require('./personalDataFunctions')
const { anamnesisFunctions } = require('./anamnesisFunctions')
const { anamnesisQuestions } = require('./anamnesisFunctions')
const { cardiorespiratoryFunctions } = require('./cardiorespiratoryFunctions')
const { percentageValues } = require('./cardiorespiratoryFunctions')
const { anthropometryFunctions } = require('./anthropometryFunctions')
const { neuromuscularFunctions } = require('./neuromuscularFunctions')
const { aerobicFunctions } = require('./aerobicFunctions')
const { validationFunctions } = require('./validationFunctions')

const user = { }
var input = require('readline-sync')
var choiseMenu = 0

do{

  let itsRegexNumber = false
  let regexFromOneToThree = /^[1-3]$/
  let regexFromOneToTwo = /^[1-2]$/
  let objectSize = Object.keys(user).length == 0

  do{

    choiseMenu == 3 ? `` : console.clear()
    headerFunctions.systemHeader()
    objectSize ? headerFunctions.welcome() : ``
    console.log(`[1] Iniciar a avaliação!`)
    console.log(`[2] Sair do sistema!`)
    objectSize ? `` : console.log(`[3] Mostrar resultados!`)
    choiseMenu = input.question(``)
    if(objectSize){
      itsRegexNumber = validationFunctions.isRegularExpression(choiseMenu, regexFromOneToTwo)
      console.clear()  
    } else {
      itsRegexNumber = validationFunctions.isRegularExpression(choiseMenu, regexFromOneToThree)
    }
    
  }while(!itsRegexNumber)
  
  switch (Number(choiseMenu)) {

    case 1:
      headerFunctions.load(`Iniciando`)
      headerFunctions.systemHeader()
      headerFunctions.subTitle("Dados Pessoais")

      // variables personalDataFunctions
      user.name = personalDataFunctions.userName()
      user.birthdayInBrazilianFormat =  personalDataFunctions.dateOfBirth()
      user.birthdayInFullFormat = personalDataFunctions.dateInFullFormat(user.birthdayInBrazilianFormat)
      user.age = personalDataFunctions.age(user)
      user.sexNumber = personalDataFunctions.sexNumber()
      user.sex = personalDataFunctions.showSex(user)
      user.profession = personalDataFunctions.userProfession()
      user.userEmail = personalDataFunctions.userEmail()
      user.phoneNumber = personalDataFunctions.phoneNumber()
      console.clear()

      console.clear()
      headerFunctions.systemHeader()
      headerFunctions.subTitle("Anamnese")

      // variables anamnesisFunctions
      user.questionnairePARQ = anamnesisFunctions.questionnairePARQ()
      user.currentPhysicalState = anamnesisFunctions.currentPhysicalState()
      user.pastIllness = anamnesisFunctions.questions(anamnesisQuestions.pastIllness)
      user.illnessesFamily = anamnesisFunctions.questions(anamnesisQuestions.illnessesInTheFamily)
      user.surgeryPerformed = anamnesisFunctions.questions(anamnesisQuestions.surgeryPerformed)
      user.useMedication = anamnesisFunctions.questions(anamnesisQuestions.useMedication)
      user.sportsInjuries = anamnesisFunctions.questions(anamnesisQuestions.sportsInjuries)
      user.trainingObjective = anamnesisFunctions.trainingObjective()
      user.daysAvailableForTraining = anamnesisFunctions.daysAvailableForTraining()
      user.timeAvailablePerTraining = anamnesisFunctions.timeAvailablePerTraining()

      console.clear()
      headerFunctions.systemHeader()
      headerFunctions.subTitle("Cardiorrespiratório")

      // variables cardiorespiratoryFunctions
      user.restingHeartRate = cardiorespiratoryFunctions.restingHeartRate()
      user.maximumHeartRate = cardiorespiratoryFunctions.maximumHeartRate(user)
      user.percentageValues = percentageValues
      user.workingHeartRate = cardiorespiratoryFunctions.workingHeartRate(user)
      user.restingBloodPressure = cardiorespiratoryFunctions.bloodPressure()
      user.classificationBloodPressure = cardiorespiratoryFunctions.classificationOfBloodPressure(user)

      console.clear()
      headerFunctions.systemHeader()
      headerFunctions.subTitle("Antropometria")

      // variables anthropometryFunctions
      user.bodyWeight = anthropometryFunctions.bodyWeight()
      user.bodyStature = anthropometryFunctions.stature()
      user.bodyMassIndex = anthropometryFunctions.bodyMassIndex(user)
      user.bodyMassIndexClassification = anthropometryFunctions.bodyMassIndexClassification(user)
      user.bodyPerimeter = anthropometryFunctions.bodyPerimetry()
      user.hipWaistRatio = anthropometryFunctions.hipWaistRatio(user)
      user.waistHipRatioClassification = anthropometryFunctions.waistHipRatioClassification(user)
      user.waistCircumference = anthropometryFunctions.waistCircumferenceClassification(user)
      user.subcutaneousFolds = anthropometryFunctions.subcutaneousMeasures()
      user.fatPercentage = anthropometryFunctions.fatPercentage(user)
      user.fatPercentageClassification = anthropometryFunctions.fatPercentageClassification(user)
      user.fatBodyMass = anthropometryFunctions.fatBodyMass(user)
      user.leanBodyMass = anthropometryFunctions.leanBodyMass(user)
      user.expectedIdealBodyMass = anthropometryFunctions.expectedIdealBodyMass(user)

      console.clear()
      headerFunctions.systemHeader()
      headerFunctions.subTitle("Neuromuscular")

      // variables neuromuscularFunctions
      user.wellsBenchTest = neuromuscularFunctions.wellsBenchTest()
      user.flexibilityClassification = neuromuscularFunctions.flexibilityClassification(user)
      user.numberOfAbs = neuromuscularFunctions.abdominalTest()
      user.abdominalClassification = neuromuscularFunctions.abdominalClassification(user)
      user.numberOfPushUps = neuromuscularFunctions.flexArmTest()
      user.flexArmClassification = neuromuscularFunctions.flexArmClassification(user)

      console.clear()
      headerFunctions.systemHeader()
      headerFunctions.subTitle("Aeróbico")

      // variables aerobicFunctions
      user.voTwoMax = aerobicFunctions.voTwoMax(user)
      user.voTwoMaxExpected = aerobicFunctions.vo2maxExpected(user)
      user.voTwoMaxClassification = aerobicFunctions.vo2maxClassification(user)
      user.trainingSpeed = aerobicFunctions.trainingSpeed(user)
      user.aerobicFunctionalDeficit = aerobicFunctions.aerobicFunctionalDeficit(user)
      user.aerobicFunctionalDeficitClassification = aerobicFunctions.aerobicFunctionalDeficitClassification(user)

      console.clear()
      headerFunctions.systemHeader()
      headerFunctions.subTitle("Observações")

      // variables personalDataFunctions
      user.comments = personalDataFunctions.comments()

      break

    case 3:
      
      console.clear()
      headerFunctions.load(`Carregando`)
      headerFunctions.systemHeader()
      headerFunctions.subTitle("Dados Pessoais")

      // show results personalDataFunctions
      console.log(`Nome: ${user.name}`)
      console.log(`Data de nascimento: ${user.birthdayInBrazilianFormat}`)
      console.log(`Idade: ${user.age} anos`)
      console.log(`Sexo: ${user.sex}`)
      console.log(`Profissão: ${user.profession}`)
      console.log(`E-mail: ${user.userEmail}`)
      console.log(`Celular: ${user.phoneNumber}`)

      // show results anamnesisFunctions
      headerFunctions.systemHeader()
      headerFunctions.subTitle("Anamnese")
      console.log(`Questionário PAR-Q: ${user.questionnairePARQ}`)
      console.log(`Estado físico: ${anamnesisFunctions.showPhysicalState(user)}`)
      console.log(`Doença Pregressa: ${user.pastIllness}`)
      console.log(`Doença Pregressa na Família: ${user.illnessesFamily}`)
      console.log(`Cirurgia: ${user.surgeryPerformed}`)
      console.log(`Uso de Medicamento: ${user.useMedication}`)
      console.log(`Lesão Desportiva: ${user.sportsInjuries}`)
      console.log(`Objetivo do treino: ${user.trainingObjective}`)
      console.log(`Dias disponíveis para treinar: ${user.daysAvailableForTraining} dias.`)
      console.log(`Tempo disponível para treino: ${user.timeAvailablePerTraining} minutos.`)

      // show results cardiorespiratoryFunctions
      headerFunctions.systemHeader()
      headerFunctions.subTitle("Cardiorespiratório")
      console.log(`Frequência Cardíaca de Repouso: ${user.restingHeartRate} bpm.`)
      console.log(`Frequência Cardíaca Máxima: ${user.maximumHeartRate} bpm.`)
      cardiorespiratoryFunctions.showWorkingHeartRate(user)
      console.log(`Pressão Arterial de Repouso: ${user.restingBloodPressure.bloodPressureString} mmHg.`)
      console.log(`Classificação da Pressão Arterial`)
      console.log(`Sistólica: ${user.classificationBloodPressure.systolicClassification} / Diastólica: ${user.classificationBloodPressure.diastolicClassification}`)

      // show results anthropometryFunctions
      headerFunctions.systemHeader()
      headerFunctions.subTitle("Antropometria")
      console.log(`Peso Corporal: ${user.bodyWeight} kilos`)
      console.log(`Estatura Corporal: ${user.bodyStature} metros`)
      console.log(`Índice de Massa Corporal - IMC: ${user.bodyMassIndex}`)
      console.log(`Classificação IMC: ${user.bodyMassIndexClassification}`)
      anthropometryFunctions.showPerimeter(user)
      console.log(`Relação Cintura Quadril- RCQ: ${user.hipWaistRatio}`)
      console.log(`Classificação RCQ: ${user.waistHipRatioClassification}`)
      console.log(`Circunfência Cintura - Classificação: ${user.waistCircumference}`)
      anthropometryFunctions.showSubcutaneousFolds(user)
      console.log(`Percentual de Gordura: ${user.fatPercentage}%`)
      console.log(`Classificação % Gordura: ${user.fatPercentageClassification}`)
      console.log(`Massa Corporal Gorda: ${user.fatBodyMass} kilos`)
      console.log(`Massa Corporal Magra: ${user.leanBodyMass} kilos`)
      console.log(`Massa Corporal Ideal Prevista: ${user.expectedIdealBodyMass} kilos`)

      // show results neuromuscularFunctions
      headerFunctions.systemHeader()
      headerFunctions.subTitle("Neuromuscular")
      console.log(`Resultado Teste Flexibilidade Banco de Wells: ${user.wellsBenchTest} cm`)
      console.log(`Classificação Flexibilidade: ${user.flexibilityClassification}`)
      console.log(`Quantidade de Flexões Abdominais: ${user.numberOfAbs}`)
      console.log(`Classificação Abdominais: ${user.abdominalClassification}`)
      console.log(`Quantidade de Flexões de Braço: ${user.numberOfPushUps}`)
      console.log(`Classificação Flexões de Braço: ${user.flexArmClassification}`)

      // show results aerobicFunctions
      headerFunctions.systemHeader()
      headerFunctions.subTitle("Aeróbico")
      console.log(`VO²máx (mL(kg.min): ${user.voTwoMax}`)
      console.log(`VO²máx Previsto(mL(kg.min): ${user.voTwoMaxExpected}`)
      console.log(`Classificação do VO²máx: ${user.voTwoMaxClassification}`)
      aerobicFunctions.showTrainingSpeed(user)
      console.log(`Déficit Funcional Aeróbio: ${user.aerobicFunctionalDeficit}`)
      console.log(`Classificação do Déficit Funcional Aeróbio: ${user.aerobicFunctionalDeficitClassification}`)

      // show results personalDataFunctions
      headerFunctions.systemHeader()
      headerFunctions.subTitle("Observações")
      console.log(user.comments)
      headerFunctions.baseboard()

      break

    default:

      console.clear()
      headerFunctions.load(`Finalizando`)
      headerFunctions.systemHeader()
      headerFunctions.theAnd()
      headerFunctions.baseboard()

      break
  }

}while(choiseMenu != 2)

console.log(user)
```

Ao executar o programa:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================

Bem-vindo ao Sistema de Avaliação Física!

[1] Iniciar a avaliação!
[2] Sair do sistema!
```

Ao iniciar a avaliação:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
Iniciando..20%
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Digite seu nome: Fulano Cicrano
Digite sua data de nascimento (DD/MM/AAAA): 02/09/2000
Escolha Sexo:
[1] Masculino
[2] Feminino
1
Digite sua profissão: Engenheiro
Digite seu email: fulano@cicrano.com
Digite seu número de celular com DDD: 13987651234
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
1 - Seu médico já mencionou alguma vez que você tem uma condição cardíaca e que você só deve realizar atividade física recomendada por um médico?
Escolha:
[1] Sim
[2] Não
2
2 - Você sente dor no tórax quando realiza atividade física?
Escolha:
[1] Sim
[2] Não
2
3 - No mês passado, você teve dor torácica quando não estava realizando atividade física?
Escolha:
[1] Sim
[2] Não
2
4 - Você perdeu o equilíbrio por causa de tontura ou alguma vez perdeu a consciência?
Escolha:
[1] Sim
[2] Não
2
5 - Você tem algum problema ósseo ou de articulação que poderia piorar em conseqüência de uma alteração em sua atividade física?
Escolha:
[1] Sim
[2] Não
2
6 - Seu médico está prescrevendo medicamentos para sua pressão ou condição cardíaca?
Escolha:
[1] Sim
[2] Não
2
7 - Você teria alguma razão para não praticar exercício físico ou outro problema que impeça?
Escolha:
[1] Sim
[2] Não
2
Qual seu estado físico atualmente? 
[1] Sedentário
[2] Ativo
2
Avaliado possue doença pregressa?
Escolha:
[1] Sim
[2] Não
2
Avaliado possue alguém da família com doença pregressa?
Escolha:
[1] Sim
[2] Não
2
Avaliado já realizou precedimento cirúrgico?
Escolha:
[1] Sim
[2] Não
2
Avaliado faz uso de medicamentos?
Escolha:
[1] Sim
[2] Não
2
Avaliado já sofreu alguma lesão desportiva?
Escolha:
[1] Sim
[2] Não
2
Qual é o objetivo do seu treino?
[1] Estético
[2] Bem-estar e Saúde
[3] Terapêutico
[4] Recreativo
[5] Desportivo
2
Digite a quantidade de dias disponíveis para treinar: 5
Digite o tempo disponível para treino (min): 60
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Cardiorrespiratório            
===============================
Digite a Frequência Cardíaca de Repouso (bpm): 60
Digite a pressão arterial [000/000] (mmHg): 120/80
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Digite seu peso [0000.0](kg): 85.5
Digite sua estatura [0.00](m): 1.86
 - Perimetria Corporal - 
Digite a perimetria - Braço [000.0](cm): 35
Digite a perimetria - Antebraço [000.0](cm): 29
Digite a perimetria - Cintura [000.0](cm): 85
Digite a perimetria - Quadril [000.0](cm): 90
Digite a perimetria - Coxa [000.0](cm): 55.8
Digite a perimetria - Panturrilha [000.0](cm): 45
 - Dobras Cutâneas - 
Digite a dobra cutânea - Triciptal [00](mm): 10
Digite a dobra cutânea - Subescapular [00](mm): 15
Digite a dobra cutânea - Peitoral [00](mm): 5
Digite a dobra cutânea - SupraIliaca [00](mm): 20
Digite a dobra cutânea - Abdominal [00](mm): 25
Digite a dobra cutânea - Coxa [00](mm): 18
Digite a dobra cutânea - Panturrilha [00](mm): 13
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Neuromuscular            
===============================
Teste de flexibilidade banco de Wells
Digite a distância alcaçada [00](cm) : 25
Teste de Abdominais
Digite a quantidade de repetições em 1 min [00]: 36
Teste de Flexão de Braço
Digite a quantidade de repetições [00]: 30
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Aeróbico            
===============================
Escolha um teste: 
[1] Cicloergômetro - Astrand-Rhyming
[2] Cooper - 12 min
[3] Caminhada de 1600 - Rockport
[4] Banco - McArdle
2
Teste de Cooper - 12 min:
Digite a distância atingida pelo usuário (m): 2500
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Observações            
===============================
Observações?
Escolha:
[1] Sim
[2] Não
2
```

Ao mostrar resultados:

```
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
[1] Iniciar a avaliação!
[2] Sair do sistema!
[3] Mostrar resultados!
3
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
Carregando........80%
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Dados Pessoais            
===============================
Nome: Fulano Cicrano
Data de nascimento: 02/09/2000
Idade: 21 anos
Sexo: Masculino
Profissão: Engenheiro
E-mail: fulano@cicrano.com
Celular: 13987651234
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Anamnese            
===============================
Questionário PAR-Q: Todas as respostas do questionário foram 'Não'!
Estado físico: Ativo
Doença Pregressa: Sem doença pregressa.
Doença Pregressa na Família: Sem doença pregressa na família.
Cirurgia: Nunca realizou procedimento cirúrgico.
Uso de Medicamento: Não faz uso de medicamento.
Lesão Desportiva: Nunca sofreu lesão desportiva.
Objetivo do treino: Bem-estar e Saúde
Dias disponíveis para treinar: 5 dias.
Tempo disponível para treino: 60 minutos.
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Cardiorespiratório            
===============================
Frequência Cardíaca de Repouso: 60 bpm.
Frequência Cardíaca Máxima: 199 bpm.
Frequência Cardíaca de Treino:
       40% = 116 bpm
       45% = 123 bpm
       50% = 130 bpm
       55% = 136 bpm
       60% = 143 bpm
       65% = 150 bpm
       70% = 157 bpm
       75% = 164 bpm
       80% = 171 bpm
       85% = 178 bpm
       90% = 185 bpm
       95% = 192 bpm
Pressão Arterial de Repouso: 120/80 mmHg.
Classificação da Pressão Arterial
Sistólica: Normal / Diastólica: Normal
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Antropometria            
===============================
Peso Corporal: 85.5 kilos
Estatura Corporal: 1.86 metros
Índice de Massa Corporal - IMC: 24.71
Classificação IMC: Peso Normal
 - Perimetria Corporal - 
   Braço: 35 cm
   Antebraço: 29 cm
   Cintura: 85 cm
   Quadril: 90 cm
   Coxa: 55.8 cm
   Panturrilha: 45 cm
Relação Cintura Quadril- RCQ: 0.94
Classificação RCQ: Alto Risco
Circunfência Cintura - Classificação: Nenhum Risco
 - Dobras Cutâneas - 
   Triciptal: 10 mm
   Subescapular: 15 mm
   Peitoral: 5 mm
   SupraIliaca: 20 mm
   Abdominal: 25 mm
   Coxa: 18 mm
   Panturrilha: 13 mm
Percentual de Gordura: 13.49%
Classificação % Gordura: Abaixo da média
Massa Corporal Gorda: 11.5 kilos
Massa Corporal Magra: 74 kilos
Massa Corporal Ideal Prevista: 87.1 kilos
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Neuromuscular            
===============================
Resultado Teste Flexibilidade Banco de Wells: 25 cm
Classificação Flexibilidade: Regular
Quantidade de Flexões Abdominais: 36
Classificação Abdominais: Regular
Quantidade de Flexões de Braço: 30
Classificação Flexões de Braço: Regular
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Aeróbico            
===============================
VO²máx (mL(kg.min): 44.6
VO²máx Previsto(mL(kg.min): 48.45
Classificação do VO²máx: Bom
 - Velocidade de Treino - 
       40% = 6.72 km/h
       45% = 7.36 km/h
       50% = 8 km/h
       55% = 8.63 km/h
       60% = 9.27 km/h
       65% = 9.91 km/h
       70% = 10.54 km/h
       75% = 11.18 km/h
       80% = 11.82 km/h
       85% = 12.46 km/h
       90% = 13.09 km/h
       95% = 13.73 km/h
Déficit Funcional Aeróbio: 7.95
Classificação do Déficit Funcional Aeróbio: Bom
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
           Observações            
===============================
Sem Observações!
===============================
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
[1] Iniciar a avaliação!
[2] Sair do sistema!
[3] Mostrar resultados!
2
```

Ao sair do sistema:

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
Finalizando..20%
```

```shell
===============================
  SISTEMA DE AVALIAÇÃO FÍSICA  
===============================
Sistema Encerrado!
===============================
{
  name: 'Fulano Cicrano',
  birthdayInBrazilianFormat: '02/09/2000',
  birthdayInFullFormat: 2000-09-02T03:00:00.000Z,
  age: 21,
  sexNumber: 1,
  sex: 'Masculino',
  profession: 'Engenheiro',
  userEmail: 'fulano@cicrano.com',
  phoneNumber: '13987651234',
  questionnairePARQ: "Todas as respostas do questionário foram 'Não'!",
  currentPhysicalState: 2,
  pastIllness: 'Sem doença pregressa.',
  illnessesFamily: 'Sem doença pregressa na família.',
  surgeryPerformed: 'Nunca realizou procedimento cirúrgico.',
  useMedication: 'Não faz uso de medicamento.',
  sportsInjuries: 'Nunca sofreu lesão desportiva.',
  trainingObjective: 'Bem-estar e Saúde',
  daysAvailableForTraining: 5,
  timeAvailablePerTraining: 60,
  restingHeartRate: 60,
  maximumHeartRate: 199,
  percentageValues: [
    40, 45, 50, 55, 60,
    65, 70, 75, 80, 85,
    90, 95
  ],
  workingHeartRate: [
    116, 123, 130, 136,
    143, 150, 157, 164,
    171, 178, 185, 192
  ],
  restingBloodPressure: { systolic: 120, diastolic: 80, bloodPressureString: '120/80' },
  classificationBloodPressure: {
    systolicClassification: 'Normal',
    diastolicClassification: 'Normal'
  },
  bodyWeight: 85.5,
  bodyStature: 1.86,
  bodyMassIndex: 24.71,
  bodyMassIndexClassification: 'Peso Normal',
  bodyPerimeter: {
    'Braço': '35',
    'Antebraço': '29',
    Cintura: '85',
    Quadril: '90',
    Coxa: '55.8',
    Panturrilha: '45'
  },
  hipWaistRatio: 0.94,
  waistHipRatioClassification: 'Alto Risco',
  waistCircumference: 'Nenhum Risco',
  subcutaneousFolds: {
    Triciptal: '10',
    Subescapular: '15',
    Peitoral: '5',
    SupraIliaca: '20',
    Abdominal: '25',
    Coxa: '18',
    Panturrilha: '13'
  },
  fatPercentage: 13.49,
  fatPercentageClassification: 'Abaixo da média',
  fatBodyMass: 11.5,
  leanBodyMass: 74,
  expectedIdealBodyMass: 87.1,
  wellsBenchTest: 25,
  flexibilityClassification: 'Regular',
  numberOfAbs: 36,
  abdominalClassification: 'Regular',
  numberOfPushUps: 30,
  flexArmClassification: 'Regular',
  voTwoMax: 44.6,
  voTwoMaxExpected: 48.45,
  voTwoMaxClassification: 'Bom',
  trainingSpeed: [
     6.72,  7.36,     8,
     8.63,  9.27,  9.91,
    10.54, 11.18, 11.82,
    12.46, 13.09, 13.73
  ],
  aerobicFunctionalDeficit: 7.95,
  aerobicFunctionalDeficitClassification: 'Bom',
  comments: 'Sem Observações!'
}
```

Com isto chegamos ao final do projeto. Espero que tenha gostado e aprendido bastante.

Obrigado pela atenção e até o próximo projeto! :slightly_smiling_face: :man_technologist:













