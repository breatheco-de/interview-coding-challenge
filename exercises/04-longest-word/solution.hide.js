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
    

let inputText = prompt("Write a sentence here")
// keep this function call here 
console.log(LongestWord(inputText));