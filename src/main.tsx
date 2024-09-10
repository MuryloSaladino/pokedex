import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./styles/reset.css"
import "./styles/global.css"

import MainRoutes from './routes/MainRoutes'
import { ThemeProvider } from '@mui/material'
import theme from './styles/theme'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <MainRoutes/>
        </ThemeProvider>
    </StrictMode>,
)
