const html = require('bel')
const codemirror = require('../lib/codemirror').create({
  namespace: 'codemirror'
}, {
  lineNumbers: true,
  autofocus: true
})

console.log(codemirror)
module.exports = html`
  <div class="split">
    ${codemirror}
  </div>
`
