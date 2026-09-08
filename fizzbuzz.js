// This is our main function
function fizzbuzz() {
    // Put your code here...
    const MAX_NUMBER = 100
    let number = 0;
    let output = '';
    while (number <= MAX_NUMBER){
        output = '';
        if (_isDivisibleByThree(number)) {
            output += "Fizz";
        }
        if (_isDivisibleByFive(number)) {
            output += "Buzz";
        }
        if (_isDivisibleBySeven(number)) {
            output += "Bang";
        }
        if (output == '') {
            output += String(number);
        }
        number++;
        console.log(output);
    }
}


function _isDivisibleBySeven(number) {
    return number % 7 == 0 ? true : false;
}

function _isDivisibleByThree(number) {
    return number % 3 == 0 ? true : false;
}

function _isDivisibleByFive(number) {
    return number % 5 == 0 ? true : false;
}

// Now, we run the main function:
fizzbuzz();

