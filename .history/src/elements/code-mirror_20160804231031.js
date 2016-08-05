const codemirror = require('../lib/codemirror').create({
  namespace: 'codemirror'
}, {
  lineNumbers: true,
  autofocus: true
})

module.exports = codemirror
