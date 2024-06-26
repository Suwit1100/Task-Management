import React from 'react'
import '../css/Item.css'
import { BsTrash, BsPen } from "react-icons/bs";
function Item(porps) {
    const { data, deletetask, edittask } = porps;
    return (
        <div className='list-item'>
            <p>{data.title}</p>
            <div className="btn-group">
                <button className='btn-edit' onClick={() => edittask(data.id)}><BsPen /></button>
                <button className='btn-delete' onClick={() => deletetask(data.id)}><BsTrash /></button>
            </div>
        </div>
    )
}

export default Item