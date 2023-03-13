// Problem-01
function mindGame(number) {
    if (typeof number !== 'number' || number < 0) {
        return "Provide valid input";
    }
    const multiplication = number * 3;
    const summation = multiplication + 10;
    const division = summation / 2;
    const subtraction = division - 5;
    return subtraction;
}


const finalResult = mindGame(5)
console.log(finalResult);
