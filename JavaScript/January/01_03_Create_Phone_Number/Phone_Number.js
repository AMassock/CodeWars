function createPhoneNumber(numbers){
    let mask = '(xxx) xxx-xxxx';

    numbers.forEach(element => {
        mask = mask.replace('x', element);
    });
    console.log(mask);
    return mask;
}

// Tests
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]); // "(111) 111-1111"
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890")
