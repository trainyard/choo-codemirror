const html = require('choo/html')
const codemirror = require('../elements/codemirror')

module.exports = (state, prev, send) => html`
  <main class="split">
    <pre>${codemirror}</pre>
  </main>
`
