module.exports = {
  container: ({ theme }) => ({
    padding: theme.space[3],
    width: '500px',
    flexWrap: 'wrap'
  }),
  fields: ({ theme }) => ({
    ...theme.typography.label,
    minHeight: theme.space[6],
    justifyContent: 'space-around',
    width: '75%',
    margin: 'auto'
  }),
  button: () => ({
    width: '75%',
  }),
  completion: ({ theme }) => ({
    ...theme.typography.body1,
    textAlign: 'left'
  }),
  bottomButtons: ({}) => ({
    display: 'flex',
    justifyContent: 'space-between'
  }),
  email: ({theme: {typography}}) => ({
    ...typography.body2,
    display: 'flex',
    justifyContent: 'center'
  })
}
