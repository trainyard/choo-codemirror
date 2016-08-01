const html = require('choo/html')
module.exports = (state, prev, send) => html`
  <main class="split">
    <pre>${state.codemirror.value}</pre>
  </main>
`
