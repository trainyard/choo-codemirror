const html = require('choo/html')
const codemirror = require('../elements/code-mirror')
const Thunk = require('vdom-thunk')

module.exports = (state, prev, send) => html`
  <main>
    ${Thunk(codemirror, state.isFocused)}
  </main>
`
