import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useObservableState } from 'observable-hooks'
import { Alert, Snackbar } from '@mui/material'
import actions from 'actions'
import theme from 'theme/theme'
import Layout from 'components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  const { notificationMessage, showNotification, notificationType } = useObservableState(actions.AppService.getSubject()
  || actions.AppService.getCurrentState())


  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <Layout>
        <Component { ...pageProps } />
      </Layout>
      <Snackbar
        open={ showNotification }
        onClose={ actions.AppService.closeNotification }
        autoHideDuration={ 6000 }
        anchorOrigin={ { vertical: 'bottom', horizontal: 'right' } }
      >
        <Alert severity={ notificationType } >
          {notificationMessage}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  )
}

export default MyApp
