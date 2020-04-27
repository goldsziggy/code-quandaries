/**
 Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

Examples
balancedParens(0) => [""]
balancedParens(1) => ["()"]
balancedParens(2) => ["()()","(())"]
balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"]

source: https://www.codewars.com/kata/5426d7a2c2c7784365000783
 */

const getCombinations = (arr) => {
  if (arr.length === 1) {
    return arr
  } else {
    let results = []
    let otherCases = getCombinations(arr.slice(1))
    otherCases.forEach((v1) => {
      arr.forEach((v2, idx) => {
        const [l, r] = v2
        if (idx % 3 === 0) {
          results.push(v1 + l + r)
        } else if (idx % 3 === 1) {
          results.push(l + v1 + r)
        } else {
          results.push(l + r + v1)
        }
      })
    })
    return results
  }
}

const balancedParens = (numberParens) => {
  let parens = '(),'.repeat(numberParens).split(',')
  if (parens.length === 1) {
    return parens
  }
  return [...new Set(getCombinations(parens.slice(0, parens.length - 1)))]
}

describe('All Balanced Parens code-test', () => {
  it('should handle 0', () => {
    expect(balancedParens(0)).toEqual([''])
  })
  it('should handle 1', () => {
    expect(balancedParens(1)).toEqual(['()'])
  })
  it('should handle 2', () => {
    expect(balancedParens(2)).toEqual(['()()', '(())'])
  })

  it('should hanlde 3', () => {
    expect(balancedParens(3).sort()).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()'])
  })
  it('should hanlde 4', () => {
    expect(balancedParens(4).sort()).toEqual([
      '(((())))',
      '((()()))',
      '((())())',
      '((()))()',
      '(()(()))',
      '(()()())',
      '(()())()',
      '(())(())',
      '(())()()',
      '()((()))',
      '()(()())',
      '()(())()',
      '()()(())',
      '()()()()',
    ])
  })
})
