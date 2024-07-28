import Logo_unipool from '../assets/Logo_unipool.png'
import '../styles/Navbar.css'

export default function Navbar(){

    return (
        <nav className='w-full h-[10%] px-20 border-b flex items-center justify-between'>
            <div>
                <img className='h-16 ' src={Logo_unipool} />
            </div>
            <div className='h-full'>
                <ul className='h-full flex gap-6 font-medium text-lg'>
                    <li className='relative h-full flex items-center'><a href="#">Home</a></li>
                    <li className='relative h-full flex items-center'><a href="#">Careers</a></li>
                    <li className='relative h-full flex items-center'><a href="#">Contact us</a></li>
                    <li className='relative h-full flex items-center'><a href="#">Help</a></li>
                </ul>
            </div>
            <div className='flex gap-5 text-lg'>
                <button className='font-medium'>Log in</button>
                <button className='p-2 px-4 flex justify-center items-center bg-yellow-400 rounded-3xl font-medium'>Sign up</button>
            </div>
        </nav>
    )
}