const CodeMirror = require('codemirror')

const defer = fn => setTimeout(fn, 0)
const subscribers = []
const broadcast = name => payload => subscribers.forEach(sub => defer(sub(name, payload)))

exports.subscribe = listener => subscribers.push(listener)

exports.create = ({namespace}, options) => {
  const container = document.createElement('div')
  const wrapper = document.createElement('div')
  const node = document.createElement('textarea')

  wrapper.appendChild(node)
  container.appendChild(wrapper)

  const editor = CodeMirror.fromTextArea(node, options)
  defer(() => {
    editor.on('change', broadcast('change'))
    editor.on('focus', broadcast('focus'))
    editor.on('blur', broadcast('blur'))
    editor.on('scroll', broadcast('scroll'))
  })
  return container
}
