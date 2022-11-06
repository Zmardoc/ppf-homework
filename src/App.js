import '@fontsource/roboto/300.css' //TODO dat nekam jinam
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import BaseContainer from './layouts/BaseContainer'
import { TopHeader } from './components/TopHeader'
import { TransparentAccount } from './pages/TransparentAccount'
import { createTheme, ThemeProvider } from '@mui/material'

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#002c59',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <TopHeader />
      <main>
        <BaseContainer>
          <TransparentAccount />
        </BaseContainer>
      </main>
    </ThemeProvider>
  )
}

export default App
