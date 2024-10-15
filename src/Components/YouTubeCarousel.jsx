import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaEye, FaThumbsUp, FaComment } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import { youtubeVideos } from './portfolios';
import SectionTitle from './section_title';
import SingleCountdown from '../SingleFeatures/SIngleCountdown';

const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  } else {
    return num.toString();
  }
};

const YouTubeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const playerRef = useRef(null);

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % youtubeVideos.length);
    resetTimeout();
  };

  const prevVideo = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + youtubeVideos.length) % youtubeVideos.length
    );
    resetTimeout();
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(nextVideo, 120000);
  };

  useEffect(() => {
    resetTimeout();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  const onEnded = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
    }
  };

  return (
    <div className="youtube-carousel-section section-ptb" id="youtube-carousel">
      <div className="container">
        <SectionTitle
          title="YOUTUBE TUTORIALS"
          subTitle="Watch My Coding Tutorials"
          desc="Explore a variety of programming topics through my YouTube tutorials. From web development to algorithms, there's something for everyone!"
        />
        <div className="youtube-carousel mt-45">
          <div className="carousel-wrapper">
            <button
              onClick={prevVideo}
              className="carousel-button prev"
              aria-label="Previous Video"
            >
              <FaChevronLeft />
            </button>
            <div className="video-container">
              <ReactPlayer
                ref={playerRef}
                url={youtubeVideos[currentIndex].url}
                playing
                muted
                controls
                width="100%"
                height="100%"
                className="youtube-player"
                onEnded={onEnded}
                config={{
                  youtube: {
                    playerVars: {
                      mute: 1,
                      controls: 1,
                      rel: 0,
                      modestbranding: 1,
                      origin: window.location.origin,
                      iv_load_policy: 3,
                    },
                    host: 'https://www.youtube-nocookie.com',
                  },
                }}
              />
            </div>
            <button
              onClick={nextVideo}
              className="carousel-button next"
              aria-label="Next Video"
            >
              <FaChevronRight />
            </button>
          </div>
          <div className="video-stats mt-4">
            <div className="row justify-content-center">
              <SingleCountdown
                extraClass="col-md-4 col-sm-4 mb-3 mb-md-0"
                title="Views"
                start={0}
                end={youtubeVideos[currentIndex].views}
                duration={7}
                formattedValue={formatNumber(youtubeVideos[currentIndex].views)}
              >
                <FaEye className="stat-icon" />
              </SingleCountdown>
              <SingleCountdown
                extraClass="col-md-4 col-sm-4 mb-3 mb-md-0"
                title="Likes"
                start={0}
                end={youtubeVideos[currentIndex].likes}
                duration={7}
                formattedValue={formatNumber(youtubeVideos[currentIndex].likes)}
              >
                <FaThumbsUp className="stat-icon" />
              </SingleCountdown>
              <SingleCountdown
                extraClass="col-md-4 col-sm-4"
                title="Comments"
                start={0}
                end={youtubeVideos[currentIndex].comments}
                duration={7}
                formattedValue={formatNumber(youtubeVideos[currentIndex].comments)}
              >
                <FaComment className="stat-icon" />
              </SingleCountdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeCarousel;