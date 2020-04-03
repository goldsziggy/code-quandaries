/// <reference types="jest" />

/**
 The Challenge
In this exercise, you're going to decompress a compressed string.

Your input is a compressed string of the format number[string] and the decompressed output form should be the string written number times. For example:

The input

3[abc]4[ab]c

Would be output as

abcabcabcababababc

Other rules
Number can have more than one digit. For example, 10[a] is allowed, and just means aaaaaaaaaa

One repetition can occur inside another. For example, 2[3[a]b] decompresses into aaabaaab

Characters allowed as input include digits, small English letters and brackets [ ].

Digits are only to represent amount of repetitions.

Letters are just letters.

Brackets are only part of syntax of writing repeated substring.

Input is always valid, so no need to check its validity.

Learning objectives
This question gives you the chance to practice with strings, recursion, algorithm, compilers, automata, and loops. It’s also an opportunity to work on coding with better efficiency


Sample Inputs and Outputs

decompress('3[abc]') => 'abcabcabc'
decompress('3[abc]d') => 'abcabcabcd'
decompress('z3[abc]d') => 'zabcabcabcd'
decompress('3[abc]4[ab]c') => 'abcabcabcababababc'
decompress('10[a]') => 'aaaaaaaaaa'
decompress('2[3[a2[c]]b]') => 'aaabaaab'
decompress('0[abc]') => ''

https://techdevguide.withgoogle.com/paths/advanced/compress-decompression/#code-challenge
 */

/**
 * @param {String} str
 * @param {Array} stack
 */
const parser = (str, stack = []) => {
  if (/[a-z]/.test(str.charAt(0))) {
    stack.push(str.slice(0, 1))
    return parser(str.substr(1), stack)
  } else if (/[0-9]/.test(str.charAt(0))) {
    const indexOfNonNum = str.search(/[^0-9]/)
    const num = str.slice(0, indexOfNonNum)
    stack.push(parseInt(num))
    return parser(str.substring(indexOfNonNum), stack)
  } else if (str.charAt(0) === '[') {
    // stack.push('repeat-start')
    return parser(str.substr(1), stack)
  } else if (str.charAt(0) === ']') {
    stack.push('|')
    return parser(str.substr(1), stack)
  }

  return stack
}

const getRepeatString = arr => {
  let str = ''
  let repeatCount = 1
  arr.forEach(v => {
    if (repeatCount === 0) {
      return str
    } else if (Number.isInteger(v)) {
      ++repeatCount
    } else if (v === '|') {
      --repeatCount
    } else {
      str += v
    }
  })
  return str
}

/**
 *
 * @param {Array} parsed
 */
const processor = parsed => {
  if (parsed.length > 0) {
    if (Number.isInteger(parsed[0])) {
      const remaining = parsed.slice(1)
      const repeat = getRepeatString(remaining)
      // if the next is an immediate repeat, we need to behave differently
      if (Number.isInteger(remaining[0])) {
        return processor(remaining).repeat(parsed[0])
      }
      return processor(repeat).repeat(parsed[0]) + processor(remaining.slice(repeat.length))
    } else if (parsed[0] === '|') {
      return processor(parsed.slice(1))
    }
    return parsed[0] + processor(parsed.slice(1))
  }
  return ''
}

/**
 * @param {String} str
 */
const decompress = str => {
  const parsed = parser(str)
  const string = processor(parsed)
  return string
}

describe('decompression code-test', () => {
  it('should handle 3[abc]', () => {
    const answer = decompress('3[abc]')
    expect(answer).toBe('abcabcabc')
  })

  it('should handle 3[abc]4[ab]c', () => {
    const answer = decompress('3[abc]4[ab]c')
    expect(answer).toBe('abcabcabcababababc')
  })
  it('should handle 2[3[a]b]', () => {
    const answer = decompress('2[3[a]b]')
    expect(answer).toBe('aaabaaab')
  })
  it('should handle 3[abc]d', () => {
    const answer = decompress('3[abc]d')
    expect(answer).toBe('abcabcabcd')
  })
  it('should handle z3[abc]d', () => {
    const answer = decompress('z3[abc]d')
    expect(answer).toBe('zabcabcabcd')
  })
  it('should handle 10[a]', () => {
    const answer = decompress('10[a]')
    expect(answer).toBe('aaaaaaaaaa')
  })
  it('should handle 0[abc]', () => {
    const answer = decompress('0[abc]')
    expect(answer).toBe('')
  })
})
