const { subscribe } = require('../lib/codemirror')

module.exports = {
  /* namespace the model so that it cannot access any properties and handlers in other models */
  namespace: 'codemirror',
  state: {
    value: ''
  },
  reducers: {
    change: (action, state) => ({
      value: action.value
    })
  },
  effects: {

  },
  subscriptions: [
    (send, done) => {
      subscribe((e) => {
        console.log(e)
        send('codemirror:change', { value: e.doc.cm.getValue() }, (err) => {
          if (err) return done(err)
        })
      })
    }
  ]
}
