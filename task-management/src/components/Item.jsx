import React from 'react'
import '../css/Item.css'
function Item(porps) {
    const { data, deletetask, edittask } = porps;
    return (
        <div className='list-item'>
            <p>{data.title}</p>
            <div className="btn-group">
                <button className='btn-edit' onClick={()=>edittask(data.id)}>แก้ไข</button>
                <button className='btn-delete' onClick={() => deletetask(data.id)}>ลบ</button>
            </div>
        </div>
    )
}

export default Item