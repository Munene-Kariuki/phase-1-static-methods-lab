class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9\-\' ]/g, '');
  }

  static titleize(string) {
    let stringArray = string.split(' ')
    let titlizedArray = []
    let exceptions = ['a', 'the', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    stringArray.map((word) => {
      if(stringArray[0] === word) {
        titlizedArray.push(word[0].toUpperCase() +word.slice(1))
      }else if(exceptions.includes(word) ) {
        titlizedArray.push(word)
    
      } else {
        titlizedArray.push(word[0].toUpperCase() + word.slice(1))
      }
    })
    return titlizedArray.join(' ')
  }
}