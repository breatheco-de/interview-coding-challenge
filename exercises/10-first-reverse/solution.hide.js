//solution 1
function FirstReverse(string) {
    return string.split('').reverse().join('');
}

//solution 2
function FirstReverse(str) { 
    var temp = '';
    for (var i = 0; i<str.length; i++) {
        temp = str[i] + temp;
    }
    // code goes here  
    return temp; 
        
}
     
     