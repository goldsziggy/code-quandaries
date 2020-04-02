const immortal = () => {
  const encoded = '4uTX1eTV2NWxw9Wl0tTHxmHzyGTB9OfmQkNk89Hz+LTx4rjXoqMAAKO0paHh0qFB88a3xuKmEA=='
  let buff = new Buffer(encoded, 'base64')
  let characters = buff.toString('ascii')
  characters.split('').map(c => {
    const charCode = c.charCodeAt(0)
    console.log(c + ' = ' + c.charCodeAt(0) + ' = ' + charCode.toString(16))
  })
  // console.log(base64data)
}

immortal()
