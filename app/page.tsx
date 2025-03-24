//"use client";
import Image from "next/image";
import Link from "next/link";
//import { useState } from "react";
import fs from "fs";
import path from "path";
import ProgramsSection from "../components/ProgramSection";
import MedicalSection from "../components/MedicalSection";
//import { getLocalImages } from "../lib/getLocalImages"; 



export default function HomeServer() {

 const educationImages =  getLocalImages();
 const medicalImages =  getMedicalImages();

    // State for "About" dropdown visibility
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // const scrollToSection = (id: string) => {
    //   document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    // };
  

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
       {/* Navbar Section */}
       {/* <nav className="absolute top-0 left-0 w-full bg-opacity-50 bg-gray-900 text-white py-4 z-50">
        <div className="flex justify-center space-x-6">

          <div className="relative">
            <button
              className="hover:text-gray-300"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              About ▼
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-gray-800 text-white shadow-lg rounded-lg w-32">
                <button
                  className="block px-4 py-2 hover:bg-gray-700 w-full text-left"
                  onClick={() => scrollToSection("programs")}
                >
                  Education
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-700 w-full text-left"
                  onClick={() => scrollToSection("medical")}
                >
                  Medical
                </button>
              </div>
            )}
          </div>
          
          <button className="hover:text-gray-300">Partners</button>
          <button className="hover:text-gray-300">Contact</button>
        </div>
      </nav> */}

      {/* Hero Section with Background Image */}
      <section className="relative flex flex-col items-center justify-center text-center h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/Ibobo_background.png"
            layout="fill"
            objectFit="cover"
            alt="Hero Background"
          />
        </div>
      </section>

      {/* Programs Section */}
      <ProgramsSection images={educationImages} />
      <MedicalSection images={medicalImages} />

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

// Fetch images locally
function getLocalImages(): string[] {
  const imagesDirectory = path.join(process.cwd(), "/public/Images/Education_Images");
  console.log(imagesDirectory);

  try {
    console.log("retuned images");
    return fs.readdirSync(imagesDirectory).filter((file) => /\.(png|JPG|jpe?g|webp)$/i.test(file));
    
  } catch (error) {
    console.error("Error reading images directory:", error);
    return [];
  }
}

function getMedicalImages(): string[] {
  const imagesDirectory = path.join(process.cwd(), "/public/Images/Medical_Images");
  console.log(imagesDirectory);

  try {
    console.log("retuned images");
    return fs.readdirSync(imagesDirectory).filter((file) => /\.(png|JPG|jpe?g|webp)$/i.test(file));
    
  } catch (error) {
    console.error("Error reading images directory:", error);
    return [];
  }
}