const arr = [{ a: 1 }, { b: 2 }]


let arrr = arr.map((ele)=> ({...ele}))
arrr[1].a= 5000;
console.log(arr);
console.log(arrr);
