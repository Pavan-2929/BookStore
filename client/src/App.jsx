import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import ShowBook from './pages/ShowBook'
import UpdateBook from './pages/UpdateBook'
import DeleteBook from './pages/DeleteBook'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/book/create' element={<CreateBook/>}/>
      <Route path='/book/details/:id' element={<ShowBook/>}/>
      <Route path='/book/update/:id' element={<UpdateBook/>}/>
      <Route path='/book/delete/:id' element={<DeleteBook/>}/>
    </Routes>
    </>
  )
}

export default App
