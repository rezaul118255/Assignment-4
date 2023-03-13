// Problem 3: Is Less or Greater than seven
// তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।
// এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে absolute পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই ইনপুট এবং ৭ এর মধ্যে পার্থক্য। নাহলে তোমাকে return করতে হবে double of their absolute difference.

// Sample Input & Output:-
// Input: 6
// Output: -1


// Input: -15

// Output: -22
// problem-3
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
const finalResult = isLGSeven(-15);
console.log(finalResult)