const onePointLetters = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
const twoPointLetters = ['D', 'G']
const threePointLetters = ['B', 'C', 'M', 'P']
const fourPointLetters = ['F', 'H', 'V', 'W', 'Y']
const fivePointLetters = ['K']
const eightPointLetters = ['J', 'X']
const tenPointLetters = ['Q', 'Z']


class Scrabble {
  // Write your implementation here
  constructor (word) {
    this.word = word
  }

  score() {
    if (this.word === null || this.word === undefined) {
      return 0
    }

    if (this.word.trim().length === 0) {
      return 0
    }

    let score = 0
    const upperCaseChars = this.word.trim().toUpperCase().split('')
    for (const char of upperCaseChars) {
      if (onePointLetters.includes(char)) {
        score += 1
        continue
      }

      if (twoPointLetters.includes(char)) {
        score += 2
        continue
      }

      if (threePointLetters.includes(char)) {
        score += 3
        continue
      }

      if (fourPointLetters.includes(char)) {
        score += 4
        continue
      }

      if (fivePointLetters.includes(char)) {
        score += 5
        continue
      }

      if (eightPointLetters.includes(char)) {
        score += 8
        continue
      }

      if (tenPointLetters.includes(char)) {
        score += 10
        continue
      }
    }

    return score
  }
}

module.exports = Scrabble
