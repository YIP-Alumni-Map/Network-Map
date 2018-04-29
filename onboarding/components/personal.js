const h = require('react-hyperscript')
const { Form, Field } = require('react-final-form')
const { TextField } = require('redux-form-material-ui')
const validate = require('redux-form-with-ajv').default
const Button = require('material-ui/Button').default

const schema = require('../../users/schemas/personalDetails')

module.exports = function PersonalDetailsForm (props) {
  const {
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
            // className: styles.fields
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
            })
          ]),
          h(Button, {
            // className: styles.button,
            variant: 'raised',
            color: 'primary',
            type: 'submit',
          }, [
            "Next"
          ])
        ])
      )
    })
  )
}
