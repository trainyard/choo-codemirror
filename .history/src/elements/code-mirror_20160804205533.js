const CodeMirror = require('../lib/codemirror')
const codemirror = CodeMirror.create({
  namespace: 'codemirror'
}, {
  lineNumbers: true,
  autofocus: true
})
const codemirrorContainer = document.createElement('div')
