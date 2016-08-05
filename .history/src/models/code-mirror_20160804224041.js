const { subscribe } = require('../lib/codemirror')

module.exports = {
  /* namespace the model so that it cannot access any properties and handlers in other models */
  namespace: 'codemirror',
  state: {
    value: '',
    isFocused: true,
    new: true
  },
  reducers: {
    new: () => ({ new: false }),
    update: (action, state) => ({ value: action.value }),
    focusChange: (action, state) => ({ isFocused: action.focused })
  },
  effects: {
    change: (data, state, send, done) => {
      if (data.change && data.change.origin !== 'setValue') {
        send('codemirror:update', { value: data.doc.getValue() }, done)
      }
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
      subscribe((type, payload) => {
        console.log(type, payload)
        send(`codemirror:${type}`, payload, done)
      })
  ]
}
