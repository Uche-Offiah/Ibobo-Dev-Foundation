import SectionText from "./MedicalText";
import ImageSlider from "./MedicalSlider";

export default function MedicalSection({ images }: { images: string[] }) {

  return (
    // <section className="p-10 bg-gray-900 rounded-2xl shadow-lg">
    //   <div className="grid grid-cols-5 gap-8 mt-8">
    //     <SectionText />
    //     <ImageSlider images={images} />
    //   </div>
    // </section>

    <section className="grid grid-cols-5 p-10">
    {/* Left Side: 3/5 width for text */}
    <div className="col-span-3 bg-gray-800 p-6 rounded-lg shadow-lg">
    <SectionText />
    </div>

    {/* Right Side: 2/5 width for image slider */}
    <div className="col-span-2 bg-gray-800 rounded-lg shadow-lg relative">
    <ImageSlider images={images} />
    </div>
    </section>
  );
}