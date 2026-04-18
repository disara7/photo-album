// components/AlbumBook.tsx
"use client";

import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import { photos } from "@/data/photos";

export default function AlbumBook() {
  const flipSound = typeof Audio !== "undefined" ? new Audio("/flip.mp3") : null;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <HTMLFlipBook
        width={400}
        height={500}
        showCover={true}
        className="shadow-2xl"
        onFlip={() => flipSound?.play()}
      >
        {/* Cover */}
        <Page isCover />

        {/* Photo pages */}
        {photos.map((photo) => (
          <Page
            key={photo.id}
            image={photo.image}
            caption={photo.caption}
          />
        ))}

        {/* End page */}
        <div className="bg-[#2c2c2c] text-white flex items-center justify-center">
          <h2 className="text-xl">The End</h2>
        </div>
      </HTMLFlipBook>
    </div>
  );
}