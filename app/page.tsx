// //"use client";
// import Image from "next/image";
// import Link from "next/link";
// //import { useState } from "react";
// import EducationSection from "../components/EducationSection";
// import MedicalSection from "../components/MedicalSection";
// import AwardSection from "../components/AwardSection"; 
// import WalkForLifeSection from "../components/WalkForLifeSection";
// import EntrepreneurshipSection from "../components/EntrepreneurshipSection";
// import { getLocalImages } from "../lib/getLocalImages"; 



// export default function HomeServer() {

//  const educationImages =  getLocalImages("/public/Images/Education_Images");
//  const medicalImages =  getLocalImages("/public/Images/Medical_Images");
//  const awardImages =  getLocalImages("/public/Images/Award_Images");
//  const walkForLifeImages =  getLocalImages("/public/Images/WalkForLife_Images");
//  const entrepreneurshipImages =  getLocalImages("/public/Images/Entrepreneurship_Images");
//  //const medicalImages =  getMedicalImages();
  

//   return (
//     <div className="min-h-screen bg-gray-900 text-white font-sans">

//       {/* Hero Section with Background Image */}
//       <section className="relative flex flex-col items-center justify-center text-center h-screen overflow-hidden">
//         <div className="absolute inset-0">
//           <Image 
//             src="/Ibobo_background.png"
//             layout="fill"
//             objectFit="cover"
//             alt="Hero Background"
//           />
//         </div>
//       </section>

//       {/* Programs Section */}
//       <EducationSection images={educationImages} />
//       <MedicalSection images={medicalImages} />
//       <EntrepreneurshipSection images={entrepreneurshipImages} />
//       <AwardSection images={awardImages} />
//       <WalkForLifeSection images={walkForLifeImages}/>

//       {/* Footer */}
//       <footer className="p-6 text-center bg-black">
//         <p>&copy; {new Date().getFullYear()} Ibobo Development Foundation. All rights reserved.</p>
//         <div className="mt-4 flex justify-center space-x-4">
//           <Link href="#"><span className="text-blue-400">Facebook</span></Link>
//           <Link href="#"><span className="text-blue-500">Twitter</span></Link>
//           <Link href="#"><span className="text-pink-500">Instagram</span></Link>
//         </div>
//       </footer>
//     </div>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import EducationSection from "../components/EducationSection";
import MedicalSection from "../components/MedicalSection";
import AwardSection from "../components/AwardSection"; 
import WalkForLifeSection from "../components/WalkForLifeSection";
import EntrepreneurshipSection from "../components/EntrepreneurshipSection";
import { getLocalImages } from "../lib/getLocalImages"; 

export default function HomeServer() {
  const educationImages = getLocalImages("/public/Images/Education_Images");
  const medicalImages = getLocalImages("/public/Images/Medical_Images");
  const awardImages = getLocalImages("/public/Images/Award_Images");
  const walkForLifeImages = getLocalImages("/public/Images/WalkForLife_Images");
  const entrepreneurshipImages = getLocalImages("/public/Images/Entrepreneurship_Images");

  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* Hero Section with Background Image */}
      <section className="relative flex flex-col items-center justify-center text-center h-[60vh] sm:h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/Ibobo_background.png"
            layout="fill"
            objectFit="cover"
            alt="Hero Background"
          />
        </div>
      </section>

      {/* Programs Sections */}
      <EducationSection images={educationImages} />
      <MedicalSection images={medicalImages} />
      <EntrepreneurshipSection images={entrepreneurshipImages} />
      <AwardSection images={awardImages} />
      <WalkForLifeSection images={walkForLifeImages} />

      {/* Footer */}
      <footer className="p-6 text-center bg-black">
        <p>&copy; {new Date().getFullYear()} Ibobo Development Foundation. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <Link href="#"><span className="text-blue-400">Facebook</span></Link>
          <Link href="#"><span className="text-blue-500">Twitter</span></Link>
          <Link href="#"><span className="text-pink-500">Instagram</span></Link>
        </div>
      </footer>
    </div>
  );
}