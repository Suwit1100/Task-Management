import React from 'react'

function AddForm() {
    return (
        <>
            <h2>แบบฟอร์มจัดการงาน</h2>
            <form action="form-group">
                <input type="text" className='textinput' />
                <button type="submit" className='btn'>เพิ่มข้อมูล</button>
            </form>
        </>
    )
}

export default AddForm