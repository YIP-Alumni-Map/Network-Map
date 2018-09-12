const h = require('react-hyperscript')
const { compose } = require('recompose')
const { partial } = require('ramda')
const { connect: connectStyles } = require('react-fela')
const { connect: connectStore } = require('redux-bundler-react')
const Button = require('material-ui/Button').default
const Paper = require('material-ui/Paper').default

const styles = require('../styles/landing')

module.exports = compose(
  connectStyles(styles),
  partial(connectStore, [
    'doUpdateUrl'
  ])
)(Landing)

function Landing (props) {
  const {
    styles,
    updateUrl
  } = props

  return (
    h('div', {
      className: styles.container
    }, [
      h(Paper, {
        className: styles.header
      }, [
        h('div', [
          h('iframe', {
            src: "https://embed.kumu.io/839849e7019a68bc698a464b1b49a281",
            width: "940",
            height: "600",
            frameborder: "0"
          })
        ]),
      ])
    ])
  )
}
