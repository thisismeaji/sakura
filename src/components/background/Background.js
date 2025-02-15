import React from 'react';
import Styles from "../background/background.module.css";

export default function Background() {
  return (
    <div className={Styles.container}>
      <video className={Styles.background} autoPlay loop muted playsInline>
        <source src="/assets/videos/background.mp4" type="video/mp4" />
        Browser tidak mendukung video.
      </video>
    </div>
  );
}
