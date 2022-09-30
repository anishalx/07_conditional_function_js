let a = prompt("Type here your age ? ");
a = Number.parseInt(a)//convert string to munber
// console.log(typeof a)
if (a < 1) {
  alert(" This age is not valid  ");
}
else if (a < 15) {
  alert("You are a kid ")
}
else if (a < 18 && a >= 15) {
  alert("wait for  some years  ")
}
else {
  alert("your are selected ");
}
// console.log("done")


// switch statement

switch (a) {
  case (1):
    console.log('sad for you');
    break;
  case (18):
    console.log('hurray');
    break;

  default:
    console.log("enjoy");
}
console.log("you can", a < 18 ? "not drive" : "drive")