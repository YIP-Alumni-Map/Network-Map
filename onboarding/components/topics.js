const h = require('react-hyperscript')
const { Form, Field } = require('react-final-form')
const { TextField } = require('redux-form-material-ui')
const validate = require('redux-form-with-ajv').default
const Button = require('material-ui/Button').default
const Paper = require('material-ui/Paper').default

const schema = require('../../users/schemas/personalDetails')

module.exports = function PersonalDetailsForm (props) {
  const {
    doSubmitOnboardingStep: doSubmit,
    styles
  } = props
  console.log(styles, 'styles')
  return (
    h(Paper, {
      classes: {
        root: styles.form
      }
    }, [
      h('h2', {className: styles.title}, 'Personal Info'),
      h('p', {className: styles.subheading}, 'First off if we could get a bit of info about you to help populate the map'),
      h(Form, {
        onSubmit: doSubmit,
        validate: validate(schema),
        render: ({ handleSubmit }) => (
          h('form', {
            onSubmit: handleSubmit
          }, [
            h(Field, {
              name: 'firstName',
              component: TextField,
              placeholder: 'First Name',
              label: 'First Name',
              fullWidth: true,
              margin: 'normal'
            }),
            h(Field, {
              name: 'lastName',
              component: TextField,
              placeholder: 'Last Name',
              label: 'Last Name',
              fullWidth: true,
              margin: 'normal'
            }),
            h(Button, {
              className: styles.button,
              style: {
                // not good form but MUI is being difficult
                // TODO fix later properly using classname
                display: 'flex',
                margin: '1em auto'
              },
              variant: 'raised',
              color: 'primary',
              type: 'submit',
            }, [
              "Next"
            ])
          ])
        )
      })
    ])
  )
}
