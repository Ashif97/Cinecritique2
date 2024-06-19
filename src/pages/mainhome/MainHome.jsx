import TopReviewsSection from '../../components/Topreviews';
import React from 'react';
import Navbar from '../../components/Navbar';
import img1 from '../../assets/aavehsam.jpg';
import img2 from '../../assets/furiosa.jpg';
import img3 from '../../assets/immaculate.jpg';
import img4 from '../../assets/lapataladies.jpg';
import img5 from '../../assets/nadasam.jpg';
import img6 from '../../assets/turbo.jpg';


function MainHome() {
    return (
      <div className="flex flex-col h-screen">
        {/* Navbar */}
        <Navbar />
  
        {/* Main Content */}
        <div className="flex flex-1">
          {/* Left Column: Carousel */}
          <div className="w-3/4 p-4">
            <div className="carousel w-full relative rounded-lg overflow-hidden">
              <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" alt="Slide 1" />
                <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide6" className="btn btn-circle">❮</a> 
                  <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" alt="Slide 2" />
                <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">❮</a> 
                  <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" alt="Slide 3" />
                <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">❮</a> 
                  <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" alt="Slide 4" />
                <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">❮</a> 
                  <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
              </div>
              <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full" alt="Slide 5" />
                <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">❮</a> 
                  <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
              </div>
              <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full" alt="Slide 6" />
                <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide5" className="btn btn-circle">❮</a> 
                  <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
              </div>
            </div>
          </div>
  
          {/* Right Column: Top Reviews Section */}
          <div className="w-1/4 p-4 flex justify-end">
            <TopReviewsSection />
          </div>
        </div>
      </div>
     
    );
    <div><MainMovies/></div>
  }
  
  export default MainHome;