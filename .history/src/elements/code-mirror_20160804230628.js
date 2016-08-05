const codemirror = require('../lib/codemirror').create({
  namespace: 'codemirror'
}, {
  lineNumbers: true,
  autofocus: true
})
const bel = require('bel')
module.exports = bel(codemirror)
