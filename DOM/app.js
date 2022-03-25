// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);




// USING DOM METHODS

const taskTitle = document.getElementById("task-title");

console.log(taskTitle.innerHTML);

// Change styling
//taskTitle.style.background = 'lightblue';

// Change content
taskTitle.textContent = "Task List";
taskTitle.innerHTML = "Task List:";  

// Using querySelector = single element selector
document.querySelector('li').style.color = 'red'; // Only first li item is changed
document.querySelector('ul li').style.color = 'red';
document.querySelector('li:nth-child(2)').style.color = 'green';

// SELECT MULTIPLE ELEMENTS - 

const items = document.getElementsByClassName("collection-item");
console.log(items.length);
items[3].textContent = "hello";


// GET ALL TAGS by name
let All_li_tags = document.getElementsByTagName('li');


// Convert HTML collection to Array
All_li_tags = Array.from(All_li_tags);
All_li_tags.reverse();     // As now it is an array

All_li_tags.forEach(function(li, index) {
  console.log(li.className);
  //li.textContent = `${index}: Hello`; // All li content becomes hello
  li.style.color='green';
});
console.log(All_li_tags);


// QUERY SELECTOR ALL - retuers NodeList = not need to convert to array

const ulItems = document.querySelectorAll('ul.collection li.collection-item');

ulItems.forEach(function(item, index) {
  item.textContent = `${index}: Hello`;
});

console.log(ulItems);

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
  li.style.background='lightgrey';
})