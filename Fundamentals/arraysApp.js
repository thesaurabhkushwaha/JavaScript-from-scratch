const mixed = [1,"1",{a:1, b:2}, new Date()];
let numbers = [1,2,3,4,5];

numbers.splice(3,4);

numbers.push(4);

numbers.pop();

numbers.unshift(0);
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.reverse();

numbers = numbers.sort(function(a,b){
    return  b-a; // a-b for ascending
});

console.log(numbers);
