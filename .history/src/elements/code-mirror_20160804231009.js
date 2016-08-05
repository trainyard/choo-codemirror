const codemirror = require('../lib/codemirror').create({
  namespace: 'codemirror'
}, {
  lineNumbers: true,
  autofocus: true
})
f
console.log('create codemirror')
module.exports = codemirror
