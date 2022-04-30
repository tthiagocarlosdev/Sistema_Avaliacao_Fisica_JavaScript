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