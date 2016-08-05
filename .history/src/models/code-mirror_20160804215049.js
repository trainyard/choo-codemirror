const { subscribe } = require('../lib/codemirror')

module.exports = {
  /* namespace the model so that it cannot access any properties and handlers in other models */
  namespace: 'codemirror',
  state: {
    value: '',
    isFocused: true
  },
  reducers: {
    update: (action, state) => ({ value: action.value }),
    focusChange: (action, state) => ({ isFocused: action.focused })
  },
  effects: {
    change: (data, state, send, done) => {
      console.log(data.doc, data.change)
      console.log(data)
      // send('codemirror:update', data.doc.getValue(), done)
    },
    focus: (data, state, send, done) => {
      // send('codemirror:focusChange', { focused: true }, done)
    },
    blur: (data, state, send, done) => {
      // send('codemirror:focusChange', { focused: false }, done)
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
