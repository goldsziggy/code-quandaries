/*
You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

You cannot use the following:

"Hello, World!"
'Hello, World!'
`Hello, World!`
Good luck and try to be as creative as possible!

Source; https://www.codewars.com/kata/584c7b1e2cb5e1a727000047
*/

/**
 *
 * @param {String} code
 */

function helloWorld (deadRats) {
  const h = 0x68
  const e = 0x65
  const l = 0x6c
  const o = 0x6f
  const comma = 0x2c
  const exclamation = 0x21
  const space = 0x20
  const w = 0x77
  const r = 0x72
  const d = 0x64

  return (
    String.fromCharCode(parseInt(h)).toUpperCase() +
    String.fromCharCode(parseInt(e)) +
    String.fromCharCode(parseInt(l)) +
    String.fromCharCode(parseInt(l)) +
    String.fromCharCode(parseInt(o)) +
    String.fromCharCode(parseInt(comma)) +
    String.fromCharCode(parseInt(space)) +
    String.fromCharCode(parseInt(w)).toUpperCase() +
    String.fromCharCode(parseInt(o)) +
    String.fromCharCode(parseInt(r)) +
    String.fromCharCode(parseInt(l)) +
    String.fromCharCode(parseInt(d)) +
    String.fromCharCode(parseInt(exclamation))
  )
}

describe('A reverse-binary challenge', () => {
  it('should work for case 1', () => {
    expect(helloWorld()).toEqual('Hello, World!')
  })
})
