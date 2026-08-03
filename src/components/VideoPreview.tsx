interface VideoPreviewProps {
  src: string;
  poster?: string;
}

export function VideoPreview({ src, poster }: VideoPreviewProps) {
  return (
    <video
      className="case-video"
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}
