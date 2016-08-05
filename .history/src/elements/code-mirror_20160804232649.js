const codemirror = require('../lib/codemirror').create({
  namespace: 'codemirror'
}, {
  lineNumbers: true,
  autofocus: true
})

module.exports = () => {
  if (codemirror.innerHTML) {
    const element = document.createElement('div')
    element.innerHTML = codemirror.innerHTML
    return element
  } else {
    return codemirror
  }
}
