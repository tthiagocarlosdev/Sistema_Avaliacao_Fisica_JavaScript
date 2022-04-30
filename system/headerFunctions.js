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

  welcome(){
    console.log(`\nBem-vindo ao Sistema de Avaliação Física!\n`)
  },

  // function load
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

  theAnd(){
    console.log(`Sistema Encerrado!`)
  },

}

module.exports = {
  headerFunctions
}