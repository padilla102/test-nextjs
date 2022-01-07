import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'

export const UIProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
