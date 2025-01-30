let str = "hello";

function sol(str){
    let ans = {};

    for (let i = 0; i < str.length;i++){
        ans[str[i]] = (ans[str[i]] || 0) +1
    }

    return ans;
}

console.log(sol(str));


function sol(str) {
    return str.split('').reduce((ans, char) => {
        ans[char] = (ans[char] || 0) + 1; // Count occurrences
        return ans; // Return the accumulator for the next iteration
    }, {}); // Initialize with an empty object
}