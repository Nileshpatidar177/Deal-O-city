import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} alt="LOGO" className='mb-5 w-32 h-13' />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Deal-O-City is your go-to fashion hub for trendsetting styles at unbeatable prices. From chic outfits to must-have accessories, we bring fresh looks for every vibe. Shop smart, dress bold — fashion that speaks, deals that excite, only at Deal-O-City.
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-3 mt-10'>
                        COMPANY
                    </p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-3 mt-10'>
                        GET IN TOUCH
                    </p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+91 8959523165</li>
                        <li>contact@dealocity.com</li>
                    </ul>

                </div>
            </div>

            <div >
                <hr />
                <p className='py-5 text-sm text-center'>
                    copyright 2025@ Deal-O-City.com - All rights Reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer
