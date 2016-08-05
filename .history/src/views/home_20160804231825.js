const html = require('choo/html')
const cm = require('../elements/code-mirror')
const Thunk = require('vdom-thunk')
module.exports = (state, prev, send) => {
  const codemirror = cm.innerHTML
  return html`
    <main>
      ${codemirror}
    </main>
  `
}
