import axios from 'axios';

import React, { useState, useEffect } from 'react'
import { useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Register = () => {

    let navigate = useNavigate();

    const [firstName, setFirstName] = useState("");

    const [lastName, setLastName] = useState("");

    const [email, setEmail] = useState("");

    const [pwd, setPwd] = useState("");

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg("");
    }, [matchPwd]);

    let { auth } = useContext(AuthContext);

    useEffect(() => {
      if ( auth ) {
        navigate('/jobs-list')
      }
      return;
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        let response = await axios.post('https://localhost:5000/api/register', {
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: pwd,
            },
            { headers: { 'Content-Type': 'application/json', 'accept': 'application/json'}}
          );
      
          if (response.status === 200) {
            setSuccess(true);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPwd("");
            setMatchPwd("");
            setErrMsg("");

            navigate('/login')

          } else {
            setSuccess(false);
            setErrMsg(response);
          }
    }

  return (
    <section className='container mt-5'>
      <h1 className="text-center">
        إنشاء حساب جديد
      </h1>
      <form className='w-50 mx-auto mt-5' onSubmit={handleSubmit}>

        <div className={errMsg ? "alert alert-danger" : "d-none"}>
            {errMsg}
        </div>

        <div className={success ? "alert alert-success" : "d-none"}>
            تم إنشاء مستخدم جديد بنجاح! قم الان <Link to='/login'>بتسجيل الدخول</Link>
        </div>

        <label htmlFor="first_name" className='form-label mt-3'>
          الاسم اﻷول
        </label>
        <input type="text" name="first_name" id="first_name" onChange={(e) => {setFirstName(e.target.value)}} value={firstName} className='form-control' placeholder='الاسم اﻷول...' required />

        <label htmlFor="last_name" className='form-label mt-3'>
          الكنية
        </label>
        <input type="text" name="last_name" id="last_name" onChange={(e) => {setLastName(e.target.value)}} value={lastName} className='form-control' placeholder='الكنية...' required />

        <label htmlFor="email" className='form-label mt-3'>
          الإيميل
        </label>
        <input type="email" name="email" id="email" onChange={(e) => {setEmail(e.target.value)}} value={email} className='form-control' placeholder='الإيميل...' required />

        <label htmlFor="pwd" className='form-label mt-3'>
          كلمة السر
        </label>
        <input type="password" name="pwd" id="pwd" onChange={(e) => {setPwd(e.target.value)}} value={pwd} className='form-control' placeholder='كلمة السر...' required />

        <label htmlFor="pwd" className='form-label mt-3'>
          تأكيد كلمة السر
        </label>
        <input type="password" name="pwd" id="pwd" onChange={(e) => {setMatchPwd(e.target.value)}} value={matchPwd} className='form-control' placeholder='تأكيد كلمة السر...' required />

        <button type="submit" className='btn btn-primary my-5 w-100'>
          إنشاء حساب جديد
        </button>
      </form>
    </section>
  )
}

export default Register