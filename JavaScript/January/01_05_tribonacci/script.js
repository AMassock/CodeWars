function tribonacci(signature,n){
    if (n===0) return []; //short circuit on 0
    let outArray = [...signature]; //start the sequence
    for (let i=3; i<n; i++){
        outArray.push(outArray[i-3]+outArray[i-2]+outArray[i-1])
    }
    if (n<=3){ //return the right # if it is below 4
        return outArray.slice(0,n);
    }
     return outArray //otherwise smooth sailing
   }
   
   tribonacci([1,2,3],20);

