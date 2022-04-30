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