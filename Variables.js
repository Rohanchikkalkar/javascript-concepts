//Variables in JavaScript
function swapNumbers(a, b) {
  console.log(`Value before Swapping a = ${a} and b = ${b}`);
  let temp = a;
  a = b;
  b = temp;
  console.log(`Value after Swapping a = ${a} and b = ${b}`);
}

swapNumbers(10, 20);
