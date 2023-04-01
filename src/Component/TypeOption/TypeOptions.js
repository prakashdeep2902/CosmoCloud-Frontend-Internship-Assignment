import React, { useState } from 'react'
import './TypeOptions.css'
const TypeOptions = (props) => {

    const { id, onChange, objectArray } = props

    const handelonchnage = (e) => {

       
        onChange(e.target.id,e.target.value)
      
    }



    return (
        <>
            <select name="select" className='select' id={id} onChange={handelonchnage} >

                {
                    objectArray && objectArray.map(([key, value]) => {

                        return (
                            <option key={key} value={value}>{value}</option>
                        )
                    })
                }



            </select>
        </>
    )
}

export default TypeOptions
