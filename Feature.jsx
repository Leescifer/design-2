import React from 'react';
import GrayImage from "../Assets/gray.png";

const Feature = () =>{
    return(
        <section className="text-center py-8">
        <h3 className="text-4xl font-bold mb-2">Feature <br /> Tagline 2-liner</h3>

        <p className="text-2xl mb-4">
          Here is a description of this section. Keeping it concise and highlighting the key points.
        </p>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="w-full h-90 mx-auto mb-10 rounded-xl overflow-hidden">
        <img src={GrayImage} alt="gray-image" className="w-full h-full object-cover"/>
        </div>

      </section>
    );
}

export default Feature