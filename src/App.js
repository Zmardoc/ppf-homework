import BaseContainer from './layouts/BaseContainer'
import { TopHeader } from './components/TopHeader'
import { TransparentAccount } from './pages/TransparentAccount'
import { createTheme, ThemeProvider } from '@mui/material'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#002c59',
      },
    },
  })
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <TopHeader />
        <main>
          <BaseContainer>
            <Routes>
              <Route exact path="/" element={<Navigate to="/101010101010" />} />
              <Route path="/:accountId" element={<TransparentAccount />} />
            </Routes>
          </BaseContainer>
        </main>
      </ThemeProvider>
    </Router>
  )
}

export default App
