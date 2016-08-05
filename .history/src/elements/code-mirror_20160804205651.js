const CodeMirror = require('../lib/codemirror')
const codemirror = CodeMirror.create({
  namespace: 'codemirror'
}, {
  lineNumbers: true,
  autofocus: true
})
const html = require('bel')

module.exports = (state, prev, send) => html`
  <main class="split">
    ${codemirror}
  </main>
`
