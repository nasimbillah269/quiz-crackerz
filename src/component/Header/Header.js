import React from 'react';
// import bgImg from '../../bg/image .jpg'
import img from '../../image.jpg'
const Header = () => {
    return (
        // <div style="background-image: url('image (2).jpg');">
        //     {/* <img src="image (2).jpg" className='w-full h-96 opacity-80' alt="" /> */}
        // </div>
        <div className=' h-96 ' style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover', }}>
            <div>
                <h3 className='text-4xl font-bold text-purple-600 pt-28'>Welcom Special Coding Quiz Practice  Today </h3>
            </div>
            <button className="btn btn-outline btn-success mt-12 text-2xl font-bold text-white px-20">Lats Go</button>
        </div>
    );
};

export default Header;