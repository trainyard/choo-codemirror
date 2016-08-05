const html = require('choo/html')
const codemirror = require('../elements/code-mirror')()

module.exports = (state, prev, send) => html`
  <main>
    ${codemirror}
  </main>
`
