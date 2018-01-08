interface AlphabetIndexMaps {
  first: AlphabetIndexMap,
  second: AlphabetIndexMap
}

interface AlphabetIndexMap {
  [key: string]: number
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s: string, t: string) => {
  if (s.length <= 1) {
    return true
  }

  const alphabetIndexMaps: AlphabetIndexMaps = {
    first: {},
    second: {},
  }

  for (let i = 0; i < s.length; i++) {
    const firstWordCurrentAlphabet = s.substr(i, 1)
    const secondWordCurrentAlphabet = t.substr(i, 1)

    const firstWordCurrentAlphabetFirstIndex = alphabetIndexMaps.first[firstWordCurrentAlphabet]
    const secondWordCurrentAlphabetFirstIndex = alphabetIndexMaps.second[secondWordCurrentAlphabet]

    if (!firstWordCurrentAlphabetFirstIndex && !secondWordCurrentAlphabetFirstIndex) {
      alphabetIndexMaps.first[firstWordCurrentAlphabet] = i
    }

    if (!secondWordCurrentAlphabetFirstIndex) {
      alphabetIndexMaps.second[secondWordCurrentAlphabet] = i
    }

    if (firstWordCurrentAlphabetFirstIndex !== secondWordCurrentAlphabetFirstIndex) {
        return false
    }
  }

  return true
}

export default isIsomorphic
