import {Route, Routes} from 'react-router-dom'
import React from 'react'
import Home from './Home'
import MovieDetails from './MovieDetails'

function Pages() {
  return (
   <Routes> 
        <Route path="/" element={<Home/>} />

         <Route path="/movie/:name" element={<MovieDetails/>} />
   </Routes>
  )
}

export default Pages