"use client";

import { useState, useEffect } from "react";

const images = [
  "https://t4.ftcdn.net/jpg/04/17/20/77/240_F_417207718_klR6e5n3f805BpalE91IeJaoNDyu3tNd.jpg",
  "https://t3.ftcdn.net/jpg/02/94/30/58/240_F_294305868_QTSSjWvyGvUCPfuH7bPuq6tBqF08hT0x.jpg",
  "https://t3.ftcdn.net/jpg/01/74/30/92/240_F_174309231_MFxMqvpDBjBj0xaeRRX9PprID9b1H5tU.jpg",
  "https://t4.ftcdn.net/jpg/02/94/30/59/240_F_294305947_cDB8HuuRfZWjBwmZ6BdR2AuozgnKXc90.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-5  h-[300px] overflow-hidden">
      <img
        src={images[currentIndex]}
        className="w-500 h-full object-cover transition-opacity duration-1000 ease-in-out opacity-100"
        key={currentIndex} // Forces re-render when the index changes
      />
    </div>
  );
};

export default ImageSlider;
