const sf = require('sheetify')
const choo = require('choo')

sf('normalize.css', { global: true })
sf('./styles/main.css', { global: true })
sf('codemirror/lib/codemirror.css', { global: true })

const app = choo()

if (process.env.NODE_ENV !== 'production') {
  const log = require('choo-log')
  app.use(log())
}

app.model(require('./models/codemirror'))
app.router(['/', require('./views/home')])

const tree = app.start()

document.body.appendChild(tree)
