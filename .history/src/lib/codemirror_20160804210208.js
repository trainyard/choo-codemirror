const CodeMirror = require('codemirror')

const defer = fn => setTimeout(fn, 0)
const subscribers = []
const broadcast = e => subscribers.forEach(sub => defer(sub(e)))

exports.subscribe = listener => subscribers.push(listener)

exports.create = ({namespace}, options) => {
  const container = document.createElement('div')
  const wrapper = document.createElemend('div')
  const node = document.createElement('textarea')

  defer(() => {
    const editor = CodeMirror.fromTextArea(node, options)
    editor.on('change', broadcast)
  })
  return node
}
