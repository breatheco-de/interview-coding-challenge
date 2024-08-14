function LongestWord(sen) { 

    // code goes here  
    let placeholder = "";
    let words = sen.split(" ");
    for(let i =0; i<words.length; i++){
      let wordWithoutSpecialChars = words[i].replace(/[^\w\s]/gi, '');
      if(wordWithoutSpecialChars.length > placeholder.length){
        placeholder = wordWithoutSpecialChars;
      }
    }
  
    return placeholder; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));