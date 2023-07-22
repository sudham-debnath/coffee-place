import Brand from '../components/Brand/Brand';
import CoffeeTab from '../components/CoffeeTab/CoffeeTab';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';

const Menu = () => {
    return (
        <>
            <Header title={'Coffee Menu'}></Header>
            <main className='bg-color-second'>
                <section className='px-5 py-16 md:px-32 md:py-28'>
                    <div className='text-center text-white mb-16' data-aos="zoom-in">
                        <p className='text-color'>CHOOSE BEST OF</p>
                        <h2 className='text-4xl my-5 font-semibold'>Coffee Place Menu</h2>
                    </div>
                    <div>
                        <CoffeeTab></CoffeeTab>
                    </div>
                </section>

                <section className='px-5 md:px-32 bg-cover bg-center bg-fixed' style={{ backgroundImage: 'url(/others/contactBG.jpg)' }}>
                    <Form></Form>
                </section>

                <>
                    <Brand></Brand>
                </>
            </main>
        </>
    );
};

export default Menu;