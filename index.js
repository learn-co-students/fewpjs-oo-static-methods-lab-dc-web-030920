class Formatter {
  //add static methods here
  static capitalize(string){
    let array = string.split("")
    array[0] = string[0].toUpperCase()
    return array.join("")
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(sent){
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const array = sent.split(' ')
    const new_array = []
    array.forEach((word) => {
      if (exceptions.includes(word)){
        new_array.push(word)
      }else{new_array.push(this.capitalize(word))}
  })
  new_array[0] = this.capitalize(new_array[0])
  return new_array.join(' ')
  }
}