const { subscribe } = require('../lib/codemirror')

module.exports = {
  /* namespace the model so that it cannot access any properties and handlers in other models */
  namespace: 'codemirror',
  subscriptions: [
    (send, done) =>
      subscribe((type, payload) => {
        send(`codemirror:${type}`, payload, done)
      })
  ]
}
