import React, { useState, useRef } from 'react';
import { reelsProject } from '../data/portfolioData';

export default function ReelsVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(20);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(err => {
            console.warn("Playback error, trying muted play:", err);
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().then(() => setIsPlaying(true)).catch(e => console.error(e));
          });
      }
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleScrub = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    videoRef.current.currentTime = ratio * (videoRef.current.duration || 20);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  const formatTime = (seconds) => {
    const sec = Math.floor(seconds || 0);
    const durSec = Math.floor(duration || 20);
    return `00:${sec < 10 ? '0' + sec : sec} / 00:${durSec < 10 ? '0' + durSec : durSec}`;
  };

  return (
    <section id="reels-video" className="py-20 md:py-28 bg-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Video Editing CapCut
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Reels Video Editing (Format Vertikal 9:16)
          </h2>
          <p className="text-base text-gray-600">
            Spesifikasi: Durasi 20 detik (15–20 detik), format vertikal 9:16 (1080×1920 px), opening hook, transisi halus, teks pendukung, audio berlisensi, dan closing CTA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Real Video Player Inside Phone Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px] bg-brand-deep rounded-[40px] p-3 shadow-elevated border-4 border-gray-800 relative group">
              
              {/* Phone Dynamic Island / Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-gray-900 rounded-full z-30 flex items-center justify-end px-3">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-800"></span>
              </div>

              {/* Video Screen Container */}
              <div className="relative w-full aspect-9-16 rounded-[30px] overflow-hidden bg-black flex flex-col justify-between shadow-inner">
                
                {/* Real HTML5 Video */}
                <video
                  ref={videoRef}
                  playsInline
                  preload="auto"
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onClick={togglePlay}
                  className="w-full h-full object-cover cursor-pointer"
                >
                  <source src="./public/assets/reels-video-h264.mp4" type="video/mp4; codecs=avc1.42E01E,mp4a.40.2" />
                  <source src="./public/assets/reels-video-h264.mp4" type="video/mp4" />
                  <source src="./assets/reels-video-h264.mp4" type="video/mp4" />
                  <source src="./public/assets/reels-video.mp4" type="video/mp4" />
                  <source src="./assets/reels-video.mp4" type="video/mp4" />
                  <source src="./assets/reels video editing/reels video.mp4" type="video/mp4" />
                  Browser Anda tidak mendukung tag pemutar video HTML5.
                </video>

                {/* Floating Top Badges */}
                <div className="absolute top-8 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                  <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-sm">
                    <span>✂️</span>
                    <span>CapCut Edit</span>
                  </span>
                  <span className="bg-emerald-700/90 backdrop-blur-md text-white text-xs font-mono font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {formatTime(currentTime)}
                  </span>
                </div>

                {/* Big Centered Play Overlay */}
                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/35 backdrop-blur-[2px] cursor-pointer transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-600/90 hover:bg-emerald-600 text-white flex items-center justify-center shadow-elevated hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="mt-3 text-xs font-bold text-white bg-black/60 px-3 py-1 rounded-full border border-white/20">
                      Putar Video Reels
                    </span>
                  </div>
                )}

                {/* Bottom Safe Zone Info */}
                <div className="absolute bottom-16 left-4 right-4 z-20 pointer-events-none">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md p-2 rounded-xl text-[11px] text-white/90 border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="truncate">Audio &amp; Musik Berlisensi (Royalty-Free)</span>
                  </div>
                </div>

                {/* Player Controls Bar */}
                <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-3 pt-6 space-y-2">
                  <div
                    className="w-full bg-white/25 h-1.5 rounded-full overflow-hidden cursor-pointer"
                    onClick={handleScrub}
                  >
                    <div
                      className="bg-emerald-500 h-full transition-all duration-100"
                      style={{ width: `${(currentTime / (duration || 20)) * 100}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between text-white pt-1">
                    <button
                      onClick={togglePlay}
                      className="p-2 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white focus:outline-none transition-all shadow-sm"
                      aria-label={isPlaying ? "Jeda Video" : "Putar Video"}
                    >
                      {isPlaying ? (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>
                    
                    <span className="text-xs font-mono font-semibold text-gray-200">
                      {formatTime(currentTime)}
                    </span>

                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-full hover:bg-white/10 text-white focus:outline-none"
                      aria-label="Toggle Mute"
                    >
                      {isMuted ? "🔇" : "🔊"}
                    </button>

                    <button
                      onClick={toggleFullscreen}
                      className="p-2 rounded-full hover:bg-white/10 text-white focus:outline-none"
                      aria-label="Fullscreen"
                    >
                      ⛶
                    </button>
                  </div>
                </div>

              </div>

              {/* Direct Open Link */}
              <div className="mt-3 text-center">
                <a
                  href="./public/assets/reels-video.mp4"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors"
                >
                  <span>Buka Video di Tab Baru (MP4 HD) ➔</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right: Technical Breakdown & Script Structure */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-emerald-50/60 p-6 sm:p-8 rounded-3xl border border-emerald-200 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-200 text-xs font-bold text-emerald-800">
                <span>Spesifikasi CapCut Dummy Project</span>
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">Struktur Video Reels 20 Detik</h3>
              <p className="text-sm text-gray-800 leading-relaxed font-semibold">
                "Video editing menggunakan CapCut – Dummy Project."
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Video dirancang untuk memaksimalkan retensi penonton dengan pembagian 4 fase durasi yang jelas, transisi dinamis, subtitle terpusat pada safe area Instagram, serta ajakan tindakan langsung di akhir video.
              </p>
            </div>

            {/* 4 Phased Timeline */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-white border border-brand-border shadow-sm flex items-start gap-3 hover:border-emerald-400 transition-colors">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-mono font-bold text-xs shrink-0">
                  00:00 - 00:03
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-gray-900">1. Opening Hook (3 Detik Pertama)</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Visual pop-up teks dan transisi cepat untuk menghentikan scrolling audiens di 3 detik pertama dengan pertanyaan/hook yang memancing rasa penasaran.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-brand-border shadow-sm flex items-start gap-3 hover:border-emerald-400 transition-colors">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-mono font-bold text-xs shrink-0">
                  00:03 - 00:08
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-gray-900">2. Problem &amp; Product Presentation (B-Roll)</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Sorotan visual kemasan produk, tekstur, atau permasalahan harian yang diatasi dengan transisi visual yang halus dan estetik.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-brand-border shadow-sm flex items-start gap-3 hover:border-emerald-400 transition-colors">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-mono font-bold text-xs shrink-0">
                  00:08 - 00:15
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-gray-900">3. Benefits &amp; Dynamic Subtitles</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Subtitle animasi yang dinamis dan mudah dibaca di dalam safe area vertikal 9:16 untuk memaparkan khasiat, keunggulan, serta legalitas produk.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-brand-border shadow-sm flex items-start gap-3 hover:border-emerald-400 transition-colors">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-mono font-bold text-xs shrink-0">
                  00:15 - 00:20
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-gray-900">4. Closing Call to Action (CTA)</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Penutup video dengan ajakan bertindak yang jelas (Call to Action), informasi harga promo bundling, dan arahan pemesanan via marketplace atau WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* Audio Clearance */}
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-600 flex items-center gap-2">
              <span>✓ Musik &amp; Audio: Menggunakan audio berlisensi (Royalty-Free / Licensed audio) yang aman dari pelanggaran hak cipta media sosial.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
