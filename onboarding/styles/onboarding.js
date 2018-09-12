module.exports = {
  form: ({ theme }) => ({
    padding: theme.space[5],
    minWidth: '300px',
    width: '50%',
    maxWidth: '800px',
    margin: '5em auto 0 auto',
    display: 'flex',
    flexDirection: 'column'
  }),
  button: () => ({
    minWidth: '150px',
    width: '75%',
    maxWidth: '300px',
  }),
  title: ({theme: {typography}}) => ({
    ...typography.title,
    textAlign: 'center'
  }),
  subheading: ({theme: {typography}}) => ({
    ...typography.subheading
  }),
}
