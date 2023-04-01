import React, { useEffect, useState } from 'react'
import EditDeleteAndAddFunction from '../EditDeleteAndAddFunction/EditDeleteAndAddFunction'
import TypeOptions from '../TypeOption/TypeOptions'
import './IntefaceEditior.css'
import { v4 as uuidv4 } from 'uuid';
import EditableLabel from '../EditableLabel/EditableLabel';
import NestedData from '../NestedData/NestedData';



const IntefaceEditior = ({ data }) => {

    const [Data, setData] = useState(data)

    const AddData = () => {

        setData([...Data, {

            id: uuidv4(),
            name: 'addName',
            Types: {
                String: 'String',
                Number: 'Number',
                Boolean: 'Boolean',
                Object: 'Object'
            }
        }])
    }
    const handelDeletefunction = (indexToDelete) => {

        const deletedArray = Data && Data.filter(data => data.id !== indexToDelete)
        setData(deletedArray);
    }

    function handleChange(id, newText) {

        setData(prevData => prevData.map(item => {
            if (item.id === id) {

                return { ...item, name: newText }

            } else {
                return item;
            }
        }))

        console.log(Data)

    }

    const [nesetdId, setNesetdId] = useState(null);
    const [Type, setType] = useState(null)

    const handeloptionOnchange = (id, type) => {

        setNesetdId(id)
        setType(type)

    }

    const [avi, setAvi] = useState(null)
    const onButtonClick = (event) => {

        setAvi(event)
    }
    
    return (
        <>
            <div className='interface'>
                <div className='button_div'>
                    <p>field name and type</p>
                    <button onClick={AddData} >+</button>
                </div>
                <div className='all_details'>


                    {
                        Data.length !== 0 && Data.map((ele, index) => {

                            const { id, name, Types } = ele;
                            const objectArray = Object.entries(Types)

                            return (

                                <div key={id} className='itemDiv' >

                                    <div className='itemDiv1'>
                                        <span>{`${index + 1})`}</span>
                                        <EditableLabel text={name} onChange={handleChange} id={id} />


                                        <TypeOptions id={id} onChange={handeloptionOnchange} objectArray={objectArray}></TypeOptions>
                                        <EditDeleteAndAddFunction id={id} Data={Data} handelDeletefunction={handelDeletefunction} nesetdId={nesetdId} Type={Type} onButtonClick={onButtonClick}  ></EditDeleteAndAddFunction>

                                    </div>

                                    {


                                        Type && Type === 'Object' && avi &&  <div className='itemDiv2'>

                                            <NestedData></NestedData>
                                        </div>
                                    }



                                </div>



                            )

                        })

                    }



                </div>

            </div>
        </>
    )
}

export default IntefaceEditior
