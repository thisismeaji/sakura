import React from 'react';
import Styles from "../profile/profile.module.css";
import Image from 'next/image';

export default function Profile() {
  return (
    <div className={Styles.profile}>
        <div className={Styles.image}>
          <Image
            src="/assets/images/profile.png"
            width={1080}
            height={1080}
            alt="Profile"
          />
        </div>
        <div className={Styles.text}>
          <h1>Sakura <span>(さくら)</span></h1>
          <h2>VTuber - Singer</h2>
          <p>
          As a vtuber and singer, Sakura radiates the elegance of a blooming cherry blossom. Her melodious voice and captivating stage presence evoke joy and warmth, making every performance an unforgettable experience.
          </p>
        </div>
    </div>
  );
}
