import React, { useState } from 'react'

import axios from "axios"

const Contact = () => {
    const [ fullName, setFullName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')

    const [ success, setSuccess ] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        let response = await axios.post('http://localhost:5000/api/contact/', {
            fullName: fullName,
            email: email,
            message: message
        }, { headers: { 'Content-Type': 'application/json', 'accept': 'application/json'}})

        if ( response.status === 200 ) {
            setSuccess(true)
        }

        else {
            alert('Error !')
        }
    }

  return (
    <section className='container mt-5'>
        <div className="row">
            <div className="col-6 mx-auto">
                <h1 className='text-center'>
                    اتصل بنا
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className={success ? "alert alert-success mt-3" : "d-none"}>
                        تم إرسال الرسالة بنجاح!
                    </div>
                    <label htmlFor="fullName" className='form-label mt-3'>
                        الاسم الكامل
                    </label>
                    <input type="text" name="fullName" id="fullName" onChange={(e) => setFullName(e.target.value) } value={fullName} className='form-control' placeholder='الاسم الكامل...' required />

                    <label htmlFor="email" className='form-label mt-4'>
                        الايميل
                    </label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value) } value={email} className='form-control' placeholder='الايميل...' required />

                    <label htmlFor="message" className='form-label mt-4'>
                        الرسالة
                    </label>
                    <textarea name="message" id="message" onChange={(e) => setMessage(e.target.value) } value={message} rows="5" className='form-control' placeholder='الرسالة...' required></textarea>

                    <button type="submit" className='btn btn-primary w-100 my-5'>
                        إرسال
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact