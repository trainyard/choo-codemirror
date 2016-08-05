const codemirror = require('../lib/codemirror').create({
  namespace: 'codemirror'
}, {
  lineNumbers: true,
  autofocus: true
})

console.log('create codemirror')
module.exports = codemirror
