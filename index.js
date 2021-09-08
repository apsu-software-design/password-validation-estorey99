//Emmett Storey
//CSCI 4602
const validatePassword = require('./passwordvalidation'); //import the function
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 rl.question("Enter a password or press q to quit.\n",(pass)=>{
if(pass==":q")
  rl.close();
else 
  callback(pass);
   })
//callback function
 var callback= function(pass){
  var valid=validatePassword(pass)
  if(valid)
  console.log("Password is valid: " + pass+"\n");
else
  console.log("Password is invalid: "+ pass+"\n");
   rl.question("",(pass)=>{
    if(pass==":q")
      rl.close();
    else 
      callback(pass);
       })}
