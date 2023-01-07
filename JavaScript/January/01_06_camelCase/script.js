function solution(string) {
    let hasCap = /[A-Z]/.test(string);

    if(hasCap) {
        let split = string.split(/(?=[A-Z])/);
        let str = split.join(' ');

        // console.log(str);
        // console.log(`${string} has a capital letter`);
        return str
    } else {
        // console.log(string);
        return string
    }
}

// Tests

solution("camelCasing"); // =>  "camel Casing"
// solution("identifier");  // =>  "identifier"