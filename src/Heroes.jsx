import React from 'react';

const Heroes = ({scrollToProduct}) => {
    return (
        <>
            <img src="/fix-heroes.png" alt=""  className='max-w-[1320px] mx-[100px] mt-[75px] rounded-lg'/>
            <div className='text-white relative text-center top-[-340px]'>
                <h1 className='text-5xl font-bold'>Design Your Dream <br /> Home with Us</h1>
                <p className='descriptiontext-xl mt-5'>Explore innovative designs and sustainable <br /> furniture options for the modern home.</p>
                <button onClick={scrollToProduct} id='explore' className='explore border border-white py-1 px-3 mt-4 rounded-md hover:bg-white hover:text-black'>Explore Now</button>
            </div>
        </>
    );
}

export default Heroes