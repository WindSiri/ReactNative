let a = 1;
console.log("Top level");
console.log("a = " + a)

//Create new block
/*
a
b
c
*/

{
    let b=2
    console.log("Inside block");
    console.log("a = " + a)
    console.log("b = "+ b)
}