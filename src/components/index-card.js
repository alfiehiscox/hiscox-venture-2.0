import React from 'react';

const IndexCard = ({title, subTitle, image}) => {
    return (
        <div className="bg-gray-700 mx-16 p-3 w-full rounded-lg font-quicksand text-white group hover:scale-150">
            <div className="rounded-lg bg-gray-800 h-52 group-hover:bg-gray-800">
                {image}
            </div>
            <div className="flex justify-between">
                <div className="m-3">
                    <h2 className="text-2xl mb-2">{title}</h2>
                    <p className="text-sm opacity-70">{subTitle}</p>
                </div>
                <button className="p-5 m-3 rounded-lg bg-gray-800 hover:bg-gray-900">{'>'}</button>
            </div>
        </div>
    )
}

export default IndexCard;