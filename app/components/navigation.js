const h = require('react-hyperscript')
const { compose } = require('recompose')
const { connect: connectStyles } = require('react-fela')
const AppBar = require('material-ui/AppBar').default
const Toolbar = require('material-ui/Toolbar').default
const Button = require('material-ui/Button').default
const Typography = require('material-ui/Typography').default
const { connect: connectStore } = require('redux-bundler-react')
const { partial } = require('ramda')

const styles = require('../styles/navigation')

module.exports = compose(
  connectStyles(styles),
  partial(connectStore, [
    'doSignout',
    'selectIsAuthenticated'
  ])
)(Navigation)

function Navigation (props) {
  const {
    styles,
    doSignout,
    isAuthenticated
  } = props
  return (
    h('div', {
      className: styles.container
    }, [
      h(AppBar, {
        position: 'static',
        color: 'primary'
      }, [
        h(Toolbar, [
          h('a', {
            className: styles.title,
            href: '/'
          }, [
            'YIP Alumni Network'
          ]),
          isAuthenticated
            ? h(Button, {
              onClick: doSignout,
              color: 'inherit',
            }, [
              'Sign Out'
            ])
            : null
        ])
      ])
    ])
  )
}
