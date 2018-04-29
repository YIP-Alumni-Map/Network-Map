const green = require('material-ui/colors/green').default
const orange = require('material-ui/colors/orange').default
const grey = require('material-ui/colors/grey').default

module.exports = {
  breakpoints: {
    mobile: '30em', // 480px,
    mobileWide: '37.5em', // 600px,
    tablet: '48em', // 768px,
    tabletWide: '56.25em', // 900px,
    desktop: '64em', // 1024px,
    desktopWide: '90em', // 1440px,
    desktopXL: '120em' // 1920px
  },
  typography: {
    fontFamily: '\'Raleway\', \'Helvetica\', \'Arial\', sans-serif',
    fontSize: '16px',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    display4: {
      fontSize: '112px',
      fontWeight: 400,
      fontFamily: '\'Work Sans\', \'Helvetica\', \'Arial\', sans-serif',
      letterSpacing: '-.04em',
      lineHeight: 1,
      color: 'rgba(0, 0, 0, 0.54)'
    },
    display3: {
      fontSize: '56px',
      fontWeight: 400,
      fontFamily: '\'Work Sans\', \'Helvetica\', \'Arial\', sans-serif',
      letterSpacing: '-.02em',
      lineHeight: 1.35,
      color: '#000'
    },
    display2: {
      fontSize: '1.00000em',
      fontWeight: 600,
      fontFamily: '\'Work Sans\', \'Helvetica\', \'Arial\', sans-serif',
      lineHeight: '40px',
      color: 'rgba(0, 0, 0, 0.54)'
    },
    display1: {
      fontSize: '34px',
      fontWeight: 400,
      fontFamily: '\'Work Sans\', \'Helvetica\', \'Arial\', sans-serif',
      lineHeight: '40px',
      color: 'rgba(0, 0, 0, 0.54)'
    },
    headline: {
      fontSize: '24px',
      fontWeight: 600,
      fontFamily: '\'Work Sans\', \'Helvetica\', \'Arial\', sans-serif',
      lineHeight: '32px',
      color: 'rgba(0, 0, 0, 0.87)'
    },
    title: {
      fontSize: '24px',
      fontWeight: 400,
      fontFamily: '\'Work Sans\', \'Helvetica\', \'Arial\', sans-serif',
      lineHeight: 1,
      color: 'rgba(0, 0, 0, 0.87)'
    },
    subheading: {
      fontSize: '16px',
      fontWeight: 400,
      fontFamily: '\'Raleway\', \'Helvetica\', \'Arial\', sans-serif',
      lineHeight: 1,
      color: 'rgba(0, 0, 0, 0.87)'
    },
    body2: {
      fontSize: '16px',
      fontWeight: 600,
      fontFamily: '\'Raleway\', \'Helvetica\', \'Arial\', sans-serif',
      lineHeight: '20px',
      color: 'rgba(0, 0, 0, 0.87)'
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      fontFamily: '\'Raleway\', \'Helvetica\', \'Arial\', sans-serif',
      lineHeight: '20px',
      color: 'rgba(0, 0, 0, 0.87)'
    },
    label: {
      fontSize: '16px',
      fontWeight: 400,
      fontFamily: '\'Raleway\', \'Helvetica\', \'Arial\', sans-serif',
      lineHeight: '20px',
      color: 'rgba(0, 0, 0, 0.54)'
    },
    caption: {
      fontSize: '12px',
      fontWeight: 400,
      fontFamily: '\'Raleway\', \'Helvetica\', \'Arial\', sans-serif',
      lineHeight: 1,
      color: 'rgba(0, 0, 0, 0.87)'
    },
    button: {
      fontSize: '14px',
      textTransform: 'uppercase',
      fontWeight: 600,
      fontFamily: '\'Work Sans\', \'Helvetica\', \'Arial\', sans-serif'
    }
  },
  space: [
    // http://tachyons.io/docs/layout/spacing/
    '0rem', // [0] SR: to override default allofthespace with noneofthespace
    '0.25rem', // [1]
    '0.5rem', // [2]
    '1rem', // [3]
    '2rem', // [4]
    '4rem', // [5]
    '8rem', // [6]
    '16rem', // [7]
    '32rem', // [8]
    '48rem', // [9]
    '64rem', // [9]
    '72rem', // [10]
  ],
  palette: {
    primary: {
      light: orange.A200,
      main: '#F47921',
      dark: orange[800],
      contrastText: grey[50]
    },
    secondary: {
      light: green[300],
      main: '#47AB48',
      dark: green[900],
      contrastText: grey[50]
    },
    greys: [
      grey[50], // [0]
      grey[100], // [1]
      grey[200], // [2]
      grey[300], // [3]
      grey[400], // [4]
      grey[500], // [5]
      grey[600], // [6]
      grey[700], // [7]
      grey[800], // [8]
      grey[900] // [9]
    ],
    text: grey[900],
    alternateText: grey[50],
    canvas: grey[50],
    border: grey[300],
    shadow: grey[900]
  },
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900
  },
  em: '1em',
  rem: '1rem',
  borderRadius: '2px',
  zIndexMax: 1000
}
