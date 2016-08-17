"use strict"

const numbers = [1,2,3,4,5,6,7,8,9,10]

class Etl {

  transform(old) {
    let thisEtl = this
    let scoreKey = {}
    numbers.forEach(function(number) {
      if (old.hasOwnProperty(number)) {
        thisEtl.mapLetters(number, old[number], scoreKey)
      }
    })
    return scoreKey
  }

  mapLetters(number, letters, scoreKey) {
    letters.forEach(function(letter) {
      scoreKey[letter.toLowerCase()] = number
    })
  }
}

module.exports = Etl
