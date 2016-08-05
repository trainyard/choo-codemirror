const bel = require('bel')
require('../lib/codemirror').create({
  namespace: 'codemirror'
}, {
  lineNumbers: true,
  autofocus: true
}).fork(done, done)

let el

function done (node) {
  el = bel(node)
}



module.exports = function () {
  return el
}
