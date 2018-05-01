module.exports = {
  container: ({ theme }) => ({
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.canvas,
    minHeight: theme.space[8],
    minWidth: theme.space[8],
  }),
  header: ({ theme: {space, typography} }) => ({
    ...typography.display1,
    textAlign: 'center',
    padding: space[4]
  }),
}
