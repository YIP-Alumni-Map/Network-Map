const h = require('react-hyperscript')
const IconButton = require('material-ui/IconButton').default
const Icon = require('material-ui/Icon').default
const Snackbar = require('material-ui/Snackbar').default

module.exports = function OnboardingSnackbar (props) {
  const {
    snackbar,
    doClearSnackbar
  } = props

  return (
    h(Snackbar, {
      open: snackbar.message != null,
      onClose: doClearSnackbar,
      message: snackbar.message,
      anchorOrigin: {vertical: 'top', horizontal: 'center'},
      action: [
        h(IconButton, {
          key: 'close',
          'aria-label': 'Close',
          onClick: doClearSnackbar
        }, [
          h(Icon, 'close')
        ])
      ]
    })
  )
}
