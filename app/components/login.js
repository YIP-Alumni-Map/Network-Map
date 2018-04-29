const h = require('react-hyperscript')
const { compose, lifecycle } = require('recompose')
const { partial } = require('ramda')
const { connect: connectStyles } = require('react-fela')
const { connect: connectStore } = require('redux-bundler-react')
const { Form, Field } = require('react-final-form')
const { TextField } = require('redux-form-material-ui')
const validate = require('redux-form-with-ajv').default
const Typography = require('material-ui/Typography').default
const Button = require('material-ui/Button').default

const OnboardingSnackbar = require('../../onboarding/components/onboardingSnackbar')
const schema = require('../../users/schemas/createUser')
const styles = require('../styles/login')

module.exports = compose(
  connectStyles(styles),
  partial(connectStore, [
    'doSubmitOnboardingStart',
    'doClearOnboardingUser',
    'doResendOnboardingEmail',
    'selectOnboardingUser',
    'selectOnboardingSnackbar',
    'doClearOnboardingSnackbar'
  ]),
)(LandingForm)

function LandingForm (props) {
  const {
    styles,
    onboardingSnackbar: snackbar,
    doClearOnboardingSnackbar: doClearSnackbar,
    onboardingUser: user
  } = props
  return (
    h('div', {
      className: styles.container
    }, [
      user
        ? h(LoginEmailSent, props)
        : h(LoginEmailForm, props),
      h(OnboardingSnackbar, {
        styles,
        snackbar,
        doClearSnackbar
      })
    ])
  )
}

function LoginEmailSent (props) {
  const {
    styles,
    onboardingUser: user,
    doClearOnboardingUser,
    doResendOnboardingEmail
  } = props

  const { id, email } = user

  return (
    h('div', {
      className: styles.completion
    }, [
      h('div', {className: styles.bottomButtons}, [
        h('p', "Can't find the email? "),
        h(Button, {
          color: 'secondary',
          onClick: handleResendEmail
        }, [
          'Resend Email'
        ]),
        h(Button, {
          color: 'secondary',
          onClick: doClearOnboardingUser
        }, [
          'Start Over'
        ])
      ])
    ])
  )

  function handleResendEmail () {
    doResendOnboardingEmail(id)
  }
}

function LoginEmailForm (props) {
  const {
    styles,
    doSubmitOnboardingStart: doSubmit
  } = props
  return (
    h(Form, {
      onSubmit: doSubmit,
      validate: validate(schema),
      render: ({ handleSubmit }) => (
        h('form', {
          onSubmit: handleSubmit
        }, [
          h('div', {
            className: styles.fields
          }, [
            h(Field, {
              name: 'email',
              component: TextField,
              placeholder: 'ash@example.com',
              label: 'Email',
              fullWidth: true,
              margin: 'normal'
            })
          ]),
          h(Button, {
            className: styles.button,
            variant: 'raised',
            color: 'primary',
            type: 'submit',
          }, [
            "Let's go!"
          ])
        ])
      )
    })
  )
}
