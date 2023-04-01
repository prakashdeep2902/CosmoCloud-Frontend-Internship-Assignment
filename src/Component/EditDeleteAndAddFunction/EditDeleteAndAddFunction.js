import React, { useState } from 'react'
import './EditDeleteAndAddFunction.css'
import data from '../../Data/Data';
import { AiFillDelete } from 'react-icons/ai';



const EditDeleteAndAddFunction = ({ onButtonClick, id, Data, handelDeletefunction, nesetdId, Type }) =>{


    const [avi,SetAvi]=useState(true)
   
    const Handelonclick=()=>{
        SetAvi(!avi)
        onButtonClick(avi)
    }

    return (
        <div className='addDelete_conatiner'>

            <div className='item_container'>
                <button className='icon'  onClick={Handelonclick}  >+</button>
                <AiFillDelete className='icon' onClick={() => handelDeletefunction(id)} />
            </div>
        </div>
    )
}

export default EditDeleteAndAddFunction
