const html = require('choo/html')
const codemirror = require('../elements/code-mirror')

console.log(codemirror)
module.exports = (state, prev, send) => html`
  <main>
    ${codemirror}
  </main>
`
