const html = require('choo/html')
const codemirror = require('../elements/code-mirror')

console.log(html('dd'))
module.exports = (state, prev, send) => html`
  <main>
    ${codemirror}
  </main>
`
