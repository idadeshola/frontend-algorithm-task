//first 
function convertFahrToCelsius(fahrenheit) {
  if(typeof fahrenheit !== "number"){
    return `${fahrenheit} is not a valid number but a/an ${typeof fahrenheit}`
  }
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
 return fToCel.toFixed(4)
}

convertFahrToCelsius('20');

//second
function checkYuGiOh(n){
   if(typeof n !== "number"){
    return `in valid parameter ${n}`
  }
  let nArray = []
  for(let i = 0; i <= n; i++){
   nArray.push(i)
  }
   console.log (nArray,"narray")
  let changedArray = []
 
  for(let num of nArray){
    console.log(num, "num")
    if(num % 30 == 0){
      changedArray.push("yu-gi-oh")
    }
    else if(num % 15 == 0){
      changedArray.push("gi-ho")
    }else if(num % 10 == 0){
      changedArray.push("yu-ho")
    }  
     else if(num % 6 == 0){
      changedArray.push("yu-gi")
    }
    else if(num % 2 == 0 ){
     changedArray.push("yu")
    }else if(num % 3 == 0){
      changedArray.push("gi")
    }else if(num % 5 == 0 ){ 
      changedArray.push("ho")
    }
   else{
      changedArray.push(num)
    }
  }
  console.log(nArray,"narray")
  return changedArray
 
}

checkYuGiOh(30)