

import EducationText from "./EducationText";
import ImageSlider from "./ImageSlider";

interface ProgramSectionProps {
  images: string[];
}

export default function EducationSection({ images }: ProgramSectionProps) {
  return (

    // <section className="grid grid-cols-5 p-10">
    //   {/* Left Side: 3/5 width for text */}
    //   <div className="col-span-3 bg-gray-800 p-6 rounded-lg shadow-lg">
    //     <EducationText />
    //   </div>

    //   {/* Right Side: 2/5 width for image slider */}
    //   <div className="col-span-2 bg-gray-800 rounded-lg shadow-lg relative">
    //     <ImageSlider images={images} folderPath="/Images/Education_Images" />
    //   </div>
    // </section>

    <section className="w-full p-4 md:p-10">
      <div className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        
        {/* Image Section - Takes full width on mobile, 2/5 on desktop */}
        <div className="w-full md:w-2/5 h-auto md:h-[500px] overflow-hidden">
          <ImageSlider images={images} folderPath="/Images/Education_Images" />
        </div>

        {/* Text Section - Below image on mobile, side on desktop */}
        <div className="w-full sm:w-3/5 p-6">
          <EducationText />
        </div>

      </div>
    </section>
  );
}