import { useState } from 'react';
import resmicLogo from '../assets/images/resmic_logo.png';
function Login() {
    const [nextPage, setNextPage] = useState(false);

    function handlePage() {
        setNextPage(!nextPage);
    }

    return(
        <>
            <div className="w-100 min-h-screen bg-secondary flex justify-center items-center">
                <div className="md:w-[40%] w-[90%] flex flex-col justify-center text-center items-center">
                    <div className='flex justify-center items-center gap-4 my-4'>
                        <img src={resmicLogo} alt="Resmic-Logo" width="60px"/>
                        <h1 className='text-4xl font-bold text-primary'>Resmic Pro</h1>
                    </div>

                    {
                        nextPage == false ? 
                        (
                        <div className="w-[90%] bg-white my-3 p-5 rounded-xl flex flex-col justify-center items-center">
                            <h3 className='text-2xl font-bold my-3'>Sign in to your account</h3>
                            <p className='text-gray-500 text-md my-3 tracking-wide'>Resmic is available on Polygon, Solana, Optimism, Base, <br></br>Arbitrum, Tron, BNB and Ethereum</p>
                            <button onClick={handlePage} className='w-[90%] bg-primary py-2 rounded-md text-white text-center cursor-pointer flex items-center justify-center gap-3 my-3 text-md border-primary'><i className="bi bi-envelope"></i> Sign in with your Email</button>
                        </div>) : 
                            <div className="w-[90%] bg-white my-3 p-5 rounded-xl flex flex-col justify-center items-center">
                                <div className='min-w-[100%] text-start text-2xl'><i className="bi bi-arrow-left cursor-pointer" onClick={handlePage}></i></div>
                                <h3 className='px-5 py-4 rounded-full bg-secondary text-gray-500 text-3xl my-3'><i className="bi bi-envelope"></i></h3>
                                <h3 className='text-2xl font-bold my-3'>Sign in with your Email</h3>
                                <div className='relative w-[100%]'>
                                    <input type="email" className="w-[90%] px-10 py-2 my-3 outline-none focus:border-primary border border-gray-300 rounded-md" placeholder='Enter your email' />
                                    <div className='absolute top-5 left-10'><i className="bi bi-envelope"></i></div>
                                </div>
                                <button className='w-[90%] bg-primary py-2 rounded-md text-white text-center cursor-pointer flex items-center justify-center gap-3 my-3 text-md border-primary'>Continue <i className="bi bi-arrow-right"></i></button>
                            </div>
                    }



                    <p className='text-sm flex flex-wrap justify-center gap-1 items-center text-gray-500 my-3'> <i className="bi bi-c-circle"></i> Resmic 2025 <i className="bi bi-dot"></i> Contact <i className="bi bi-dot"></i> Privacy Policy <i className="bi bi-dot"></i> Terms of Conditions</p>
                </div>
            </div>
        </>
    )
}

export default Login;