// var, let, const - line-byline command
let a =10;
{
    let a =20;
    console.log("Inside:", a);
}
console.log("Outside:", a);
console.log("Outside:", a);
console.log("Outside:", a);