import React, { useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import axios from 'axios'
import AuthContext from '../context/AuthContext'

export const JobDetails = () => {

    let { user } = useContext(AuthContext);

    let navigate = useNavigate();

    const location = useLocation();
    const { job } = location.state;

    let [cv, setCv] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        setCv(e.target.cv.files[0])

        if(cv) {
            const formData = new FormData();

            formData.append('cv', cv);

            let response = await axios.post('http://localhost:5000/api/apply', formData, { headers: { 'Content-Type': 'application/json;charset=UTF-8', 'Accept': '*/*', "Access-Control-Allow-Origin": "*"}})

            if ( response.status === 200 ) {
                alert('تم التقديم على هذه الوظيفة!')
            }
        }
    }

    const handleDelete = async () => {
        let response = await axios.delete('https://localhost:5000/api/delete/job', {
            id: job.id,
        }, { headers: { 'Content-Type': 'application/json', 'accept': 'application/json'}})

        if ( response.status === 200 ) {
            navigate('/jobs-list')
        }
    }

  return (
    <section className='container my-5'>
        <div className="row">
            <div className="col-4 text-center">
                {job.jobTitle}
            </div>

            <div className="col-4 text-center">
                {job.descraption}
            </div>

            <div className="col-4 text-center">
                {job.companyName}
            </div>

            <div className={ user?.status === 'admin' ? "col-12 text-center" : "d-none"}>
                <button className="btn btn-danger" onClick={handleDelete}>
                    حذف هذه الوظيفة
                </button>
            </div>
        </div>

        <div className="row mt-5">
            <h2 className='text-center'>
                التقديم على هذه الوظيفة
            </h2>
            <form method="post" onSubmit={handleSubmit} className='w-50 mx-auto mt-5'>
                <label htmlFor="cv" className='form-label'>
                    اختر ملف السيرة الذاتية
                </label>
                <input type="file" name="cv" id="cv" className='form-control' required />
                <input type="submit" value="رفع الملف" className='btn btn-primary w-100 mt-3' />
            </form>
        </div>
    </section>
  )
}