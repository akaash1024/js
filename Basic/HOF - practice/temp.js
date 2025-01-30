// let tem = [1, 2, 3];

// console.log(tem.map((t)=> t+t));

// let tem = ["apple", "banana", "cherry"];

// tem.forEach((x)=>console.log(x))

// let tem = [1, 2, 3, 4, 5];

// console.log(tem.filter((x)=>x%2==0));

// let tem = [1, 2, 3, 4];

// console.log(tem.reduce((acc, currentVal)=> acc+currentVal));

// let tem = ["hello", "world"];
// console.log(tem.map((x)=> x.length));

// let tem = [1, 2, 3];
// console.log(tem.map((x)=>x+10));

// let tem = [-1, 2, -3, 4];
// console.log(tem.filter((x)=> x>0));

// let tem = [{ value: 2 }, { value: 3 }, { value: 4 }];

// console.log(tem.reduce((acc, currentValue)=> acc+currentValue.value, 0));


// let tem = [1, 2, 3, 4];

// x = tem.filter((x)=> x%2==0)
//         .map((x)=> x+x)

// console.log(x);


// let tem = [1, 2, 3];

// let temArr= [];
// tem.forEach((x)=>{
//     temArr.push(x**2)
// })
// console.log(temArr.reduce((acc,cur)=> cur+acc, 0));



let tem = [1, 2, 3];
function solve(arr){
    ans = {}
    temArr = [];
    arr.forEach((x)=>{
        console.log(x**2);
        temArr.push(x**2);
    })
    let sum = temArr.reduce((arr, current)=> arr+current, 0);
    let avg = sum / temArr.length;

    ans[sum]
    ans[avg]

    return ans;
}

console.log(solve(tem));
