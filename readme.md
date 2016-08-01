# choo-codemirror

This is really just an example of how you can use choo and codemirror together.

This is using `message passing` to keep codemirror and choo separate.

For starting, I create a folder called `externals` and put codemirror.js in there.

## externals/codemirror.js

```javascript

const CodeMirror = require('CodeMirror')

const defer = fn => setTimeout(fn, 0)
const subscribers = []
const broadcast = e => subscribers.forEach(sub => defer(sub(e)))

exports.subscribe = listener => subscribers.push(listener)

exports.create = ({namespace}, options) => {
  const node = document.createElement('textarea')
  defer(() => {
    const editor = CodeMirror.fromTextArea(node, options)
    editor.on('change', broadcast)
  })
  return node
}

```

## models/code-mirror.js

Next, we can create a model to handle the codemirror changes.  We can use our exported `subscribe` function

```javascript
const { subscribe } = require('../externals/codemirror')

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
        send('codemirror:change', { value: e.doc.cm.getValue() }, (err) => {
          if (err) return done(err)
        })
      })
    }
  ]
}
```

We can easily then use `subscribe`, set our model `namespace`, and ensure that `codemirror` stays separate from our application.

Then we can use the exported `create` function:

```javascript
const choo = require('choo')
const CodeMirror = require('./externals/codemirror')
const app = choo()

app.router(require('./routes'))
app.model(require('./models/code-mirror'))

const tree = app.start()
const codemirror = CodeMirror.create({
  namespace: 'codemirror'
}, {
  lineNumbers: true,
  autofocus: true
})
const codemirrorContainer = document.createElement('div')

codemirrorContainer.setAttribute('class', 'split')
codemirrorContainer.appendChild(codemirror)
document.body.appendChild(codemirrorContainer)
document.body.appendChild(tree)
```

Then our view is easily used here:

```javascript
const html = require('choo/html')
module.exports = (state, prev, send) => html`
  <main class="split">
    <pre>${state.codemirror.value}</pre>
  </main>
`
```

Hope this helps! <3
