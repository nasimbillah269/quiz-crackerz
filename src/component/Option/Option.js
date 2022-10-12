import React, { useState } from 'react';
const Option = ({ option, optionClick, }) => {

    const [chek, setChek] = useState(false)

    const handlerClick = option => {
        setChek(true)
        optionClick(option)
    }

    return (
        <div >
            <label className="label flex justify-start  items-center border p-4 w-1/2 mx-auto mt-4 mb-4 cursor-pointer hover:bg-slate-200">
                <button onClick={() => handlerClick(option)} className="flex justify-start  items-center ">
                    <input type="radio" name="radio-6" className="radio checked:bg-blue-500" checked={chek} />
                    <span className="label-text ml-4 ">{option}</span>
                </button>
            </label>
        </div>

    );
};

export default Option;