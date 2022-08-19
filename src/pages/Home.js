import React, { useContext, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext';

const Home = () => {

  const navigate = useNavigate()

  let { auth } = useContext(AuthContext);

  useEffect(() => {
    if ( auth ) {
      navigate('/jobs-list')
    }
    return;
  })

  return (
    <main className="hero__section">
      <div className="container">
        <h1 className="text-center pt-5 text-white">
          أهلا بكم في موقع شغلني, أكبر موقع للتوظيف في سوريا
        </h1>

        <br />

        <h3 className="text-center pt-5 text-white">
          هنا سوف تجد فرصة عمل تناسب اهتمامك و تخصصك
        </h3>

        <h5 className="text-center pt-5 text-white">
          من فضلك, قم بتسجيل الدخول لتتمكن من استعراض الوظائف المتوفرة
        </h5>

        <br />
      
        <div className="row mt-5 text-center">
          <div className="col-12">
            <Link to='/login' className='btn btn-success btn-lg shadow-lg mx-3'>
              تسجيل الدخول
            </Link>
            <Link to='/register' className='btn btn-primary btn-lg shadow-lg mx-3'>
              إنشاء حساب جديد
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}

export default Home