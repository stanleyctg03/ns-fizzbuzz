// This is our main function
function fizzbuzz() {
    // Put your code here...
    const MAX_NUMBER = 255;
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
        if (_isDivisibleByEleven(number)) {
            output = "Bong";
        }
        if (_isDivisibleByThirteen(number)) {
            if (output.includes('B')) {
                let index = output.indexOf('B');
                let start = output.slice(0, index);
                let end = output.slice(index);
                output = start + "Fezz" + end;
            } else {
                output = "Fezz";
            }
        }
        if (_isDivisibleBySeventeen) {
            if (output.length > 1) {
                const words = output.split(/(?=[A-Z])/);
                output = words.reverse().join('');
            }
        }
        if (output == '') {
            output += String(number);
        }
        number++;
        console.log(output);
    }
}


function _isDivisibleBySeventeen(number) {
    return number % 17 == 0 ? true : false;
}

function _isDivisibleByThirteen(number) {
    return number % 13 == 0 ? true : false;
}

function _isDivisibleByEleven(number) {
    return number % 11 == 0 ? true : false;
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

