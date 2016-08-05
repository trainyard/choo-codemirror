const codemirror = require('../lib/codemirror').create({
  namespace: 'codemirror'
}, {
  lineNumbers: true,
  autofocus: true
})
const hyperx = require('hyperx')
console.log(hyperx('div'))
module.exports = hyperx(codemirror)
