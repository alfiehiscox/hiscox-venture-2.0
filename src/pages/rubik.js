import React from 'react';
import Rubiks from '../assets/rubiks.svg';
import RubiksPlatform from '../assets/RubiksPlatform.svg';

const RubikPage = () => {
    return (
        <div className="w-full h-screen bg-gray-800 font-quicksand">
            <h1 className="text-center text-white text-4xl p-24">Rubiks Page (Three.js)</h1>
            <div className="flex justify-center">
                <RubiksCube />
            </div>
        </div>
    );
}

const RubiksCube = () => {
    return (
        <div className="group mt-20 w-full relative"> 
            <div className="flex justify-center w-full">
                <Rubiks className="transform group-hover:-translate-y-40 transition duration-500" />
                <p className="text-white opacity-0 group-hover:opacity-100 transition duration-500 absolute">We help people solve problems</p>
            </div>
            <div className="flex justify-center w-full">
                <RubiksPlatform className="transform group-hover:scale-75 transition duration-500" />
            </div>
        </div>
    )
}

export default RubikPage;