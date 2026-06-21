"use client";

const row1 = [
  { src: "/images/recruit/photo-01.png",    alt: "GO-TAs 職場の様子" },
  { src: "/images/recruit/photo-02.png",    alt: "GO-TAs スタッフ" },
  { src: "/images/recruit/photo-03.png",    alt: "GO-TAs イベント" },
  { src: "/images/recruit/photo-04.png",    alt: "GO-TAs チームワーク" },
  { src: "/images/recruit/photo-05.png",    alt: "GO-TAs 社員" },
  { src: "/images/recruit/photo-06.png",    alt: "GO-TAs 職場" },
];

const row2 = [
  { src: "/images/recruit/photo-01-sp.png", alt: "GO-TAs 職場の様子" },
  { src: "/images/recruit/photo-02-sp.png", alt: "GO-TAs スタッフ" },
  { src: "/images/recruit/photo-03-sp.png", alt: "GO-TAs イベント" },
  { src: "/images/recruit/photo-04-sp.png", alt: "GO-TAs チームワーク" },
  { src: "/images/recruit/photo-05-sp.png", alt: "GO-TAs 社員" },
];

type Photo = { src: string; alt: string };

function PhotoRow({ photos, reverse = false }: { photos: Photo[]; reverse?: boolean }) {
  const doubled = [...photos, ...photos];
  const animClass = reverse
    ? "animate-[marquee-reverse_32s_linear_infinite]"
    : "animate-[marquee_32s_linear_infinite]";

  return (
    <div className="flex overflow-hidden">
      <div className={`flex shrink-0 gap-8 ${animClass}`}>
        {doubled.map((photo, i) => (
          <div key={i} className="relative h-[360px] w-[640px] shrink-0 overflow-clip rounded-[20px]">
            <img
              src={photo.src}
              alt={photo.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function RecruitPhotoMarquee() {
  return (
    <div className="flex flex-col gap-8 bg-transparent overflow-hidden">
      <PhotoRow photos={row1} />
      <PhotoRow photos={row2} reverse />
    </div>
  );
}
