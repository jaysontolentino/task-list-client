
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Tasks from './pages/Tasks'


function App() {

  return (
     <>
        <Routes>
          <Route path='/' element={<Layout />}>
            {/* Public routes */}
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />

            {/* Private Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path='/' element={<Home />} />
              <Route path='/tasks' element={<Tasks />} />
            </Route>
            
            {/* Page Not Found Route */}
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
     </>
  )
}

export default App;
