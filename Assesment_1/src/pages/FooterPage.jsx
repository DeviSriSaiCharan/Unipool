import google_play from '../assets/google_play.png'
import { RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiTwitterFill } from '@remixicon/react'

export default function FooterPage(){

    return(
        <footer className='bg-black'>
            <div className="flex justify-between bg-black px-20 py-10">
                <div className='flex gap-10'>
                    <div className='flex flex-col items-center'>
                        <h3 className="font-semibold text-xl mb-5">Customer app</h3>
                        <img src={google_play} className='w-40'/>
                        <img src={google_play} className='w-40' />
                    </div>
                    <div className='flex flex-col items-center'>
                        <h3 className='font-semibold text-xl mb-5'>Captain app</h3>
                        <img src={google_play} className='w-40' />
                    </div>
                </div>
                <div>
                    <ul className='flex flex-col gap-3'>
                        <li className='text-xl font-semibold'>Home</li>
                        <li className='text-xl font-semibold'>About us</li>
                        <li className='text-xl font-semibold'>Career</li>
                        <li className='text-xl font-semibold'>Contact us</li>
                    </ul>
                </div>
                <div className='flex flex-col items-center'>
                    <h3 className='font-semibold text-xl mb-5'>Follows Us</h3>
                    <div className='flex gap-2'>
                        <RiFacebookFill color='white' size={28}/>
                        <RiInstagramLine color='white' size={28}/>
                        <RiLinkedinFill color='white' size={28}/>
                        <RiTwitterFill color='white' size={28}/>
                    </div>
                </div>
            </div>
            <div className='px-20 py-7 border-t border-gray-600'>
                <p className='text-center text-gray-400 text-[1rem] font-medium'>© 2024 DeviSriSaiCharan. All rights reserved.</p>
            </div>
        </footer>
    )
}