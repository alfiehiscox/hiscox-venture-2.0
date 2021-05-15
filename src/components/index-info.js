import React from 'react';
import Index1 from '../assets/index-1.svg';
import Index2 from '../assets/index-2.svg';

const IndexInfo = () => {
    return (
        <section className="mx-auto max-w-screen-lg bg-gray-800 h-full rounded-3xl font-quicksand">
            <div className="w-full relative">
                <Index1 className="translate-y-2"/>
                <h2 className="text-white text-4xl text-center pt-0 p-10">It's what we do...</h2>
                <div className="grid grid-cols-3 h-full">
                    <IndexBubble title="Stuff1" content="This is stuff about stuff" image={<Index2/>}/>
                    <IndexBubble title="Stuff2" content="This is stuff about stuff" image={<Index2/>}/>
                    <IndexBubble title="Stuff3" content="This is stuff about stuff" image={<Index2/>}/>
                </div>
            </div>
        </section>
    );
}

const IndexBubble = ({image, title, content}) => {
    return (
        <div className="w-full text-center text-white">
            <h3 className="text-xl">{title}</h3>
            <div className="flex justify-center p-5">{image}</div>
            <p className="text-sm">{content}</p>
        </div>
    )
}

export default IndexInfo;