import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(0, 0, 0, 0.87)', // #000000
    },
    secondary: {
      main: 'rgb(54, 130, 255)', // #3682ff
    },
    error: {
      main: 'rgb(255,23,68)', // #ff1744
    },
  },
})

export default theme
