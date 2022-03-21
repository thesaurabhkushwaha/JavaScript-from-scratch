// FUNCTION DECLARATIONS   

function greet(firstName = 'John', lastName = 'Doe'){ // Default value will be used if any parameter is not present
    console.log(`Hello! ${firstName} ${lastName}`);
}

greet("Saurabh","K")

// FUNCTION EXPRESSION

const expfunc = function(x){return x*x};
console.log('Square of 2 =', expfunc(2));


// IMMEDIATELY INVOKABLE FUNCTION EXPRESSION = IIFEs

(function(msg){
        console.log("Inside an " + msg);
    }
)('IIFE');


// Property method

const todo = {
    add: function(){
        console.log("Adding todo");
    },
    edit: function(id){
        console.log("Editing todo:"+id);
    }
}
todo.delete = function(id){
    console.log('Deleting todo:'+id);
}
todo.add();
todo.edit(1);
todo.delete(1);