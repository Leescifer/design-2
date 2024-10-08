import React from 'react';
import GrayImage from "../Assets/gray.png";

const Main = () => {
    return (
        <section className="text-center py-12">
            <h1 className="text-6xl font-bold mb-4 py-8">Tagline <br/> 2-liner</h1>
            <div className="w-full h-90 mx-auto mb-10 rounded-xl overflow-hidden">
                <img src={GrayImage} alt="gray-image" className="w-full h-full object-cover"/>
            </div>
            <h2 className="text-5xl font-light">Tagline <br/> 2-liner</h2>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </section>
    );
}

export default Main;
