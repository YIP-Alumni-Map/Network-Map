const { Provider: StoreProvider } = require('redux-bundler-react')
const { Provider: StyleProvider, ThemeProvider: StyleThemeProvider } = require('react-fela')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const createMuiTheme = require('material-ui/styles/createMuiTheme').default
const h = require('react-hyperscript')

module.exports = Provider

function Provider (props) {
  const {
    styleRenderer,
    theme,
    store,
    children
  } = props

  return (
    h(StoreProvider, {
      store
    }, [
      h(StyleProvider, {
        renderer: styleRenderer
      }, [
        h(StyleThemeProvider, {
          theme
        }, [
          h(MuiThemeProvider, {
            theme: themeToMuiTheme(theme)
          }, children)
        ])
      ])
    ])
  )
}

function themeToMuiTheme (theme) {
  return createMuiTheme(theme)
}
