import React, { useContext } from 'react'

import { Link } from 'react-router-dom'

import AuthContext from '../context/AuthContext'

import userLogo from '../images/user.png'

const Header = () => {

  const { user, logoutUser } = useContext(AuthContext);

  console.log(user);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">
                شغلني سوريا
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className={!user ? "nav-link" : "d-none"} aria-current="page">
                        الصفحة الرئيسية
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link" aria-current="page">
                        حول الموقع
                    </Link>
                </li>

                <li className={user ? "nav-item" : "d-none"}>
                    <Link to="/jobs-list" className="nav-link" aria-current="page">
                        عرض الوظائف
                    </Link>
                </li>

                <li className={user ? user?.status!=='1' ? "nav-item" : "d-none" : "d-none"}>
                    <Link to="/job/add" className="nav-link" aria-current="page">
                        إضافة وظيفة
                    </Link>
                </li>

                <li className={user ? user?.status==='0' ? "nav-item" : "d-none" : "d-none"}>
                    <Link to="/register/admin" className="nav-link" aria-current="page">
                        إضافة حساب أدمن
                    </Link>
                </li>

                <li className={user ? user?.status==='0' ? "nav-item" : "d-none" : "d-none"}>
                    <Link to="/register/company-admin" className="nav-link" aria-current="page">
                        إضافة حساب أدمن شركة
                    </Link>
                </li>
            </ul>

            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <span className="nav-link dropdown-toggle" id="navbarDropdown" status="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={userLogo} alt="User" className='header__user-logo' />
                    </span>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li className={ user ? "text-center": "d-none" }>
                            {user?.full_name}
                        </li>
                        <hr className={ !user ? "d-none" : "" } />
                        <li>
                            <Link className={ user ? 'd-none' : 'dropdown-item'} to="/login" >
                                تسجيل الدخول
                            </Link>
                        </li>
                        <li>
                            <Link className={ user ? 'd-none' : 'dropdown-item' } to="/register">
                                إنشاء حساب جديد
                            </Link>
                        </li>
                        <li>
                            <button onClick={logoutUser} className={ !user ? 'd-none' : 'dropdown-item' } >
                                تسجيل الخروج
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>

            </div>
        </div>
    </nav>
  )
}

export default Header