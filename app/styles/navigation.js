module.exports = {
  container: () => ({
    flex: '0 1 auto',
  }),
  title: ({ theme: {palette, typography} }) => ({
    // ...typography.title,
    color: palette.primary.contrastText,
    textDecoration: 'none',
    flex: 1
  })
}
