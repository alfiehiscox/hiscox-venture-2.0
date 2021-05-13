import React from 'react';
import Index1 from '../assets/index-1.svg';

const IndexInfo = () => {
    return (
        <section className="mx-auto max-w-screen-lg bg-gray-800 h-screen rounded-2xl font-quicksand">
            <div className="w-full relative">
                <Index1 />
                <h2 className="text-white text-3xl text-center">It's what we do...</h2>
            </div>
        </section>
    );
}

export default IndexInfo;