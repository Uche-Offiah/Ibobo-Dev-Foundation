// import EntrepreneurshipText from "./EntrepreneurshipText";
// import ImageSlider from "./ImageSlider";

// interface EntrepreneurshipProps {
//   images: string[];
// }

// export default function EntrepreneurshipSection({ images }: EntrepreneurshipProps) {
//   return (

//     <section className="grid grid-cols-5 p-10">
//       {/* Left Side: 3/5 width for text */}
//       <div className="col-span-3 bg-gray-800 p-6 rounded-lg shadow-lg">
//         <EntrepreneurshipText />
//       </div>

//       {/* Right Side: 2/5 width for image slider */}
//       <div className="col-span-2 bg-gray-800 rounded-lg shadow-lg relative">
//         <ImageSlider images={images} folderPath="/Images/Entrepreneurship_Images" />
//       </div>
//     </section>
//   );
// }


// import EntrepreneurshipText from "./EntrepreneurshipText";
// import ImageSlider from "./ImageSlider";

// interface EntrepreneurshipProps {
//   images: string[];
// }

// export default function EntrepreneurshipSection({ images }: EntrepreneurshipProps) {
//   return (
//     <section className="p-0 md:p-6">
//       <div className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg shadow-lg">
        
//         {/* Image - Fullscreen on Mobile, 2/5 on Desktop */}
//         <div className="w-full h-screen sm:w-2/5 sm:h-auto">
//           <ImageSlider images={images} folderPath="/Images/Entrepreneurship_Images" />
//         </div>

//         {/* Text - Below on Mobile, Side on Desktop */}
//         <div className="w-full md:w-3/5 p-6">
//           <EntrepreneurshipText />
//         </div>

//       </div>
//     </section>
//   );
// }

import EntrepreneurshipText from "./EntrepreneurshipText";
import ImageSlider from "./ImageSlider";

interface EntrepreneurshipProps {
  images: string[];
}

export default function EntrepreneurshipSection({ images }: EntrepreneurshipProps) {
  return (
    <section className="w-full p-4 md:p-10">
      <div className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        
        {/* Image Section - Takes full width on mobile, 2/5 on desktop */}
        <div className="w-full md:w-2/5 h-auto md:h-[500px] overflow-hidden">
          <ImageSlider images={images} folderPath="/Images/Entrepreneurship_Images" />
        </div>

        {/* Text Section - Below image on mobile, side on desktop */}
        <div className="w-full sm:w-3/5 p-6">
          <EntrepreneurshipText />
        </div>

      </div>
    </section>
  );
}