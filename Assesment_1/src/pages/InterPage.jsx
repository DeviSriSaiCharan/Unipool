import { useNavigate } from 'react-router-dom';
import TeamImg from '../assets/TeamImg.png';


export default function InterPage(){

    const navigate = useNavigate();

    return (
        <div className="w-full h-[90%] px-20 py-4 relative overflow-x-hidden">
            
            {/* <img src={BBlob} className='absolute left-96 -z-10 -bottom-24'/> */}
            {/* <div className='absolute -z-10 bg-yellow-100 w-[50%] rounded-full top-20 right-28 rotate-[50deg] h-[60%]'></div> */}
            <div className="h-full w-full flex">
                <div className="h-full relative w-1/2 flex-col justify-center">
                    <div className="absolute top-[30%]">
                        <h1 className="text-6xl font-semibold">Be a part of our team</h1>
                        <p className="text-2xl w-11/12 mt-4 text-gray-700 font-medium">We are so glad you want to join us in exploring a world of endless opportunities at Rapido. Let’s find a spot for you.</p>
                        <div className='flex gap-4 mt-4'>
                            <button className='px-6 text-lg py-2 font-semibold bg-yellow-400 rounded-3xl hover:bg-opacity-80'>Apply for Intership</button>
                            <button className='px-6 py-2 text-lg font-semibold' onClick={() => navigate('certificate')}>
                            Get you certificate
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <img src={TeamImg} className='w-11/12' />
                </div>
            </div>

            <div className='h-full flex justify-center items-center'>
                <div>
                    <h1 className='text-4xl font-semibold'>What our employees say</h1>
                </div>
            </div>
        </div>
    )
}
