class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(sentence) {
    let words = sentence.split(" ")
    let newArray = []
    words.forEach(word => {
      let new_word = word.replace(/[^A-Za-z0-9-']+/g, "")
      newArray.push(new_word)
    })
    return newArray.join(" ")
    // return sentence.replace(/[^A-Za-z0-9-']+/g, "")
  }

  static titleize(string) {
    let newString = []
    let littleWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    string.split(" ").forEach((word, index) => {
      // console.log(index)
      if (index == 0) {
        newString.push(Formatter.capitalize(word))
      } else if (littleWords.includes(word)) {
        newString.push(word)
      } else {
        newString.push(Formatter.capitalize(word))
      }
    })
    return newString.join(" ")
  }
}