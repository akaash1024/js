// Create your own version of Array.map() called 'myMap'
// It should take an array and a callback function as parameters
// Example usage:
const numbers = [1, 2, 3, 4];
const doubled = myMap(numbers, num => num * 2);
console.log(doubled); // Should print: [2, 4, 6, 8]

// Write your solution here

function myMap (number, callback) {

    let ans = [];

    for (i = 0; i<number.length;i++){

        ans.push(callback(number[i]), i, number)
    }

    return ans;
}