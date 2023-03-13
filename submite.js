
// Your assignment submitted successfully.
// Problem-01
// First I multiply the number by 3 then add this result by 10 and then divide this result by 2 and finally subtract the quotient by 5.
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
// Problem-2
// First I divide the parameter by 2 so if the quotient is 0 then it will show odd. Or even will show
function evenOdd(parameters) {
    if (typeof parameters !== 'string') {
        return "Provide valid input";
    }
    let character = parameters.length;
    if (character % 2 == 0) {
        return "even"
    }
    else {
        return "odd"
    }
}
// problem-3
// First I subtract the parameter by 7. If the subtraction is less than 7 then the parameter will show. Otherwise, the parameter will be multiplied by 2
function isLGSeven(number) {
    if (typeof number !== 'number') {
        return " Please Provide number input";
    }
    const subtraction = number - 7;
    if (subtraction < 7) {
        return subtraction;
    }
    else {
        return number * 2;
    }
}
// problem-4
// First I return an array and the number of elements in the array that are less than 0.
function findingBadData(numbers) {
    if (Array.isArray(numbers) !== true) {
        return " Please Provide array input";
    }
    const number = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            number.push(numbers[i]);
        }
    }
    return number.length;
}
// problem-5
// At first friend1 gems multiplay by 21 then friend2gems multiplay by 32 and friend3gems multiplay by 43. and i total result added . when the result more then 2000 then result minus 2000 and return otherDiamind .and when the result less then 2000 return total result.
function gemsToDiamond(friend1gems, friend2gems, friend3gems) {
    if (typeof (friend1gems, friend2gems, friend3gems) !== 'number' || friend1gems < 0 || friend2gems < 0 || friend3gems < 0) {
        return "Please Provide curret input";
    }
    const friend1Diamond = friend1gems * 21;
    const friend2Diamond = friend2gems * 32;
    const friend3Diamond = friend3gems * 43;
    const totalDiamond = friend1Diamond + friend2Diamond + friend3Diamond;
    if (totalDiamond > 1000 * 2) {
        const otherDiamond = totalDiamond - 2000;
        return otherDiamond;
    }
    else if (totalDiamond < 1000 * 2) {
        return totalDiamond;
    }
}