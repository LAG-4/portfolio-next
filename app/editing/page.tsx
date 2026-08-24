"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Play, X, Video, Calendar, Layers } from "lucide-react";
import Image from "next/image";

// Helper: Get YouTube video ID for thumbnails/embedding (handles shorts!)
function getYoutubeId(url: string): string | null {
  const match =
    url.match(/youtu\.be\/([^?&]+)/) ||
    url.match(/youtube\.com\/watch\?v=([^?&]+)/) ||
    url.match(/youtube\.com\/shorts\/([^?&]+)/);
  return match ? match[1] : null;
}

// Helper: Get YouTube embed URL (uses ID from above)
function toEmbedUrl(url: string): string {
  const id = getYoutubeId(url);
  return id ? `https://www.youtube.com/embed/${id}` : url;
}

// Video type
type VideoItem = {
  id: number;
  src: string;
  title: string;
  height: number;
};

const randomHeight = () => Math.floor(Math.random() * 50) + 220; // 220-270px
const YOUTUBE_VIDEOS: VideoItem[] = [
  { id: 1, src: "https://youtu.be/1DGChttirWc", title: "Project 1", height: randomHeight() },
  { id: 2, src: "https://youtu.be/YrtZOEnQJQU", title: "Project 2", height: randomHeight() },
  { id: 3, src: "https://youtu.be/YEYFv33BFHY", title: "Project 3", height: randomHeight() },
  { id: 4, src: "https://youtu.be/CvruYtbCOQY", title: "Project 4", height: randomHeight() },
  { id: 5, src: "https://youtu.be/MtadvXWDlyg", title: "Project 5", height: randomHeight() },
  { id: 6, src: "https://youtu.be/K8zqI1BnyVQ", title: "Project 6", height: randomHeight() },
  { id: 7, src: "https://youtu.be/NoImOIqAf2Q", title: "Project 7", height: randomHeight() },
  { id: 8, src: "https://youtu.be/SWavjmLxP3o", title: "Project 8", height: randomHeight() },
  { id: 9, src: "https://youtu.be/Kc3HLHQPvSI", title: "Project 9", height: randomHeight() },
  { id: 10, src: "https://youtu.be/Aqvfa--rxTM", title: "Project 10", height: randomHeight() },
  { id: 11, src: "https://youtu.be/Zs2kAO_HnPc", title: "Project 11", height: randomHeight() },
  { id: 12, src: "https://youtu.be/XD-Kb9ASSU4", title: "Project 12", height: randomHeight() },
  { id: 13, src: "https://youtu.be/XD-Kb9ASSU4", title: "Project 13", height: randomHeight() },
  { id: 14, src: "https://youtu.be/s9B-1X33DbA", title: "Project 14", height: randomHeight() },
  { id: 15, src: "https://youtu.be/_4NMqcaqexk", title: "Project 15", height: randomHeight() },
  { id: 16, src: "https://youtu.be/Yz2YoKbJneo", title: "Project 16", height: randomHeight() },
  { id: 17, src: "https://youtu.be/enI0SdFU5E4", title: "Project 17", height: randomHeight() },
  { id: 18, src: "https://youtu.be/Hba-4a8aRA0", title: "Project 18", height: randomHeight() },
  // Shorts - vertical, use fixed taller height to stand out
  { id: 19, src: "https://youtube.com/shorts/wIAVW5feHJM", title: "Project 19", height: 380 },
  { id: 20, src: "https://youtube.com/shorts/jPiNw3C5kPY", title: "Project 20", height: 380 },
];

