import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
const Topic = ({ topic }) => {
    const { name, logo, total } = topic;

    return (
        <div className="card card-compact w-72 bg-slate-100 shadow-xl p-4">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="flex items-center justify-between mt-4">
                <h2 className="card-title">{name}</h2>
                <p>{total}</p>
                <div>
                    <button className="btn btn-primary">Buy Now < ArrowRightIcon className="h-6 w-6 text-white ml-2" /></button>
                </div>
            </div>
        </div>
    );
};

export default Topic;