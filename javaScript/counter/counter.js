"use strict";
let counter = 0;
let val1 = document.querySelector("#increase");
let val2 = document.querySelector("#decrease");
let val3 = document.querySelector("#reset")
let digit = document.querySelector("#digit");


//function for increase no. button
//console.log("this", val);
//console.log(typeof val);

val1.addEventListener("click", () => {
  counter++;
  digit.textContent = counter;
  //console.log(counter);
});

val2.addEventListener("click",() => {
  counter--;
  digit.textContent = counter;
 // console.log(counter);
} )

val3.addEventListener('click',() => {
    counter = 0;
    digit.textContent = counter;
} )