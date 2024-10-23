function CodelandUsernameValidation(str) { 

    if(str.length < 4 || str.length > 25) return false;
    if(!str[0].match(/[a-zA-Z]/i)) return false;
    if(!str[str.length-1] == "_") return false;
    if(!str.match(/[a-zA-Z0-9_]+/i)) return false;
    // code goes here  
    return true; 
  
  }
     
  // keep this function call here 
  console.log(CodelandUsernameValidation("alesanchezr");