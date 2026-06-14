import { useState } from "react";

export default function ImageCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://picsum.photos/id/1/600/400",
    "https://picsum.photos/id/2/600/400",
    "https://picsum.photos/id/3/600/400",
  ];

  const next = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % images.length
    );
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-96 h-64">
      <div className=" w-full h-full overflow-hidden">
        <div
          className="flex  h-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="w-full h-full object-cover shrink-0"
            />
          ))}
        </div>
      </div>

      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
}