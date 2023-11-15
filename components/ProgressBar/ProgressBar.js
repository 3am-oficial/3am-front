import React, { useState, useRef, useEffect } from "react";

const ProgressBar = ({ audioRef }) => {
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [duration, setDuration] = useState(0);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60) || 0;
    const seconds = Math.floor(secs % 60) || 0;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const calculateProgress = () => {
    const currentTime = audioRef.current.currentTime;
    const totalTime = audioRef.current.duration;

    setProgress((currentTime / totalTime) * 100);
  };

  const handleTimeUpdate = () => {
    calculateProgress();
  };

  const handleDragStart = () => {
    setIsDragging(true);
    audioRef.current.pause();
  };

  const handleDrag = (e) => {
    if (isDragging) {
      const { clientX, target } = e;
      const { left, width } = target.getBoundingClientRect();
      const clickPosition = clientX - left;
      const percentage = (clickPosition / width) * 100;
      const newTime = (percentage * audioRef.current.duration) / 100;
      setProgress(percentage);
      audioRef.current.currentTime = newTime;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    audioRef.current.play();
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current.duration);
      });

      return () => {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [audioRef]);

  return (
    <div className="flex items-center mt-2">
      <div className="text-white text-xs pr-2">
        {calculateTime(audioRef.current.currentTime)}
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar__progress"
          style={{ width: `${progress}%` }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDrag}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
        ></div>
      </div>
      <div className="text-white text-xs pl-2">
        {calculateTime(audioRef.current.duration)}
      </div>
    </div>
  );
};

export default ProgressBar;
