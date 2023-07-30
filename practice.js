console.log("Hello buddy your practicing js & node js....\n");

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


// find even values and odd values from array 
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


const express = require('express');
const app = express();
const port = 9000;

app.listen(port, ()=>{
    console.log(`your app is running on port http://localhost:${port}`);
})