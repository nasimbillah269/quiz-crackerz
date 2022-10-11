import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div className="card card-compact w-full bg-slate-300 shadow-xl mb-12 p-4">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="flex items-center justify-between mt-4">
                <h2 className="card-title">{name}</h2>
                <p className='text-2xl font-bold text-rose-600'> {total}</p>
                <div>
                    <Link to={`/quiz/${id}`}>
                        <button className="btn btn-primary">Start Practice < ArrowRightIcon className="h-4 w-4 text-white ml-2" /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;