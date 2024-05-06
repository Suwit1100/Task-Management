import React from 'react'
import '../css/Item.css'
function Item() {
    return (
        <div className='list-item'>
            <p>รายการที่ 1</p>
            <div className="btn-group">
                <button className='btn-edit'>แก้ไข</button>
                <button className='btn-delete'>ลบ</button>
            </div>
        </div>
    )
}

export default Item