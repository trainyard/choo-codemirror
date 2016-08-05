const sf = require('sheetify')
const choo = require('choo')
const CodeMirror = require('./externals/codemirror')

sf('normalize.css', { global: true })
sf('./styles/main.css', { global: true })
sf('codemirror/lib/codemirror.css', { global: true })

const app = choo()

if (process.env.NODE_ENV !== 'production') {
  const log = require('choo-log')
  app.use(log())
}

app.model(require('./models/code-mirror'))
app.router(require('./routes'))

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
