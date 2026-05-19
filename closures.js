function outerfun(){
  let outervar = "This is outer variable"
    function innerfun(){
      console.log(outervar)
    }
  return innerfun;
}

const closurefun = outerfun()

closurefun()
