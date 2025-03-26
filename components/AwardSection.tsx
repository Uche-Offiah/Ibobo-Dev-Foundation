
import AwardText from "./AwardText";
import ImageSlider from "./ImageSlider";

interface AwardSectionProps {
  images: string[];
}

export default function AwardSection({ images }: AwardSectionProps) {
  return (

    <section className="grid grid-cols-5 p-10">
      {/* Left Side: 3/5 width for text */}
      <div className="col-span-3 bg-gray-800 p-6 rounded-lg shadow-lg">
        <AwardText />
      </div>

      {/* Right Side: 2/5 width for image slider */}
      <div className="col-span-2 bg-gray-800 rounded-lg shadow-lg relative">
        <ImageSlider images={images} folderPath="/Images/Award_Images" />
      </div>
    </section>
  );
}