'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Play, X } from 'lucide-react'
import Image from 'next/image'

// Helper: Get YouTube video ID for thumbnails/embedding (handles shorts!)
// Supports: youtu.be, youtube.com/watch?v=, youtube.com/shorts/
function getYoutubeId(url: string): string | null {
  const match =
    url.match(/youtu\.be\/([^?&]+)/) ||
    url.match(/youtube\.com\/watch\?v=([^?&]+)/) ||
    url.match(/youtube\.com\/shorts\/([^?&]+)/)
  return match ? match[1] : null
}

// Helper: Get YouTube embed URL (uses ID from above)
function toEmbedUrl(url: string): string {
  const id = getYoutubeId(url)
  return id ? `https://www.youtube.com/embed/${id}` : url
}

// Video type
type Video = {
  id: number
  src: string
  title: string
  height: number
}

const randomHeight = () => Math.floor(Math.random() * 50) + 220 // e.g. 220-270px
const YOUTUBE_VIDEOS: Video[] = [
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
  // Add more when available
]

export default function Page() {
  const [videos, setVideos] = useState<Video[]>([])
  const [modalVideo, setModalVideo] = useState<Video | null>(null)

  useEffect(() => {
    setVideos(YOUTUBE_VIDEOS)
  }, [])

  useEffect(() => {
    if (modalVideo) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [modalVideo])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background relative overflow-hidden">
      {/* Animated Theme Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-foreground/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(var(--primary-rgb),0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--primary-rgb),0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
            <span className="text-primary text-sm font-medium">Video Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-foreground via-accent to-accent bg-clip-text text-transparent">
            EDITING
          </h1>
          <p className="text text-xl max-w-2xl mx-auto leading-relaxed">
            A curated collection of my video editing work, showcasing creativity through motion and storytelling
          </p>
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{videos.length}</div>
              <div className="text-sm text-muted">Projects</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">2024</div>
              <div className="text-sm text-muted">Year</div>
            </div>
          </div>
        </div>
        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {videos.map((video) => (
            <Card
              key={video.id}
              className={`
                break-inside-avoid mb-6 group cursor-pointer
                bg-background border-border backdrop-blur-sm
                hover:bg-background/70 hover:border-primary/30
                transition-all duration-500 hover:scale-[1.02]
                hover:shadow-2xl hover:shadow-primary/10
                relative overflow-hidden
              `}
              style={{ height: `${video.height}px` }}
              onClick={() => setModalVideo(video)}
            >
              <CardContent className="p-0 h-full relative">
                {/* Next.js Image for YouTube Thumbnail */}
                <Image
                  src={`https://img.youtube.com/vi/${getYoutubeId(video.src)}/hqdefault.jpg`}
                  alt={video.title}
                  width={340}
                  height={video.height}
                  className="w-full h-full object-cover rounded-lg"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-lg pointer-events-none"></div>
                {/* Hover Overlay */}
                <div className={`
                  absolute inset-0 bg-primary/20 rounded-lg backdrop-blur-sm
                  flex items-center justify-center transition-all duration-300
                  opacity-0 group-hover:opacity-100
                  pointer-events-none
                `}>
                  <div className="text-center">
                    <Play className="w-12 h-12 text-foreground mx-auto mb-2" fill="currentColor" />
                    <p className="text-foreground font-semibold">Click to Play</p>
                  </div>
                </div>
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                  <h3 className="text-foreground font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-4 text-muted text-sm"></div>
                </div>
                {/* Corner Accent */}
                <div className="absolute top-4 right-4 pointer-events-none">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      
      </div>

      {/* MODAL */}
      {modalVideo && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-background/90 backdrop-blur-sm">
          <div
            className="fixed inset-0 bg-black/60"
            aria-label="Close video modal"
            onClick={() => setModalVideo(null)}
          />
          <div className="relative z-10 bg-background rounded-2xl shadow-lg w-[90vw] max-w-3xl p-6 flex flex-col items-center gap-4 animate-in zoom-in-110 fade-in">
            <button
              className="absolute top-4 right-4 bg-muted/80 rounded-full p-2 hover:bg-muted transition z-10"
              aria-label="Close"
              onClick={() => setModalVideo(null)}
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
            {/* YouTube Embed Video - Shorts Supported */}
            <div className="w-full max-h-[70vh] aspect-video rounded-lg bg-black flex justify-center items-center">
              <iframe
                className="w-full h-full rounded-lg"
                src={toEmbedUrl(modalVideo.src)}
                title={modalVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-3 text-center w-full">
              <h2 className="text-2xl font-bold text-foreground">{modalVideo.title}</h2>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-2"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
