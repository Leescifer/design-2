import React from 'react'
import CardComponent from './components/CardComponent.jsx';
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import Feature from './components/Feature.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-">
        <div className="container-fluid mx-auto p-4">
       <Navbar/>
       </div>
       <div className="container mx-auto">
       <Main/>
       <Feature/>
      <CardComponent/>
       <Testimonials/>
       <Footer/>
    </div>
  </div>
  );
};

export default App;
