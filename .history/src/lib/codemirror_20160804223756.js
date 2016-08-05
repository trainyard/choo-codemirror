const CodeMirror = require('codemirror')
const bel = require('bel')
const Thunk = require('vdom-thunk')
const defer = fn => setTimeout(fn, 0)
const subscribers = []
const broadcast = type => (...payload) =>
    subscribers.forEach(sub => {
      defer(sub(type, {
        evt: payload,
        doc: payload[0] && payload[0].doc || null,
        change: payload[1] || null
      }))
    })

exports.subscribe = listener => subscribers.push(listener)
exports.create = ({namespace}, options) => {
  const node = bel('<code-mirror></code-mirror>')

  defer(() => {
    const editor = CodeMirror(node, options)
    editor.on('change', broadcast('change'))
    editor.on('focus', broadcast('focus'))
    editor.on('blur', broadcast('blur'))
    editor.on('scroll', broadcast('scroll'))
  })
  return Thunk(node, () => true))
}
