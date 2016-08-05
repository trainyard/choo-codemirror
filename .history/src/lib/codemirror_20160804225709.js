const CodeMirror = require('codemirror')
const bel = require('bel')
const debounce = require('debounce')
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
console.log(debounce)
exports.subscribe = listener => subscribers.push(listener)
exports.create = ({namespace}, options) => {
  const node = bel('<code-mirror></code-mirror>')

  defer(() => {
    const editor = CodeMirror(node, options)
    editor.on('change', debounce(broadcast('change'), 10))
    editor.on('focus', debounce(broadcast('focus'), 10))
    editor.on('blur', debounce(broadcast('blur'), 10))
    editor.on('scroll', debounce(broadcast('scroll'), 10f))
  })
  return node
}
