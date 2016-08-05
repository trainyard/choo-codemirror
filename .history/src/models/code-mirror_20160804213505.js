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
      console.log(data)
    },
    focus: (data, state, send, done) => {
      console.log(data)
    },
    blur: (data, state, send, done) => {
      console.log(data)
    },
    scroll: (data, state, send, done) => {
      console.log(data)
    }
  },
  subscriptions: [
    (send, done) =>
      subscribe((name, payload) =>
        send(`codemirror:${name}`, payload, done))
  ]
}
