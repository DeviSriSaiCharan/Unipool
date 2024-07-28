import { useNavigate } from 'react-router-dom';
import TeamImg from '../assets/TeamImg.png';
import EmployeeCard from '../components/EmployeeCard';
import FooterPage from './FooterPage';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/gsap-core';

export default function InterPage(){

    const navigate = useNavigate();

    useGSAP(() =>{
        gsap.from('.left', {
            x: -500,
            duration: 1.5,
            ease: 'power2.out',
            delay : 1,
            opacity : 0,
        })
        gsap.from('.right', {
            x: 500,
            duration: 1.5,
            ease: 'power2.out',
            delay : 1,
            opacity : 0,
        })

        const tl = gsap.timeline({
            scrollTrigger : {
                trigger : '.employee',
                scroll : 'body',
                start : "top 40%",
                markers : true,
            }
        })

        // tl.from('.employee h1',{
        //     y : -500,
        //     duration : 1.5,
        //     ease : 'power2.out',
        //     delay : 1,
        //     opacity : 0,
        // })
    })

    return (
        <div className="w-full h-[90%] pt-4 relative overflow-x-hidden">
            
            {/* <img src={BBlob} className='absolute left-96 -z-10 -bottom-24'/> */}
            {/* <div className='absolute -z-10 bg-yellow-100 w-[50%] rounded-full top-20 right-28 rotate-[50deg] h-[60%]'></div> */}
            <div className="h-[90%] px-20 w-full flex">
                <div className="h-full relative w-1/2 flex-col justify-center">
                    <div className="left absolute top-[30%]">
                        <h1 className="text-6xl font-semibold">Be a part of our team</h1>
                        <p className="text-2xl w-11/12 mt-4 text-gray-700 font-medium">We are so glad you want to join us in exploring a world of endless opportunities at Rapido. Let’s find a spot for you.</p>
                        <div className='flex gap-4 mt-4'>
                            <button className='px-6 text-lg py-2 font-semibold bg-yellow-400 rounded-3xl hover:bg-opacity-80'>Apply for Intership</button>
                            <button className='px-6 py-2 text-lg font-semibold border rounded-full border-black' onClick={() => navigate('certificate')}>
                            Get you certificate
                            </button>
                        </div>
                    </div>
                </div>
                <div className="right w-1/2 flex items-center justify-center">
                    <img src={TeamImg} className='w-11/12' />
                </div>
            </div>

            <div className='employee py-6 px-20 m-auto w-11/12'>
                <div className='m-auto w-11/12'>
                    <h1 className='p-4 underline underline-offset-8 decoration-yellow-400 text-4xl font-semibold text-center'>What our interns say</h1>
                    <div className='flex gap-10 w-11/12 m-auto mt-10'>
                        <EmployeeCard />
                        <EmployeeCard />
                    </div>
                </div>
            </div>

            <div className='mt-20 text-white'>
                <FooterPage />
            </div>
        </div>
    )
}
