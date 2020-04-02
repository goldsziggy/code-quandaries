/**
Description:
Lorem Ipsum is “common placeholder text used to demonstrate the graphic elemnts of a document or visual presentation” blah blah blah. Find your Answer in the included file. It’s the only word that appears once.
File Location For Parsing:
https://gitlab.com/goldsziggy/code-challenges/-/blob/master/ipsum.txt
Either download and parse the file, or stream via HTTP and parse. 
 */

const https = require('https')

const getData = () =>
  new Promise((resolve, reject) => {
    https
      .get('https://gitlab.com/goldsziggy/code-challenges/-/raw/master/ipsum.txt', resp => {
        let data = ''

        // A chunk of data has been recieved.
        resp.on('data', chunk => {
          data += chunk
        })

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          resolve(data)
        })
      })
      .on('error', err => {
        reject(err)
      })
  })

const ipsum = async () => {
  const data = await getData()
  const d = data.replace(/\n|\,|\.|\;/g, ' ')
  const buckets = {}
  const words = d.split(' ')
  words.forEach(v => {
    buckets[v.toLowerCase()] = buckets[v.toLowerCase()] + 1 || 1
  })
  Object.keys(buckets).forEach(key => {
    if (buckets[key] !== 1) delete buckets[key]
  })
  const keys = Object.keys(buckets)
  return keys[0]
}

console.log(ipsum())
