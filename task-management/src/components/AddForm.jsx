import React from 'react'
import "../css/AddForm.css"

function AddForm() {
    return (
        <>
            <h2>แอปจัดการงาน</h2>
            <form>
                <div className="form-control">
                    <input type="text" className='textinput' />
                    <button type="submit" className='btn-submit'>เพิ่มข้อมูล</button>
                </div>
            </form>
        </>
    )
}

export default AddForm