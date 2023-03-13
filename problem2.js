
// Problem 2: Finding even or odd
// তোমাকে একটা function দেওয়া হবে called “evenOdd()”. এটা ইনপুট হিসেবে একটা string নিবে।
// এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘Even’ অথবা ‘Odd’ ।
// Sample Input & Output:-
// Input: ‘Phero’
// Output: Odd
// Input: ‘Batch7’
// Output: Even
// Input: ‘chatgpt’
// Output: Odd
// problem-2
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

const finalResult = evenOdd('batch7');
console.log(finalResult);
