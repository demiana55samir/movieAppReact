import { BrowserRouter , Route,Routes } from 'react-router-dom'
import './App.css'
import Movies from './Pages/Movies/movies'
import LoginForm from './Pages/login/login'
import RegistrationForm from './Pages/registeration/regist'
import Home from './Pages/Home/home'
import BasicExample from './components/navBar/navbar'
import Fav from './Pages/Fav/favourite'


function App() {
  return (
    <BrowserRouter>
   < BasicExample/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/fav' element={<Fav/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/registeration' element={<RegistrationForm/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App


{/* <LoginForm/> */}
{/* <RegistrationForm/> */}
{/* <ToDoApp/> */}

