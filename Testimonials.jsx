import GrayImage from "../Assets/gray.png";

const Testimonials = () => {
  return (
    <section className="text-center py-8">
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <p className="text-6xl font-semibold mb-4">
        Testimonials in one to two lines: Cite only the relevant points, get rid of the fluff.
      </p>
      <div className="flex items-center justify-center gap-4 py-4">
        <img
          className="w-10 h-10 rounded-full"
          src="https://via.placeholder.com/40" 
          alt="Profile picture of Jese Leos"
        />
        <div className="font-medium dark:text-white">
          <div>Jese Leos</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Joined in August 2014
          </div>
        </div>
      </div>

<div className="relative w-full h-90 mx-auto mb-8 py-12 rounded-xl overflow-hidden">
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
    <h3 className="text-xl font-bold mb-4 text-white dark:text-black">Call-to-action tagline</h3>
    <button className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded">
      Start Free
    </button>
  </div>
  
  <img src={GrayImage} alt="gray-image" className="w-full h-90 object-cover"/>
</div>


    </section>
  );
};

export default Testimonials;
