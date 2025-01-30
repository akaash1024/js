const items = [
  { category: "fruit", name: "apple" },
  { category: "fruit", name: "banana" },
  { category: "vegetable", name: "carrot" },
  { category: "fruit", name: "kiwi" },
  { category: "vegetable", name: "lettuce" },
];

function solution(arr) {
  let ans = {};

  arr.forEach((ele) => {
    ans[ele.category] = ans[ele.category] || [];
    ans[ele.category].push(ele.name);
  });

  return ans;
}

console.log(solution(items));

// ++++++++++++++++++++++++++++++++++ this is alternative method

function solution(arr) {
  return arr.reduce((acc, ele) => {
    acc[ele.category] = acc[ele.category] || [];
    acc[ele.category].push(ele.name);
    return acc;
  }, {});
}


