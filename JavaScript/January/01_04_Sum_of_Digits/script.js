function digitalRoot(n) {
    let sum = n;
    let arr = []
    let reducer = (a,b) => parseInt(a) + parseInt(b)
    console.log(sum);

    while(sum > 9) {
        arr = sum.toString().split('');
        sum = arr.reduce(reducer);
    }
    console.log(sum);
    return sum

    }


// Tests:
// digitalRoot(16);
// digitalRoot(942);
// digitalRoot(132189);
digitalRoot(493193);

    // arr = Array.from(String(n), Number);
    // for(let i = 0; i < arr.length; i++) {

    //     sum += arr[i];
    //     console.log(sum);


        // if(sum > 10) {

        //     arr2 = Array.from(String(sum), Number);
        //     console.log(sum);
        //     let a = arr2[0];
        //     let b = arr2[1];
        //     sum = a + b;

        //     console.log(sum);

        //     // for(let j = 0; j < arr2.length; j++) {
                

        //     //     sum += arr2[j];
         
        //     // }
        // }