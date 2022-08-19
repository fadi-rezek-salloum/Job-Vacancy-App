import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import AuthContext from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate()

  let { loginUser, auth } = useContext(AuthContext);

  useEffect(() => {
    if ( auth ) {
      navigate('/jobs-list')
    }
    return;
  })

  return (
    <section className='container mt-5'>
      <h1 className="text-center">
        تسجيل الدخول
      </h1>
      <form className='w-50 mx-auto mt-5' onSubmit={loginUser}>
        <label htmlFor="email" className='form-label mt-3'>
          اﻹيميل
        </label>
        <input type="email" name="email" id="email" className='form-control' placeholder='اﻹيميل...' required />

        <label htmlFor="password" className='form-label mt-3'>
          كلمة السر
        </label>
        <input type="password" name="password" id="password" className='form-control' placeholder='كلمة السر...' required />

        <button type="submit" className='btn btn-primary mt-5 w-100'>
          تسجيل الدخول
        </button>
      </form>
    </section>
  )
}

export default Login