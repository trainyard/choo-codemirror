const html = require('choo/html')
const codemirror = require('../elements/code-mirror')

console.log(html)
module.exports = (state, prev, send) => html`
  <main>
    ${codemirror}
  </main>
`
