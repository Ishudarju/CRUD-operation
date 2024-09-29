import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Product from './Product'
import Insert from './Insert'
import Update from './Update'

function App() {
  const [count, setCount] = useState(0)

  return (


<>
     <BrowserRouter>
        <Routes>
           <Route path='/' element={<Product/>}></Route>
           <Route path='/insert' element={<Insert/>}></Route>
           <Route path='/update/:id' element={<Update/>}></Route>
           
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
