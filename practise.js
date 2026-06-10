// declaring variable
// let a= 10;
// let b= 5;

// // performing operations
// console.log("Add:"+(a+b));
// console.log("Subtract:"+(a-b));
// console.log("Multiply:"+(a*b));
// console.log("Division:"+(a/b));

// Performing operations using functions
console.log("Performing operations using functions")
function add(a, b){
    let sum = a+b;
    return sum;
}
function subtration(a,b){
    let sub = a-b;
    return sub;
}
function multiplication(a,b){
    let mul = a*b;
    return mul;
}
function division(a,b){
    let div = a/b;
    return div;
}

//function call
console.log(add(20,4));
console.log(subtration(10,5));
console.log(multiplication(2,5));
console.log(division(55,11));

//Loops
//1. While Loop
console.log("Natural number from 1 to 10:");
let i = 1;
while(i<=10){
    console.log(i);
    i++;
}

// 2.Do while loop
console.log("Do While loop:");
let j = 0;
do{
    console.log(j);
    j++;
}while(j<6);

//Arrays
console.log("Creating Array...");
let colors = ["red", "yellow", "green"];
console.log("Original Array:", colors);
colors.push("pink");
colors.push("grey");
console.log("Array after performing push operation:", colors);
colors.pop();
console.log("Array after performing pop operation:", colors);

//Objects
console.log("Creating object...");
let student = {
    "name":"Sweta",
    "Course":"B.Tech",
    "City":"Gaya"
}
console.log("Name:", student.name);
console.log("Course:", student.Course);
console.log("City:", student.City);