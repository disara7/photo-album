// components/Page.tsx
"use client";

type PageProps = {
  image?: string;
  caption?: string;
  isCover?: boolean;
};

export default function Page({ image, caption, isCover }: PageProps) {
  if (isCover) {
    return (
      <div className="bg-[#2c2c2c] text-white flex flex-col items-center justify-center h-full rounded-lg">
        <h1 className="text-3xl font-bold">My Photo Album</h1>
        <p className="mt-2 text-sm">2026 Memories</p>
      </div>
    );
  }

  return (
    <div className="bg-[#fdfaf5] p-4 h-full flex flex-col justify-between rounded-lg shadow-inner">
      {image && (
        <img
          src={image}
          alt="photo"
          className="rounded-xl shadow-md object-cover h-[80%]"
        />
      )}

      <p className="mt-2 text-center italic text-sm">{caption}</p>
    </div>
  );
}