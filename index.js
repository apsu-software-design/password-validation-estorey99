const validatePassword = require('./passwordvalidation'); //import the function
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Emmett Storey
//CSCI 4602
// Your code goes here!
 rl.question("Enter a password or press q to quit.\n")(callback)=>{
var pass= window.prompt("Enter a password to validate. (or press q to quit)/n");
while(pass !=":q"){
if(validatePassword(pass))
  console.log("Password is valid: " + pass);
else
  console.log("Password is invalid"+ pass);
}
if(pass==":q")
  rl.close();
else 
  callback(pass);
 }
 
 
