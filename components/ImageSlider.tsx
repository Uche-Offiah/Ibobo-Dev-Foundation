
// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import path from "path";

// interface ImageSliderProps {
//   images: string[];
//   folderPath: string;
// }

// export default function ImageSlider({ images, folderPath }: ImageSliderProps) {

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     if (images.length === 0) return;

//     const interval = setInterval(() => {
//       if (!isPaused) {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//       }
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval);
//   }, [images, isPaused]);

//   return (
//     <div
//       className="relative w-full h-[500px] overflow-hidden"
//       //className="col-span-3"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       {images.length > 0 && (
//         <Image
//           src={`${folderPath}/${images[currentIndex]}`} // ✅ Uses correctly formatted image paths
//           alt={`Slide ${currentIndex + 1}`}
//           fill
//           //className="w-full h-full object-cover transition-all duration-500"
//           // width={1200} // Adjust width based on layout
//           // height={800} // Maintain aspect ratio
//           quality={100} // Ensures no compression artifacts
//           className="w-full h-full object-cover transition-all duration-500 "
//         />
//       )}
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageSliderProps {
  images: string[];
  folderPath: string;
}

export default function ImageSlider({ images, folderPath }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [images, isPaused]);

  return (
    <div
      className="relative w-full h-[60vh] sm:h-[50vh] md:h-full overflow-hidden flex justify-center items-center bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {images.length > 0 && (
        <Image
          src={`${folderPath}/${images[currentIndex]}`}
          alt={`Slide ${currentIndex + 1}`}
          fill
          quality={100}
          className="w-full h-full sm:object-contain md:object-cover transition-all duration-500"
        />
      )}
    </div>
  );
}