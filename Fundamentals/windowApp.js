// // WINDOW METHODS

// // Alert
// alert("This is an alert"); //window.alert

// // Prompt
// let input = prompt("Enter you name:");
// alert(`Hello ${input}`);

// // Confirm
// if(confirm("Confirm?")){
//     alert("You have confirmed");
// }
// else
//     alert("Rejected");

// Height and width of the browser window
// Outer width = From top to bottom left to right
// including all the top bars
let outerHeight = window.outerHeight;
let outerWidth = window.outerWidth

// Inner width = Only the stuff between scroll bars
let innerHeight = window.outerHeight;
let innerWidth = window.outerWidth

console.log("Outer height = "+outerHeight + " x "+ outerWidth);
console.log("Inner height = "+innerHeight + " x "+ innerWidth);

// Scroll points
let y_axis = window.scrollY;
let x_axis = window.scrollX;


// Location object - Host, pathname, port, reload etc
let loc = window.location;
//console.log(loc);

// Redirect and Reload
//window.location.replace('http://google.com');
//window.location.reload();


// Browsing history 
// window.history.go(0); // positive = go that many sites front, negative = go that many pages back


// Navigator object - get user details

let userBrowsers = navigator.userAgent;
console.log(userBrowsers);

for(let a=1;a<6;a++){
   setTimeout(() => {
       console.log(a);
   }, a*1000);
}