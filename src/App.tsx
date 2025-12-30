import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './auth/AuthProvider'
import AppRoutes from './routes/AppRoutes'
import './App.css'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
