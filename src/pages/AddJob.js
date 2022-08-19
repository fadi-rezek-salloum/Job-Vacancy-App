import React, { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext';

import axios from 'axios';

const AddJob = () => {

    let { user } = useContext(AuthContext);

    let [name, setName] = useState(null);
    let [description, setDescription] = useState(null);
    let [company, setCompany] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let response = await axios.post('https://localhost:5000/api/job/add', {
            jobTitle: name,
            descraption: description,
            companyName: company
        }, { headers: { 'Content-Type': 'application/json', 'accept': 'application/json'}})

        if ( response.status === 200 ) {
            alert('تم إضافة الوظيفة بنجاح !')
        } else {
            alert('حصلت مشكلة!')
        }

    }

  return (
    <section className="container my-5">
        <div className="row">
            <h2 className='text-center'>
                إضافة وظيفة جديدة
            </h2>
            <form onSubmit={handleSubmit} method="post" className='w-50 mx-auto mt-5'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        المسمى الوظيفي
                    </label>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} className='form-control' placeholder='المسمى الوظيفي...'/>
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        تفاصيل الوظيفة
                    </label>
                    <textarea name="description" rows='5' onChange={(e) => setDescription(e.target.value)} value={description} className='form-control' placeholder='تفاصيل الوظيفة...'/>
                </div>

                <div className="mb-3">
                    <label htmlFor="company" className="form-label">
                        اسم الشركة
                    </label>
                    <input type="text" name="company" onChange={(e) => setCompany(e.target.value)} value={company} className='form-control' placeholder='اسم الشركة...'/>
                </div>
                <input type="submit" value="إضافة الوظيفة" className='btn btn-primary w-100' />
            </form>
        </div>
    </section>
  )
}

export default AddJob