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