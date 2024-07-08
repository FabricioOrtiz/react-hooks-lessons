import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import LoginPage from './componets/pages/Login'
import SignupPage from './componets/pages/Signup'



function App() {

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage></LoginPage>}></Route>
            <Route path='/signup' element={<SignupPage></SignupPage>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
