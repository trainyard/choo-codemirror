const { subscribe } = require('../lib/codemirror')

module.exports = {
  namespace: 'codemirror',
  subscriptions: [
    (send, done) =>
      subscribe((type, payload) => {
        send(`codemirror:${type}`, payload, done)
      })
  ]
}
