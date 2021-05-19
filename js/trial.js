

let age =1;
console.log(age += 9); // get the current value of age, add 9 to it 
console.log(age-=2);   // get the value of age and assign what remains after subtracting 2
 age = age % 2;  // modulous operator
 console.log(age);

 // Declaring variables
var violaAgaba;
let monica;
const num=2+4;
​
// Assigning values to our variables
violaAgaba=4;
monica="developer";
​
// Declaring and assigning variables
let codequeen = "profession";
​
// Calling the variable
console.log(violaAgaba);
console.log(monica);
console.log(num);
console.log(codequeen);
​
//Declaring an array
var violaArray=[4,'developer', 6, true];
console.log(violaArray);
​
// Defining an object
 let house={
     window:4,
     door:'glass',
     rooms:[4,"green","wardrobe"]
 }
​
console.log(house); 
console.log(house.window);
console.log(house.rooms);
​
// operators acts on operands
// operand are values that are acted on by an operator
const sum=4+9
const operator='viola'+'five'
console.log(sum);
console.log(operator);
​
console.log(sum!==14); 
console.log(sum!==13);
​
console.log(violaArray !==violaAgaba)
​
// If statement
if(sum===15){
    console.log('yay 15 is true');
}else if(sum===14){
    console.log('sorry 14 is true ');
}else{
    console.log('sorry 13 is true ');
}
​
// for statement
// for ([initialization]; [condition]; [final-expression])statement
​
let myNumber=5;
​
for(i=0;i<myNumber; i++){
    
    console.log(myNumber);
}