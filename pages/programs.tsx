import fs from "fs";
import path from "path";
import ProgramSection from "@/components/ProgramSection";

export default function ProgramsPage({ images }: { images: string[] }) {
  return <ProgramSection images={images} />;
}

export async function getStaticProps() {
    console.log("getStaicProps called");
  const imagesDirectory = path.join(process.cwd(), "./public/Images/Education_Images");

  let images: string[] = [];
  try {
    if (fs.existsSync(imagesDirectory)) {
        console.log("Directory exists");
      images = fs.readdirSync(imagesDirectory).filter((file) => /\.(png|jpe?g|webp)$/i.test(file));
    }
  } catch (error) {
    console.error("Error reading images directory:", error);
  }

  return {
    props: { images: images || [] }, // Ensures images is never undefined
  };
}
