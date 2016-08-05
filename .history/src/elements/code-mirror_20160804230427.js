require('../lib/codemirror').create({
  namespace: 'codemirror'
}, {
  lineNumbers: true,
  autofocus: true
}).fork(done, done)

let el

function done(node) {
  el = node
}

module.exports = function () {
  return el
}
