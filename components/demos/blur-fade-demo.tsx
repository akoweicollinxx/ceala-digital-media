"use client";

import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, MouseEvent } from "react";

interface WorkItem {
  background: string;
  imageUrl: string;
  isVideo: boolean;
  title: string;
  link: string;
}

const works: WorkItem[] = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/airpod.mp4",
    isVideo: true,
    title: "Fil Zenpod Unveiling",
    link: "",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/tomford.mp4",
    isVideo: true,
    title: "Tomford Ombre Leader Unveiling",
    link: "",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/combine.jpeg",
    isVideo: false,
    title: "Event Promotional Designs",
    link: "",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/dija.jpg",
    isVideo: false,
    title: "Brand Identity Design for DIJA COSMETICS",
    link: "",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/rebar.webp",
    isVideo: false,
    title: "Rebar Lounge Website",
    link: "https://rebarrestaurant.vercel.app/service.html",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/pchau.webp",
    isVideo: false,
    title: "Perfect Chau Website",
    link: "https://perfectchau.com.ng/",
  },
];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, isVideo, title, link, background }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${background} p-4`}
          >
            {link ? (
              <Link href={link} target="_blank" rel="noreferrer">
                {isVideo ? (
                  <VideoWithControls src={imageUrl} title={title} />
                ) : (
                  <Image
                    height={10000}
                    width={10000}
                    className="h-5/6 w-full object-cover rounded-lg"
                    src={imageUrl}
                    alt={`Work item: ${title}`}
                  />
                )}
                <h3 className="text-lg font-semibold p-4">{title}</h3>
              </Link>
            ) : (
              <div>
                {isVideo ? (
                  <VideoWithControls src={imageUrl} title={title} />
                ) : (
                  <Image
                    height={10000}
                    width={10000}
                    className="h-5/6 w-full object-cover rounded-lg"
                    src={imageUrl}
                    alt={`Work item: ${title}`}
                  />
                )}
                <h3 className="text-lg font-semibold p-4">{title}</h3>
              </div>
            )}
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

interface VideoWithControlsProps {
  src: string;
  title: string;
}

const VideoWithControls: React.FC<VideoWithControlsProps> = ({ src, title }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const togglePlay = (event: MouseEvent) => {
    // Prevent the parent Link from being triggered
    event.stopPropagation();

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="h-5/6 w-full object-cover rounded-lg"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={togglePlay}
        className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-sm font-medium p-2 rounded-full hover:bg-opacity-75"
        aria-label={`Toggle play for ${title}`}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};
