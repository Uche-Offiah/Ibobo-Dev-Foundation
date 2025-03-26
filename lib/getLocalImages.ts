
import fs from "fs";
import path from "path";

export function getLocalImages(folder: string): string[] {
    const imagesDirectory = path.join(process.cwd(), folder);

    try {
      return fs.readdirSync(imagesDirectory).filter((file) => /\.(png|JPG|jpe?g|webp)$/i.test(file));
    } catch (error) {
      console.error(`Error reading images directory (${folder}):`, error);
      return [];
    }
  
  }