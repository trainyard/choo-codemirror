const html = require('bel')
const codemirror = require('../lib/codemirror').create({
  namespace: 'codemirror'
}, {
  lineNumbers: true,
  autofocus: true
})


module.exports = (state, prev, send) => html`
  <main class="split">
    ${codemirror}
  </main>
`
