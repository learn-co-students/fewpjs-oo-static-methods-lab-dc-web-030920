class Formatter {
  //add static methods here

  static capitalize(word){
    let arr;
    arr = word.split("")
    arr[0] = arr[0].toUpperCase()
    return arr.join("")
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
    // return sub.split("").filter(letter => letter.match(/[^-,'A-Za-z0-9]+/g).join(""))
  }

  static titleize(phrase){
    let wordArr = [ "a", "an", "but", "of", "and", "for", "at", "by", "from", "the"]
    let arr = phrase.split(" ")
    arr[0] = Formatter.capitalize(arr[0])
    return arr.map(word => {
      if(!wordArr.includes(word.toLowerCase())){
        return Formatter.capitalize(word)
      }else{
        return word
      }
    }).join(" ")

  }

}

