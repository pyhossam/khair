// Home/AnnouncementSlider.js
import React from 'react';
import Slider from 'react-slick';

const AnnouncementSlider = () => {
  // Define your slider settings here
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Loop the slider
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Auto-play the slider
    autoplaySpeed: 3000, // Auto-play speed in milliseconds (3 seconds)
  };

  return (
    <div>
      <h2>Announcements</h2>
      <Slider {...settings}>
        <div>
          <h3>Announcement 1</h3>
          <p>Content for announcement 1.</p>
        </div>
        {/* Add more announcement slides here */}
      </Slider>
    </div>
  );
};

export default AnnouncementSlider;
