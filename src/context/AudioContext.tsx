"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

interface AudioContextType {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  togglePlay: () => void;
  toggleMute: () => void;
  setVolume: (volume: number) => void;
  pauseForVideo: () => void;
  resumeFromVideo: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolumeState] = useState<number>(0.35);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isPlayingRef = useRef<boolean>(false);
  const wasPlayingBeforeVideo = useRef<boolean>(false);

  // Attempt immediate playback
  const attemptPlay = useCallback(() => {
    if (!audioRef.current) return;
    try {
      const isMutedPref = localStorage.getItem("veilwake_bgm_disabled");
      if (isMutedPref === "true") return;
    } catch {
      // Ignore
    }

    if (!isPlayingRef.current) {
      audioRef.current.volume = volume;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            isPlayingRef.current = true;
          })
          .catch(() => {
            // Autoplay blocked by browser policy without gesture
          });
      }
    }
  }, [volume]);

  useEffect(() => {
    // 1. Check if user previously explicitly turned off music
    let isExplicitlyDisabled = false;
    try {
      isExplicitlyDisabled = localStorage.getItem("veilwake_bgm_disabled") === "true";
    } catch {
      // Ignore
    }

    if (isExplicitlyDisabled) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      isPlayingRef.current = false;
      return;
    }

    // 2. Try playing immediately upon page load
    attemptPlay();

    // 3. Fallback: Any slightest user movement or interaction immediately unlocks autoplay
    const events = [
      "pointerdown",
      "touchstart",
      "keydown",
      "scroll",
      "wheel",
      "pointermove",
      "click",
    ];

    const handleFirstGesture = () => {
      attemptPlay();
      removeListeners();
    };

    const removeListeners = () => {
      events.forEach((evt) => {
        window.removeEventListener(evt, handleFirstGesture);
      });
    };

    events.forEach((evt) => {
      window.addEventListener(evt, handleFirstGesture, { passive: true, once: true });
    });

    return () => {
      removeListeners();
    };
  }, [attemptPlay]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      isPlayingRef.current = false;
      try {
        localStorage.setItem("veilwake_bgm_disabled", "true");
      } catch {
        // Ignore
      }
    } else {
      try {
        localStorage.setItem("veilwake_bgm_disabled", "false");
      } catch {
        // Ignore
      }
      audioRef.current.volume = volume;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          isPlayingRef.current = true;
        })
        .catch((err) => {
          console.error("Audio playback error:", err);
        });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
      audioRef.current.volume = volume > 0 ? volume : 0.35;
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const setVolume = (newVol: number) => {
    setVolumeState(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      if (newVol === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        audioRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  const pauseForVideo = () => {
    if (isPlaying && audioRef.current) {
      wasPlayingBeforeVideo.current = true;
      audioRef.current.pause();
      setIsPlaying(false);
      isPlayingRef.current = false;
    }
  };

  const resumeFromVideo = () => {
    if (wasPlayingBeforeVideo.current && audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          isPlayingRef.current = true;
        })
        .catch(() => {});
      wasPlayingBeforeVideo.current = false;
    }
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        isMuted,
        volume,
        togglePlay,
        toggleMute,
        setVolume,
        pauseForVideo,
        resumeFromVideo,
      }}
    >
      {/* HTML5 Audio with autoPlay and playsInline attributes */}
      <audio
        ref={audioRef}
        src="/audio/saigon_veilwake_theme.mp3"
        autoPlay
        loop
        playsInline
        preload="auto"
        onPlay={() => {
          setIsPlaying(true);
          isPlayingRef.current = true;
        }}
        onPause={() => {
          setIsPlaying(false);
          isPlayingRef.current = false;
        }}
      />
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
