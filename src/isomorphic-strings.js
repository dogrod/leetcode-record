/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length <= 1) return true
  
  let alphabetIndexMap = {
      first: {},
      second: {},
  }
  
  for(let i = 0; i < s.length; i++) {
      const firstWordCurrentAlphabet = s.substr(i, 1)
      const secondWordCurrentAlphabet = t.substr(i, 1)
      
      const firstWordCurrentAlphabetFirstIndex = alphabetIndexMap.first[firstWordCurrentAlphabet]
      const secondWordCurrentAlphabetFirstIndex = alphabetIndexMap.second[secondWordCurrentAlphabet]
      
      if (!firstWordCurrentAlphabetFirstIndex && !secondWordCurrentAlphabetFirstIndex) {
          alphabetIndexMap.first[firstWordCurrentAlphabet] = i
      }
      
      if (!secondWordCurrentAlphabetFirstIndex) {
          alphabetIndexMap.second[secondWordCurrentAlphabet] = i
      }
      
      if (firstWordCurrentAlphabetFirstIndex !== secondWordCurrentAlphabetFirstIndex) {
          return false
      }
  }
  
  return true
}

module.exports = {
  isIsomorphic,
}