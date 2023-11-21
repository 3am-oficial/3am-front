import AudioPlayer from "react-h5-audio-player";

const Player = ({
  audio,
  onPlaying,
  audioRef,
  handleNextClick,
  handlePreviewClick,
  showSkipControls = false,
  autoPlay = false,
}) => {
  return (
    <AudioPlayer
      autoPlay={autoPlay}
      showSkipControls={showSkipControls}
      src={audio}
      onPlay={(e) => onPlaying(e)}
      onPause={(e) => onPlaying(e)}
      ref={audioRef}
      onClickPrevious={handlePreviewClick}
      onClickNext={handleNextClick}
    />
  );
};

export default Player;
