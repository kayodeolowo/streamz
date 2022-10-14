import Pages from './Pages/Pages';
import React from 'react'
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter> 
      <Pages/>
    </BrowserRouter>
  )
}
