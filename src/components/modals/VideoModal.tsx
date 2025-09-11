'use client';

import { useSimpleHeroData } from '@/hooks/useSimpleHeroData';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: (key: string) => string;
}

const VideoModal = ({ isOpen, onClose, t }: VideoModalProps) => {
  const { heroContent } = useSimpleHeroData();

  if (!isOpen) return null;

  // Use video URL from API or fallback
  const videoUrl = heroContent?.videoUrl || '/videos/bahram-autohaus-intro.mp4';
  const title = heroContent?.title || t('hero.title');
  const subtitle = heroContent?.subtitle || t('hero.subtitle');
  const description = heroContent?.description || t('hero.description');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Modal backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative mx-4 w-full max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Video player container */}
          <div className="relative aspect-video w-full">
            <video
              className="h-full w-full object-cover"
              controls
              autoPlay
              onEnded={onClose}
              poster={
                heroContent?.backgroundImage || '/images/cars/hero-bg.jpg'
              }
            >
              {/* Video source from API */}
              <source src={videoUrl} type="video/mp4" />
              {/* Fallback video sources */}
              <source
                src="/videos/bahram-autohaus-intro.mp4"
                type="video/mp4"
              />
              <source
                src="/videos/bahram-autohaus-intro.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video information */}
          <div className="p-6">
            <h3 className="mb-2 text-xl font-bold text-white">
              {title} - {subtitle}
            </h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
