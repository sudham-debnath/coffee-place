"use client"
import Lottie from 'lottie-react';
import loadingAni from '../../public/others/Loading.json';

const loading = () => {
    return (
        <section className='h-screen w-screen flex justify-center items-center'>
            <div className='w-60'>
                <Lottie animationData={loadingAni} loop={true}/>
            </div>
        </section>
    );
};

export default loading;