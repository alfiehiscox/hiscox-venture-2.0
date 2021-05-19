import React from 'react';
import Index1 from '../assets/index-1.svg';
import Index2 from '../assets/index-2.svg';
import Index3 from '../assets/index-3.svg';
import Index4 from '../assets/index-4.svg';
import IndexCard from './index-card';
import Card1 from '../assets/card-1.svg';
import Card2 from '../assets/card-2.svg';


const IndexInfo = () => {
    return (
        <section className="mx-auto pb-28 max-w-screen-lg bg-gray-800 h-full rounded-3xl font-quicksand">
            <div className="w-full relative">
                <Index1 className="translate-y-2"/>
                <h2 className="text-white text-4xl text-center m-10 pt-0 p-10">It's what we do...</h2>
                <div className="grid grid-cols-3 p-4 h-full">
                    <IndexBubble title="Private Equity" content={content.privateEquity} image={<Index2/>}/>
                    <IndexBubble title="Consultancy" content={content.consultancy} image={<Index3/>}/>
                    <IndexBubble title="Results" content={content.results} image={<Index4/>}/>
                </div>
                <h2 className="text-white text-4xl text-center mt-20 p-10">Learn More</h2>
                <div className="w-full h-full p-10 flex justify-around">
                    <IndexCard image={<Card1/>} title="expertise." subTitle="Explore how we can use our knowledge to help you" />
                    <IndexCard image={<Card2/>} title="interests." subTitle="Explore our wide range of interests outside of our expertise"/>
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
            <p className="text-sm px-5 text-justify">{content}</p>
        </div>
    )
}

const content = {
    consultancy:`Our aim is to help our clients go from where they are, 
        to where they want to be, in the most efficient way possible. 
        Banking on our experience and expertise we promise to offer support
        every step of the way.`,
    privateEquity: `With deep-rooted connections to investors in the tech space
        we are uniquely positioned to allow our clients to realise their business' true 
        financial potential.`,
    results: `We're happy to say we have helped over 100 companies in realising
        their financial and business goals! With our custom support and clear strategy
        we have helped all types of companies grow.`
}

export default IndexInfo;