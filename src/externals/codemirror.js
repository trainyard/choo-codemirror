const CodeMirror = require('CodeMirror')

const defer = fn => setTimeout(fn, 0)
const subscribers = []
const broadcast = e => subscribers.forEach(sub => defer(sub(e)))

exports.subscribe = listener => subscribers.push(listener)

exports.create = ({namespace}, options) => {
  const node = document.createElement('textarea')
  defer(() => {
    const editor = CodeMirror.fromTextArea(node, options)
    editor.on('change', broadcast)
  })
  return node
}
