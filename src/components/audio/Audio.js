"use client";

import { useEffect, useRef, useState } from "react";

export default function Audio() {
  const audioRef = useRef(null);
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const playAudio = async () => {
      if (!audioRef.current) return;
      try {
        await audioRef.current.play();
        setIsBlocked(false);
      } catch (error) {
        setIsBlocked(true);
      }
    };

    playAudio();
  }, []);

  useEffect(() => {
    if (isBlocked) {
      const enableAudio = () => {
        if (audioRef.current) {
          audioRef.current.muted = false; // Hapus mute setelah interaksi
          audioRef.current.play().then(() => {
            setIsBlocked(false);
            removeListeners();
          }).catch(() => {});
        }
      };

      const removeListeners = () => {
        document.removeEventListener("click", enableAudio);
        document.removeEventListener("keydown", enableAudio);
        window.removeEventListener("scroll", enableAudio, { passive: false });
        window.removeEventListener("wheel", enableAudio, { passive: false });
        document.removeEventListener("mousedown", enableAudio);
        document.removeEventListener("touchstart", enableAudio);
        document.removeEventListener("pointermove", enableAudio);
        document.removeEventListener("mousemove", enableAudio);
      };

      // Tambahkan event listener
      document.addEventListener("click", enableAudio);
      document.addEventListener("keydown", enableAudio);
      window.addEventListener("scroll", enableAudio, { passive: false });
      window.addEventListener("wheel", enableAudio, { passive: false });
      document.addEventListener("mousedown", enableAudio);
      document.addEventListener("touchstart", enableAudio);
      document.addEventListener("pointermove", enableAudio);
      document.addEventListener("mousemove", enableAudio);

      return () => removeListeners();
    }
  }, [isBlocked]);

  return (
    <div>
      <audio ref={audioRef} src="/assets/sounds/audio.mp3" autoPlay loop preload="none" muted />
    </div>
  );
}
