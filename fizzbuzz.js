// This is our main function
function fizzbuzz() {
    // Put your code here...
    let number = 0;
    while (number <= 100){
        if (_isDivisibleByThree(number) && _isDivisibleByFive(number)) {
            console.log("FizzBuzz");
        } else if (_isDivisibleByThree(number)) {
            console.log("Fizz");
        } else if (_isDivisibleByFive(number)) {
            console.log("Buzz");
        } else {
            console.log(number)
        }
        number++
    }
}

function _isDivisibleByThree(number) {
    return number % 3 == 0 ? true : false;
}

function _isDivisibleByFive(number) {
    return number % 5 == 0 ? true : false;
}

// Now, we run the main function:
fizzbuzz();

