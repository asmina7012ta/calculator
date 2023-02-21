function displayNum(num){
    result.value+=num
     
}

function evaluateExpr(){
  //expr=result.value
  //op=eval(expr)
  //result.value=op
    result.value=eval(result.value)//string out put evaluation
   
}
function allClear(){
    
    result.value=" "
}
function backSpace(){
    result.value=result.value.slice(0,-1)//copy of a portion of an array into a new array object selected from start to end ( end not included) where start and end represent the index of items in that array. 
}