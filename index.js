class Formatter {
  static capitalize(string){
    return ( string.charAt(0).toUpperCase() + string.slice(1))
  }
  static sanitize(string){
 
    return string.replace(/[^- 'A-Za-z0-9]+/g, '')
  }
  static titleize(phrase){
  
  // split the word => this will return an array 
  let arr = phrase.split(" ")
  let exce = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
  // get first element from array and separate it from the rest => capitalize it
  let firstWord = this.capitalize(arr[0])
  
  // get the rest of the elements => do if else logic

  var restArr = arr.slice(1)
  let newRestArr = restArr.map(currentWord => {
    if(exce.includes(currentWord)){
      return currentWord
    }else{
      return this.capitalize(currentWord) 
    }
 
  }) 
// explicit means you nned to show the word return
// Now that we have an arr, we need to turn it into a string => join(",")
let joinedArray = newRestArr.join(" ")
  // merge first word to the arr => add " "" 
return firstWord + " " + joinedArray 
  // return the new string 
  // put in One Array( the First element + the capitalized Array )
  // join the array, to turn it into a string => return it


  }
}

