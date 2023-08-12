console.log("Hello buddy your practicing js & node js....\n");

//=========================================== Find max and min value from array =====================================================

var arr = [1, 4, 7, 2, 22, 3, 0, 19, 63, 1, 45, 34, 98, 33];

// find max and min values
maxVal = arr[0];
minVal = arr[0];

for(let i = 1; i< arr.length; i++){
    if(maxVal < arr[i]){
        maxVal = arr[i];
    }

    if(minVal > arr[i]){
        minVal = arr[i];
    }
    
}

//console.log("Max value : "+maxVal+" Min value :"+minVal);

//=========================================== return array or even vaues and odd values =====================================================

var oddArr = [];
var evenArr = [];

for(let i = 0; i< arr.length; i++){
    if(arr[i] %2 == 0 ){
        evenArr.push(arr[i]);
    }
    else{
        oddArr.push(arr[i]);
    }
}

// console.log("Even values: ", evenArr);
// console.log("Odd values: ", oddArr);

//=========================================== Diamond Pattern =====================================================
//dimond pattern in js
const n = 5;
let pattern1 = "";
let pattern2 = "";
for(let i = 0; i <= n; i++){

    for(let j = n; j > i; j--){
        pattern1 += " ";
    }
    for( let k = 0; k < i; k++){
        pattern1 += "* ";
    }

    for( let m = 1; m < i; m++){
        pattern2 += " ";
    }
    for(let l = n-1; l > i; l--){
        pattern2 += " *";
    }

    pattern1 += "\n";
    pattern2 += "\n";

}
// console.log(pattern1+pattern2);


//=========================================== Diamond Pattern =====================================================

function printDiamond(length) {
    if (length % 2 === 0) {
      length++; // Ensure the input is odd to create a symmetrical diamond
    }
  
    for (let i = 1; i <= length; i += 2) {
      const spaces = (length - i) / 2;
      const stars = '*'.repeat(i);
      console.log(' '.repeat(spaces) + stars);
    }
  
    for (let i = length - 2; i >= 1; i -= 2) {
      const spaces = (length - i) / 2;
      const stars = '*'.repeat(i);
      console.log(' '.repeat(spaces) + stars);
    }
  }
  
  // Example usage:
  const length = 10; // Replace with the user input (must be an odd number)
  //printDiamond(length);


//=========================================== Reverce string using loop =====================================================

  function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }

  //console.log(reverseString('sanket'));

//===================================================================================================================


  function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Lydia';
    let age = 21;
  }
  
//   sayHi();


console.log(val);

var val = "sanket";

  
//=========================================== Careat server using express =====================================================

const express = require('express');
const app = express();
const port = 9000;

// app.listen(port, ()=>{
//     console.log(`your app is running on port http://localhost:${port}`);
// })