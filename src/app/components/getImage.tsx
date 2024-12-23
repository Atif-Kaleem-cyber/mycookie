import React from "react";
import axios from "axios";
import { unstable_cache } from "next/cache";

import LightBox2 from "@/app/components/lightBox";

const slideImages = (images: ImageData[]): Slide[] => {
  const newImages: Slide[] = images.reduce((acc: Slide[], curr) => {
    acc.push({
      src: curr.largeImageURL,
      width: 3840,
      height: 5070,
    });
    return acc;
  }, []);

  return newImages;
};

const getCachedSlide = unstable_cache(
  async (images) => slideImages(images),
  ["slide-image"]
);

async function getImage(query:string) {
  try {
    const res = await axios.get(
      `https://pixabay.com/api/?key=${process.env.API_KEY}&q=${query}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

async function GetImage({query}:{query:string}) {
  const data = await getImage(query);
  const images = data.hits;

  const cachedSlide = await getCachedSlide(images);

  return (
    <div>
      <LightBox2 images={images} slideImages={cachedSlide} />
    </div>
  );
}

export default GetImage;

export type ImageData = {
  id: number;
  tags: string;
  webformatURL: string;
  largeImageURL: string;
  type: string;
  likes: number;
  views: number;
};

export type Slide = {
  src: string;
  width: number;
  height: number;
};
