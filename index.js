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
    // return sent.split(' ').forEach(word => this.capitalize(word)).join('')
  }
}