const html = require('choo/html')
const codemirror = require('../elements/codemirror')

module.exports = (state, prev, send) => {
  return html`
    <main>
      ${codemirror()}
      ${state.codemirror.value}
    </main>
  `
}
