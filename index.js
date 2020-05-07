class Formatter {
  //add static methods here
  static capitalize(str){
    // let first = str.charAt(0).toUpperCase()
    // let rest = str.substr(1)
    // return first + rest
    return str.charAt(0).toUpperCase() + str.substr(1)
  }
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(str){
    let array = str.split(" ")
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = []
    for(let i = 0; i < array.length; i++){
      if(i === 0){
        result.push(this.capitalize(array[i]))
      }
      else if(exceptions.includes(array[i])){
        result.push(array[i])
      }else{
        result.push(this.capitalize(array[i]))
      }   
    }
    return result.join(" ");
  }
}