const axios = require('axios')
const https = require('https')
/**
 Single-byte XOR cipher
The hex encoded string:

1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736
... has been XOR'd against a single character. Find the key, decrypt the message.

You can do this by hand. But don't: write code to do it for you.

How? Devise some method for "scoring" a piece of English plaintext. Character frequency is a good metric. Evaluate each output and choose the one with the best score.

CHALLENGE:
When done, detect what line in this file has been XORed by using your alogrithim

https://cryptopals.com/static/challenge-data/4.txt


Credit:
https://cryptopals.com
 */
/**
https://en.wikipedia.org/wiki/Letter_frequency
 */
const scoring = {
  a: 8.167,
  b: 1.492,
  c: 2.782,
  d: 4.253,
  e: 12.702,
  f: 2.228,
  g: 2.015,
  h: 6.094,
  i: 6.966,
  j: 0.153,
  k: 0.772,
  l: 4.025,
  m: 2.406,
  n: 6.749,
  o: 7.507,
  p: 1.929,
  q: 0.095,
  r: 5.987,
  s: 6.327,
  t: 9.056,
  u: 2.758,
  v: 0.978,
  w: 2.36,
  x: 0.15,
  y: 1.974,
  z: 0.074,
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

/**
 *
 * @param {String} word
 */
const calculateScore = (word) => {
  // sum the square roots
  // multiple the
  // const dict = word.split('').reduce((acc, char) => {
  //   acc[char] = acc[char] + 1 || 1
  //   return acc
  // }, {})
  // let score = 0
  // for (const char in dict) {
  //   if (scoring[char.toLowerCase()]) {
  //     score += Math.sqrt((scoring[char.toLowerCase()] * dict[char]) / word.length)
  //   } else if (char === '\u0000' || char === ' ') {
  //     score += Math.sqrt(0.5 / word.length)
  //   }
  // }

  // return score

  // return word.split('').reduce((acc, char) => {
  //   if (scoring[char.toLowerCase()]) {
  //     return acc + Math.sqrt(scoring[char.toLowerCase()] / word.length)
  //   } else if (char === '\u0000' || char === ' ') {
  //     return acc + Math.sqrt(0.5 / word.length)
  //   }
  //   return acc
  // }, 0)

  return (
    word.split('').reduce((acc, char) => {
      //if we have a real char, increase our score.
      if (scoring[char.toLowerCase()]) {
        return acc + scoring[char.toLowerCase()]
      } else if (char === '\u0000' || char === ' ') {
        return acc + 1
      }
      // if not a standard character, lower our score.
      return acc - 5
    }, 0) / word.length
  )
}

/**
 *
 * @param {String[]} bytes
 * @param {Number} key
 */
const decoder = (bytes, key) => {
  return bytes.reduce((acc, byte) => {
    return acc + String.fromCharCode(parseInt(byte, 16) ^ key)
  }, '')
}

/**
 *
 * @param {String} str
 */
const decode = (str) => {
  const bytes = []
  const results = []
  for (var i = 0; i < str.length; i += 2) {
    bytes.push('0x' + str.substr(i, 2))
  }
  alphabet.split('').forEach((char) => {
    const decoded = decoder(bytes, char.codePointAt(0))
    const score = calculateScore(decoded)
    results.push({ char, score, decoded })
  })
  // console.log(results)
  return results.filter((v) => v.score > 1).sort((a, b) => b.score - a.score)
}

const getData = () =>
  new Promise((resolve, reject) => {
    https
      .get('https://cryptopals.com/static/challenge-data/4.txt', (resp) => {
        let data = ''

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk
        })

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          resolve(data)
        })
      })
      .on('error', (err) => {
        reject(err)
      })
  })

describe('Single Byte Xor', () => {
  it('should do the decode!', () => {
    const results = decode('1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736')

    // console.log({ results })

    expect(results[0]).toEqual({
      char: 'x',
      score: 4.090382352941177,
      decoded: 'cOOKING\u0000mc\u0007S\u0000LIKE\u0000A\u0000POUND\u0000OF\u0000BACON',
    })
  })

  it('can find the string', async (done) => {
    const data = await getData()
    const pieces = data.split('\n')
    const results = []
    pieces.forEach((record) => {
      const decodedResults = decode(record)
      // console.log({ decodedResults })
      if (decodedResults.length > 0) {
        results.push(decodedResults[0])
      }
    })
    results.sort((a, b) => b.score - a.score)
    console.log(results)
    done()
  })
})
