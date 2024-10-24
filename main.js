function duplicateEncode(word){
    // str -> ignore caps
    // str -> 
  
  //to lower case get same as cap
  //split 
  //check if they repeat -indexOf lastIndexOf
  //change to ( or ) - sounds like a map
  //join to return str - join()
    return word.toLowerCase()
            .split('')
            .map( (c, i, a) => a.indexOf(c) === a.lastIndexOf(c) ? '(' : ')' )
            .join('')     
}