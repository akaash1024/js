// let itemOne = document.getElementsByClassName('item-one')
// console.log(itemOne); //HTML Collection


// let itemTwo = document.getElementById('item-2')
// console.log(itemTwo); //HTML Collection


// let itemsList1 = document.getElementsByTagName('div')
// console.log(itemsList1);

// let item_1 = document.querySelector('.item')
// console.log(item_1);

// let item_2 = document.querySelectorAll('.item')
// console.log(item_2);//nodelist 

// //iteration using forEach on nodeList. check line 16 code on console and find prototype.
// item_2.forEach((each)=>{
//     console.log(each);
// })

// //converting to array 
// //using Array.from ()

// let converingArray2of1 = Array.from(item_2) //now array 
// let converingArray2of2 = [...item_2] ////now array 
// console.log(converingArray2of1); 
// console.log(converingArray2of2);


// for (let item of converingArray2of1){
//     console.log(item.innerHTML);
// }

// for (let itemKey of converingArray2of1.keys()) {
// console.log(itemKey);
// }

// for (let itemValue of converingArray2of1.values()) {
// console.log(itemValue);
// }

// for (let itemEntry of converingArray2of1.entries()) {
// console.log(itemEntry);
// }


// // ###############

// //children parents 



// //parent to child 
// let parent1 = document.querySelector('.item-container')
// console.log(parent);
// let children1 = parent.childNodes;
// console.log(children1);

// //child to parent
// let children2 = document.querySelector('.item-one');
// let parent2 = children2.parentNode;
// console.log(parent2);

// //or

// let parent3 = children2.closest('.item-container')
// console.log(parent3);


// //create element using DOM

// let newHeading = document.createElement('h1')
// let neaheadinText = document.createTextNode("Learning DOM")
// newHeading.append(neaheadinText)
// document.bodyy.append(newHeading)


// // Set operation

// const bodyy = document.bodyy;
// const div = document.createElement("div");
// const div2 = document.createElement("div");
// const div3 = document.createElement("div");

// div.innerText = `Hello 
// World`;

// /*
// <div>
//   "Hello "
//   <br>
//   "World"
// </div>
// */

// div2.textContent = `Bye 
// World`

// /*
// <div>Bye 
// World</div>
// */

// div3.innerHTML = `Whatsup 
// World`
// /*
// <div>Whatsup 
// World</div>
// */

// bodyy.append(div);
// bodyy.append(div2)
// bodyy.append(div3)


// //

// var firstHeading = document.getElementById('firstHeading');
// console.log(firstHeading);
// firstHeading.classList.remove('foo');
// firstHeading.classList.add('anotherclass');
// const checking = firstHeading.classList.contains('visible');

// firstHeading.classList.toggle('visible');
// console.log(checking);
// firstHeading.classList.toggle('visible');
// console.log(checking);

//
console.log('from here Add/Remove attributes');


const body = document.body;
const div = document.createElement("div");

let itm1 = document.querySelector('#item-1');
console.log(itm1);

console.log(itm1.getAttribute('data-id'));
console.log(itm1.getAttribute('title'));

itm1.setAttribute("title", "Better item 1");
console.log(itm1);

itm1.removeAttribute("class");
console.log(itm1);

console.log(itm1.dataset); // DOMStringMap {id: '1', test: 'test1'}
console.log(itm1.dataset.newTest); // DOMStringMap {id: '1', test: 'test1'}

