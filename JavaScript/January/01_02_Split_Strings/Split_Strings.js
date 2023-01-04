function solution(str){
    if(str.length % 2 == 0) {
      let arr1 = str.split(/(?=(?:..)*$)/);
      console.log(arr1);
      return arr1
    } else {
      let arr2 = [];
      str += '_';
      for(let i = 0; i < str.length; i+= 2) {
        arr2.push(`${str[i] + str[i+1]}`)
      }
      console.log(arr2);
      return arr2;
    }
 }