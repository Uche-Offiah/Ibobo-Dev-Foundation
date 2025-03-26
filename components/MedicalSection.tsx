import MedicalText from "./MedicalText";
import ImageSlider from "./ImageSlider";

interface MedicalSectionProps {
  images: string[];
}

export default function MedicalSection({ images }: MedicalSectionProps) {

  return (

    <section className="grid grid-cols-5 p-10">
    {/* Left Side: 3/5 width for text */}
    <div className="col-span-3 bg-gray-800 p-6 rounded-lg shadow-lg">
    <MedicalText />
    </div>

    {/* Right Side: 2/5 width for image slider */}
    <div className="col-span-2 bg-gray-800 rounded-lg shadow-lg relative">
    <ImageSlider images={images} folderPath="/Images/Medical_Images" />
    </div>
    </section>
  );
}