import React from 'react';

const Option = ({ option, optionClick }) => {

    return (
        // <div onClick={() => optionClick(option)} className='border p-4 w-1/2 mx-auto mt-4 mb-4 cursor-pointer'>
        //     <div className='flex items-center'>
        //         <input type="radio" name="radio-4" className="radio radio-accent" checked />
        //         <p className='ml-4'>{option}</p>
        //         {/* <label className="label cursor-pointer">
        //             <input type="radio" name="radio-6" className="radio checked:bg-blue-500" checked />
        //             <span ><p className='ml-4'>{option}</p> </span>
        //         </label> */}
        //         {/* <div className="form-control">
        //             <label className="label cursor-pointer">
        //                 <span className="label-text"><p className='ml-4'>{option}</p></span>
        //                 <input type="radio" name="radio-6" className="radio checked:bg-blue-500" checked />
        //             </label>
        //         </div> */}
        //     </div>

        // </div>
        <div  >
            <div >
                <label onClick={() => optionClick(option)} className="label lg:flex justify-start items-center border p-4 w-1/2 mx-auto mt-4 mb-4 cursor-pointer hover:bg-slate-200">
                    <input type="radio" name="radio-6" className="radio checked:bg-blue-500" checked />
                    <span className=" label-text ml-4 ">{option}</span>
                </label>
            </div>
        </div>
    );
};

export default Option;