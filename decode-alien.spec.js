/**
Task
Aliens send messages to our planet, but they use a very strange language. Try to decode the messages!
Test.assertEquals(decode(']()]|_]|_]][-]|-|]') ,'hello');
Test.assertEquals(decode('{|^{|{{|_{]3{'),'blip');
Test.assertEquals(decode('..[-.|_.|^....().[-.|^.__..|)...|.|^.|_|..~|~._\\~.__...[-..|.|)..'),'die stupid people');
Test.assertEquals(decode("'''_\\~'|_|'()'|''('|'|_'[-'|)''__'_\\~'/<'()'()'|_'''__'|\\|'|''/\\'/?']3'__''/?'|_|''()'`/''"), 'your brain looks delicious');
Test.assertEquals(decode('}/\\}~|~}/\\}/<}__}|)}}}[-}~|~}/\\}(}|}|_}|^}|_|}|)}__}|)}}}|\\|}|}/=}__}()}}}~|~}__}`/}/?}}~|~}') ,'try to find duplicated kata');    
  source: https://www.codewars.com/kata/598980a41e55117d93000015/train/javascript
 */

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const decoder = {
  a: /placeholder/g,
  b: /(\]3)/g,
  c: /placeholder/g,
  d: /placeholder/g,
  e: /(\[-\])/g,
  f: /placeholder/g,
  g: /placeholder/g,
  h: /(\|-\|)/g,
  i: /(placeholder)/g,
  j: /placeholder/g,
  k: /placeholder/g,
  l: /(\|_)/g,
  m: /placeholder/g,
  n: /placeholder/g,
  o: /(\(\))/g,
  p: /placeholder/g,
  q: /placeholder/g,
  r: /placeholder/g,
  s: /placeholder/g,
  t: /placeholder/g,
  u: /placeholder/g,
  v: /placeholder/g,
  w: /placeholder/g,
  x: /placeholder/g,
  y: /placeholder/g,
  z: /placeholder/g,
}

/**
 *
 * @param {String} encoded
 */
const decode = (encoded) => {
  // const re =//
  // const pieces = encoded.split(']')
  // const pieces = encoded.split('|')
  let decoded = ''
  Object.keys(decoder).forEach((key) => {
    encoded = encoded.replace(decoder[key], key)
  })

  console.log({ encoded })
  encoded = encoded.replace(/]/g, '')

  return encoded.split('').reverse().join('')
}

describe('All Balanced Parens code-test', () => {
  it('should handle 0', () => {
    expect(decode(']()]|_]|_]][-]|-|]')).toEqual('hello')
  })
  it('should handle 1', () => {
    expect(decode('{|^{|{{|_{]3{')).toEqual('blip')
  })
  it('should handle 2', () => {
    expect(
      decode(
        "'''_\\~'|_|'()'|''('|'|_'[-'|)''__'_\\~'/<'()'()'|_'''__'|\\|'|''/\\'/?']3'__''/?'|_|''()'`/''"
      )
    ).toEqual('your brain looks delicious')
  })

  // it('should hanlde 3', () => {
  //   expect(same_necklace('aabaaaaabaab', 'aabaabaabaaa')).toEqual(true)
  // })
  // it('should hanlde 4', () => {
  //   expect(same_necklace('x', 'xx')).toEqual(false)
  // })
  // it('should hanlde 5', () => {
  //   expect(same_necklace('', '')).toEqual(true)
  // })
})
