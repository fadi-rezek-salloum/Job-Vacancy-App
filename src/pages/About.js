import React from 'react'

import { Link } from 'react-router-dom'

import aboutImage from '../images/about.jpg'

const About = () => {
  return (
    <section className='container my-5'>
        <div className="row">
            <div className="col-6">
                <img src={aboutImage} alt="About" className="about__img" />
            </div>
            <div className="col-6 pe-5">
                <h1>
                    حول الموقع
                </h1>
                <br />
                <br />
                <h5>
                    موقع شغلني هو أكبر موقع في سوريا للربط بين اﻷفراد و سوق العمل, هنا يتلقى الباحثون عن فرص العمل والشركات التي ترغب بتوظيف اﻷشخاص المناسبين.
                </h5>
                <br />
                <br />
                <hr />
                <h5 className='text-center'>
                    يمكنك التواصل مع إدارة الموقع <Link to='/contact' className='btn btn-primary me-3'>من هنا</Link>
                </h5>
                <br />
                <h5 className='text-center text-muted'>
                    - أو -
                </h5>
                <br />
                <h5 className='text-center'>
                    يمكنك الاتصال بنا عن طريق الرقم التالي: 0987654321
                </h5>
            </div>
        </div>
    </section>
  )
}

export default About