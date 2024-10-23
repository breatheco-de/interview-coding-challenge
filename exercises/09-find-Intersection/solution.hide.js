function FindIntersection(strArr) { 
    let elm1 = strArr[0].split(", ");
    let elm2 = strArr[1].split(", ");
    let intersection = [];
    elm1.forEach(num => {
      if(elm2.includes(num)) intersection.push(num);
    });
  
    // code goes here  
    return (intersection.length > 0) ? intersection.join(",") : false; 
  
  }
     
  // keep this function call here 
  console.log(FindIntersection(readline()));