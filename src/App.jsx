import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/Index'

import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify'

import './App.css'
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
 
  return (
    <>
    <HelmetProvider>
     <BrowserRouter>
        <RoutesIndex />
        <ToastContainer />
      </BrowserRouter> 
    </HelmetProvider>
    </>
  )
}

export default App
