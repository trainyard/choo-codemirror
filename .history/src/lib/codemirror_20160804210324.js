const CodeMirror = require('codemirror')

const defer = fn => setTimeout(fn, 0)
const subscribers = []
const broadcast = e => subscribers.forEach(sub => defer(sub(e)))

exports.subscribe = listener => subscribers.push(listener)

exports.create = ({namespace}, options) => {
  const container = document.createElement('div')
  const wrapper = document.createElement('div')
  const node = document.createElement('textarea')

  wrapper.appendChild(node)
  container.appendChild(wrapper)
  defer(() => {
    const editor = CodeMirror.fromTextArea(node, options)
    editor.on('change', broadcast)
  })
  console.log(container)
  return container
}
