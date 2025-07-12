"use client";

import Link from "next/link";
import { IVideo } from "@/models/Video";
import { useRef, useState } from "react";

export default function VideoComponent({ video }: { video: IVideo }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [lastTime, setLastTime] = useState(0);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = lastTime;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      setLastTime(videoRef.current.currentTime);
      videoRef.current.pause();
    }
  };
      const endpoint=process.env.NEXT_PUBLIC_URL_ENDPOINT;
  const videoUrl = `${endpoint}${video.videoUrl}`;

  return (
    <div className="card bg-base-100 shadow hover:shadow-lg transition-all duration-300">
      <figure className="relative px-4 pt-4">
        <div
          className="rounded-xl overflow-hidden relative w-full"
          style={{ aspectRatio: "9/16" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            src={videoUrl}
            muted
            loop
            playsInline
            controls={video.controls}
            className="w-full h-full object-cover"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </figure>

      <div className="card-body p-4">
        <Link
          href={`/videos/${video._id}`}
          className="hover:opacity-80 transition-opacity block"
        >
          <h2 className="card-title text-lg">{video.title}</h2>
          <p className="text-sm text-base-content/70 line-clamp-2">
            {video.description}
          </p>
        </Link>
      </div>
    </div>
  );
}