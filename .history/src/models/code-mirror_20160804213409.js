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
    change: (data, state, send, done) => {
    },
    focus: (data, state, send, done) => {
    },
    blur: (data, state, send, done) => {
    },
    scroll: (data, state, send, done) => {
    }
  },
  subscriptions: [
    (send, done) =>
      subscribe((name, payload) =>
        send(`codemirror:${name}`, payload, done))
  ]
}
