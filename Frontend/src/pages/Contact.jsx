import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

<div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
  <img src={assets.contact_img} alt="CONTACT IMAGE" className='w-full md:max-w-[480px]' />
  <div className='flex flex-col justify-center items-start gap-6'>
    <p className='font-semibold text-xl text-gray-600'>Our Store:</p>
    <p className='text-gray-500'>282-B Vijaynagar Behind C-21 Mall <br /> Indore, Madhya Pradesh, India 452010</p>
    <p className='text-gray-500'>Tel: +91 8269101063 <br /> Email: contact@dealocity.com </p>

  </div>

</div>

<Newsletter/>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'CONTACT'} text2={'DEVELOPER'} />
      </div>

   <div className='my-10 flex flex-col md:flex-row gap-16 items-center'>
  <img src={assets.profile_img} alt="Developer" className='w-full md:max-w-[300px] rounded-t-full shadow-xl hover:shadow-green-700 hover:scale-110 transition ease-in-out' />
  
  <div className='flex flex-col gap-4 text-gray-700 md:w-2/3 text-[17px] md:text-lg leading-relaxed'>
    <h2 className='text-2xl font-bold text-gray-800'>Shyam Patidar</h2>
    
<p>
  Email: 
  <a 
    href="mailto:shyampatidar672@gmail.com" 
    className="text-blue-600 hover:underline"
  >
    shyampatidar672@gmail.com
  </a>
</p>

    <p>
      LinkedIn: <a href="https://www.linkedin.com/in/shyam-patidar-736b77257/" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>
        Shyam Patidar LinkedIn
      </a>
    </p>
    
    <p>
      GitHub: <a href="https://github.com/ShyamPatidar-17" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>
        Shyam Patidar GitHub
      </a>
    </p>

    <p>
  Portfolio: 
  <a 
    href="https://shyampatidar-portfolio.vercel.app/"  target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>
    Shyam Patidar Portfolio
  </a>
</p>


    <p className='pt-2 text-base md:text-lg'>
      I'm a passionate full-stack developer with a keen interest in modern web technologies and user-centric design. Deal-O-City is a fully functional MERN stack e-commerce web application built to provide users with a seamless online shopping experience. From browsing and filtering products to placing orders and managing the cart, every feature is developed using powerful modern web technologies.
    </p>
  </div>
</div>

    </div>
  )
}

export default Contact
