import Image from 'next/image';

const Brand = () => {
    return (
        <section className='py-16 px-5 md:px-32 md:py-28 bg-color-second flex justify-between flex-wrap items-center gap-8'>
            <div className='w-32 mx-auto' data-aos="zoom-in-up" data-aos-delay="100">
                <Image src='/brand/brand1.png' alt='Brand image' width={180} height={180} />
            </div>
            <div className='w-32 mx-auto' data-aos="zoom-in-up" data-aos-delay="200">
                <Image src='/brand/brand2.png' alt='Brand image' width={180} height={180} />
            </div>
            <div className='w-32 mx-auto' data-aos="zoom-in-up" data-aos-delay="300">
                <Image src='/brand/brand3.png' alt='Brand image' width={180} height={180} />
            </div>
            <div className='w-32 mx-auto' data-aos="zoom-in-up" data-aos-delay="400">
                <Image src='/brand/brand4.png' alt='Brand image' width={180} height={180} />
            </div>
            <div className='w-32 mx-auto' data-aos="zoom-in-up" data-aos-delay="500">
                <Image src='/brand/brand5.png' alt='Brand image' width={180} height={180} />
            </div>
            <div className='w-32 mx-auto' data-aos="zoom-in-up" data-aos-delay="600">
                <Image src='/brand/brand6.png' alt='Brand image' width={180} height={180} />
            </div>
        </section>
    );
};

export default Brand;