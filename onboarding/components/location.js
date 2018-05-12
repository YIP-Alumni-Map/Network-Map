const h = require('react-hyperscript')
const { TextField } = require('redux-form-material-ui')
const validate = require('redux-form-with-ajv').default
const Button = require('material-ui/Button').default
const Paper = require('material-ui/Paper').default
const { Form, Field } = require('react-final-form')
const arrayMutators = require('final-form-arrays').default
const { FieldArray } = require('react-final-form-arrays')

const { MenuItem } = require('material-ui/Menu')
const { map, isNil } = require('lodash')

const locationOptions = [
  {
    label: 'I am currently here',
    value: 'current'
  },
  {
    label: 'I have spent time here in the past',
    value: 'past'
  },
  {
    label: 'I am going here in the near future',
    value: 'future'
  },
  {
    label: 'This is my place of origin',
    value: 'origin'
  }
]

const schema = require('../../users/schemas/locationDetails')

module.exports = function LocationDetailsForm (props) {
  const {
    doSubmitOnboardingStep: doSubmit,
    styles
  } = props

  return (
    h(Paper, {
      classes: {
        root: styles.form
      }
    }, [
      h('h2', {className: styles.title}, 'Location Info'),
      h('p', {className: styles.subheading}, 'The next step is to enter a little bit of information about where you have been and where you are to enable us to use each others global networks as we travel the world.'),
      h(Form, {
        onSubmit: doSubmit,
        mutators: {
          ...arrayMutators
        },
        render: ({
          handleSubmit,
          form: {mutators: { push, pop }}, // injected from final-form-arrays above
          pristine,
          reset,
          submitting,
          values
        }) => {
          return (
            h('form', {
              onSubmit: handleSubmit
            }, [
              h('div', [
                h(FieldArray, {name: 'locations'}, [
                  ({ fields }) =>
                    fields.map((name, key) => [
                      h('p', `Location # ${key + 1}`),
                      h(Field, {
                        name: `location-${name}`,
                        component: TextField,
                        label: 'Location',
                        // fullWidth: true,
                        margin: 'normal'
                      }),
                      h(TextField, {
                        name: `type-${name}`,
                        select: true,
                        // fullWidth: true,
                        margin: 'normal',
                        label: 'Relationship to the place',
                        value: 'future',
                        SelectProps: {
                          MenuProps: {
                            PaperProps: {
                              style: {
                                maxHeight: '600px',
                              }
                            }
                          }
                        }
                      }, [
                        map(locationOptions, ({label, value}, key) => {
                          if (isNil(value)) return
                          return h(MenuItem, {
                            value,
                            key
                          }, label)
                        })
                      ]),
                      h('span', {
                        onClick: () => fields.remove(key),
                        style: { cursor: 'pointer' }
                      }, '❌')
                    ])
                ]),
                h('div', { style: {
                  display: 'flex',
                  justifyContent: 'center'
                }}, [
                  h(Button, {
                    variant: 'flat',
                    color: 'secondary',
                    onClick: () => push('locations', undefined)}, 'Add New Location'),
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
                    disabled: submitting || pristine
                  }, [
                    "Next"
                  ])
                ],
                ),
              ])
            ]))
        }})
    ])
  )
}
