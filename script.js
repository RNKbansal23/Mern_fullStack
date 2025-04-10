// Question 1;
let age = 25;
let isAdult = false;
if (age >= 18) {
  isAdult = true;
}
document.getElementById("ans1").innerHTML = isAdult;

// Question 2;
let x = 10;
let y = 5;
const add = x + y;
const mltply = x * y;
const md = x % y;
document.getElementById("ans2").innerHTML = `Add: ${add}, Multiply: ${mltply}, Modulo: ${md}`;

// Question 3;
let n = 21;
let isEven = false;
isEven = n % 2 == 0 ? true : false;
document.getElementById("ans3").innerHTML = isEven;

// Question 4;
let nums = [];
for (let i = 1; i < 6; i++) {
  nums.push(i);
}
document.getElementById("ans4").innerHTML = nums.join(", ");

// Question 5;
let num=4
let square = function(num) {
  return num * num;
}
document.getElementById("ans5").innerHTML = square(num);