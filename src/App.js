import React from 'react'
import data from './Data/Data'
import IntefaceEditior from './Component/IntefaceEditior/IntefaceEditior'
import './App.css'
const App = () => {

  return (
    <>
      <h1 className='firstH1'>CosmoCloud Frontend Internship Assignment</h1>
      <div className='container'>
       <IntefaceEditior data={data} ></IntefaceEditior>
      </div>

    </>
  )
}

export default App
