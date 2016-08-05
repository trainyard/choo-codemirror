const html = require('choo/html')
const codemirror = require('../elements/code-mirror')
const Thunk = require('vdom-thunk')
module.exports = (state, prev, send) => html`
  <main>
    ${codemirror}
    ${Thunk((state) => console.log(state), state.codemirror.value)}
  </main>
`
