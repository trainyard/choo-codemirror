# choo-codemirror

How to wrap codemirror with choo

## The Portal

Because codemirror has its own state management system, we need to be careful not to clobber ours.
What we can do is create a portal, this is basically a concept that puts in place strict `message passing`

### lib/codemirror-portal

```javascript
const CodeMirror = require('codemirror')
const defer = fn => setTimeout(fn, 0)
const subscribers = []
const broadcast = type => (...payload) =>
    subscribers.forEach(sub => {
      defer(sub(type, {
        evt: payload,
        doc: payload[0] && payload[0].doc || null,
        change: payload[1] || null
      }))
    })

exports.subscribe = listener => subscribers.push(listener)
exports.create = ({namespace}, options) => {
  const node = document.createElement('div')

  defer(() => {
    const editor = CodeMirror(node, options)
    editor.on('change', broadcast('change'))
    editor.on('focus', broadcast('focus'))
    editor.on('blur', broadcast('blur'))
    editor.on('scroll', broadcast('scroll'))
  })
  return node
}
```

Here we can use `create` to return a new node that asynchronously turns into a codemirror instance,
and `subscribe` which allows us to use a choo `model` to listen to state changes.

## Model

```javascript

const { subscribe } = require('../lib/codemirror-portal')

module.exports = {
  /* namespace the model so that it cannot access any properties and handlers in other models */
  namespace: 'codemirror',
  state: {
    value: '',
    isFocused: true,
    scroll: 0
  },
  reducers: {
    update: (action, state) => ({ value: action.value }),
    focusChange: (action, state) => ({ isFocused: action.focused }),
    scrollChange: (action, state) => ({ scroll: action.scroll })
  },
  effects: {
    change: (data, state, send, done) => {
      if (data.change && data.change.origin !== 'setValue') {
        send('codemirror:update', { value: data.doc.getValue() }, done)
      }
    },
    focus: (data, state, send, done) => {
      send('codemirror:focusChange', { focused: true }, done)
    },
    blur: (data, state, send, done) => {
      send('codemirror:focusChange', { focused: false }, done)
    },
    scroll: (data, state, send, done) => {
      send('codemirror:scrollChange', { scroll: data.doc.cm.getScrollInfo() }, done)
    }
  },
  subscriptions: [
    (send, done) =>
      subscribe((type, payload) => {
        send(`codemirror:${type}`, payload, done)
      })
  ]
}
```

As you can see we are using `subscriptions` to subscribe to the `portal`, and we use `effects` to
carefully route the changes to the `reducers`

## Rendering

Rendering was really tricky at first, because the `morphdom` does not see the modified `codemirror`, but
rather the simple `div` that was created originally.  To get around this, we need to grab the innerHTML
of the `codemirror` and pass it to `bel`

```javascript
const codemirror = require('../lib/codemirror-portal').create({
  namespace: 'codemirror'
}, {
  lineNumbers: true,
  autofocus: true
})

module.exports = () => {
  if (codemirror.innerHTML) {
    const element = document.createElement('div')
    element.innerHTML = codemirror.innerHTML
    return element
  } else {
    return codemirror
  }
}
```

This ensures the morphDOM is capable of seeing the entire lsit of nodes so when things update it doesnt wipe out
the whole thing.

Finally we can see our codemirror here:

```javascript
const html = require('choo/html')
const codemirror = require('../elements/codemirror')

module.exports = (state, prev, send) => {
  return html`
    <main>
      ${codemirror()}
      ${state.codemirror.value}
    </main>
  `
}
```

I hope this was helpful.
