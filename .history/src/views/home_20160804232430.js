const html = require('choo/html')
const cm = require('../elements/code-mirror')
const Thunk = require('vdom-thunk')
module.exports = (state, prev, send) => {
  const codemirror = document.createElement('div')
  codemirror.innerHTML = cm.innerHTML
  return html`
    <main>
      ${codemirror || cm}
    </main>
  `
}
