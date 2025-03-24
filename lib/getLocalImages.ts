"use server";

import fs from "fs/promises";
import path from "path";

export async function getLocalImages(folder: string): Promise<string[]> {
    const imagesDirectory = path.join(process.cwd(), folder);
    console.log("imagesDirectory");
    console.log(imagesDirectory);
  
    try {
        const files = await fs.readdir(imagesDirectory);
        return files.map((file) => `/${folder}/${file}`);
      //return fs.readdirSync(imagesDirectory).filter((file) => /\.(png|JPG|jpe?g|webp)$/i.test(file));
      
    } catch (error) {
      console.error("Error reading images directory:", error);
      return [];
    }
  }