export default function EditingPortfolioPage() {
  const [videos] = useState<VideoItem[]>(YOUTUBE_VIDEOS);
  const [modalVideo, setModalVideo] = useState<VideoItem | null>(null);

  useEffect(() => {
    if (modalVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalVideo]);

  return (
    <div className="min-h-screen text-[#f4f4f6] font-inter py-12 px-6 md:px-12 relative overflow-x-hidden select-none">
      
      {/* Header bar */}
      <div className="max-w-7xl mx-auto mb-16 flex justify-between items-center z-10 relative">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-sm font-bold uppercase tracking-widest text-zinc-300 font-mono">
            ARYAN.GUPTA // VIDEO ARCHIVES
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-zinc-400 font-mono">EDITING MAIN DECK</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-5 py-2 mb-2">
            <Video className="w-4 h-4 text-indigo-400 animate-pulse" />
            <span className="text-indigo-300 text-xs font-mono font-bold uppercase tracking-wider">
              Showcase Console
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-outfit font-extrabold tracking-tight text-white leading-none">
            Motion Portfolio
          </h1>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            A curated collection of my video editing work, showcasing creativity through dynamic motion design, pacing, and visual storytelling.
          </p>

          <div className="flex items-center justify-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-outfit font-bold text-white flex items-center gap-1.5 justify-center">
                <Layers className="w-5 h-5 text-indigo-400" /> {videos.length}
              </div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mt-1">Total Cuts</div>
            </div>
            <div className="w-px h-8 bg-zinc-800"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-outfit font-bold text-white flex items-center gap-1.5 justify-center">
                <Calendar className="w-5 h-5 text-indigo-400" /> 2026
              </div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mt-1">Current Sync</div>
            </div>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {videos.map((video) => {
            const ytId = getYoutubeId(video.src);
            return (
              <Card
                key={video.id}
                className="break-inside-avoid mb-6 group cursor-pointer bg-[#0c0c0f]/85 border border-zinc-900 rounded-3xl hover:border-zinc-700/80 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden shadow-xl"
                style={{ height: `${video.height}px` }}
                onClick={() => setModalVideo(video)}
              >
                <CardContent className="p-0 h-full relative">
                  {ytId ? (
                    <Image
                      src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`}
                      alt={video.title}
                      fill
                      className="object-cover rounded-3xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      priority={video.id <= 4}
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-950 flex items-center justify-center text-xs font-mono text-zinc-500">
                      No Media Load
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070709]/95 via-transparent to-transparent pointer-events-none rounded-3xl"></div>

                  {/* Hover Scan overlay */}
                  <div className="absolute inset-0 bg-indigo-900/10 backdrop-blur-[2px] flex flex-col items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none rounded-3xl">
                    <div className="text-center space-y-2">
                      <div className="p-3 bg-zinc-950/80 border border-zinc-800 rounded-full inline-block">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                      <p className="text-white font-mono text-xs uppercase font-bold tracking-wider">
                        Play Media Stream
                      </p>
                    </div>
                  </div>

                  {/* Details Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none z-10">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                      CUT_INDEX // #{video.id.toString().padStart(2, "0")}
                    </span>
                    <h3 className="text-white font-outfit font-extrabold text-base md:text-lg group-hover:text-indigo-400 transition-colors">
                      {video.title}
                    </h3>
                  </div>

                  {/* Glowing active indicator */}
                  <div className="absolute top-4 right-4 pointer-events-none z-10">
                    <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-md shadow-emerald-500/50"></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>

      {/* VIDEO MODAL WINDOW */}
      {modalVideo && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-md">
          <div
            className="fixed inset-0 cursor-pointer"
            aria-label="Close video modal"
            onClick={() => setModalVideo(null)}
          />
          
          <div className="relative z-10 bg-[#09090b] border border-zinc-900 rounded-3xl shadow-2xl w-[95vw] sm:w-[90vw] max-w-4xl p-6 flex flex-col items-center gap-4 animate-in zoom-in-105 fade-in duration-200">
            {/* Modal Terminal Header */}
            <div className="w-full flex items-center justify-between border-b border-zinc-900 pb-3 mb-1">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setModalVideo(null)} />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-zinc-500 text-xs font-mono tracking-wider font-bold">
                STREAMING_SYS // ID_PORT_{modalVideo.id}
              </div>
              <button
                className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-850 rounded-xl p-1.5 hover:text-white transition cursor-pointer"
                aria-label="Close"
                onClick={() => setModalVideo(null)}
              >
                <X className="w-4 h-4 text-zinc-400" />
              </button>
            </div>

            {/* Video Player Box */}
            <div className="w-full max-h-[70vh] aspect-video rounded-2xl bg-black flex justify-center items-center overflow-hidden border border-zinc-900 shadow-inner">
              <iframe
                className="w-full h-full border-0"
                src={toEmbedUrl(modalVideo.src)}
                title={modalVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Footer Details */}
            <div className="text-center w-full mt-2">
              <h2 className="text-xl md:text-2xl font-outfit font-extrabold text-white">
                {modalVideo.title}
              </h2>
              <p className="text-xs font-mono text-zinc-500 mt-1 uppercase tracking-wider">
                Target URL: <span className="text-indigo-400 select-all font-bold">{modalVideo.src}</span>
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
