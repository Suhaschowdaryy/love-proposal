"use client";

import { useEffect, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const play = () => {
      audioRef.current.play();
      window.removeEventListener("click", play);
    };
    window.addEventListener("click", play);
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/music.mp3" type="audio/mpeg" />
    </audio>
  );
}