function tribonacci(signature,n){
    if(n===0) {
      
        return [];
        
        }
      
    let outArray = [...signature];
    
    for(let i=3; i<n; i++) {
      
          outArray.push(outArray[i-3]+outArray[i-2]+outArray[i-1])
      
      }
    
      if(n<=3) { 
        
          return outArray.slice(0,n);
        
      }
       return outArray
   }
   
   tribonacci([1,2,3],20);

