const { subscribe } = require('../lib/codemirror')

module.exports = {
  /* namespace the model so that it cannot access any properties and handlers in other models */
  namespace: 'codemirror',
  state: {
    value: ''
  },
  reducers: {

  },
  effects: {
    ''
  },
  subscriptions: [
    (send, done) =>
      subscribe((name, payload) =>
        send(`codemirror:${name}`, payload, done))
  ]
}
