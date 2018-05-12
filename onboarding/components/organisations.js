const h = require('react-hyperscript')
const { Form, Field } = require('react-final-form')
const { TextField } = require('redux-form-material-ui')
const validate = require('redux-form-with-ajv').default
const Button = require('material-ui/Button').default
const Paper = require('material-ui/Paper').default
const { MenuItem } = require('material-ui/Menu')

const { map, isNil } = require('lodash')

const connectionOptions = [
  {
    label: 'I am currently involved with this',
    value: 'work'
  },
  {
    label: 'I have a friend here',
    value: 'friend'
  },
  {
    label: 'I used to be involved',
    value: 'previous'
  }
]
const schema = require('../../users/schemas/organisationDetails')

module.exports = function OrganisationDetailsForm (props) {
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
      h('h2', {className: styles.title}, 'Organisations you are connected to'),
      h('p', {className: styles.subheading}, 'To make this experience as full and exciting as possible, we want to include as many organisations as possible that people have a PERSONAL connection to. You can add other organsations later that you think are great organisations but do not have a personal connection to'),
      h(Form, {
        onSubmit: doSubmit,
        validate: validate(schema),
        render: ({ handleSubmit }) => (
          h('form', {
            onSubmit: handleSubmit
          }, [
            h(Field, {
              name: 'name',
              component: TextField,
              placeholder: 'Organisation Name',
              label: 'Organisation Name',
              fullWidth: true,
              margin: 'normal'
            }),
            h(Field, {
              name: 'description',
              component: TextField,
              placeholder: 'Description',
              label: 'Description',
              fullWidth: true,
              margin: 'normal'
            }),
            h(TextField, {
              select: true,
              margin: 'normal',
              label: 'Connection',
              SelectProps: {
                MenuProps: {
                  PaperProps: {
                    style: {
                      maxHeight: '600px',
                      width: '200px'
                    }
                  }
                }
              }
            }, [
              map(connectionOptions, ({label, value}, key) => {
                if (isNil(value)) return
                return h(MenuItem, {
                  value,
                  key
                }, label)
              })
            ]),
            h(Button, {
              className: styles.button,
              style: {
                // not good form but MUI is being difficult (-MS)
                // TODO fix later properly using classname (-MS)
                display: 'flex',
                margin: '1em auto'
              },
              variant: 'raised',
              color: 'primary',
              type: 'submit',
            }, [
              'Next'
            ])
          ])
        )
      })
    ])
  )
}
