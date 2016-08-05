const html = require('choo/html')
const cm = require('../elements/code-mirror')
const Thunk = require('vdom-thunk')
module.exports = (state, prev, send) => {

  return html`
    <main>
      ${codemirror.innerHTML ? codemirror : cm}
    </main>
  `
}
