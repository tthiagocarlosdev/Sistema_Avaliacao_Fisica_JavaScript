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