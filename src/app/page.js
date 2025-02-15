"use client";

import Background from "@/components/background/Background";
import Profile from "@/components/profile/Profile";
import Styles from "../app/page.module.css";
import ListLink from "@/components/list/listlink/ListLink";
import SocialMedia from "@/components/socialmedia/SocialMedia";
import Subscribe from "@/components/subscribe/Subscribe";
import Share from "@/components/share/Share"; // Import Share
import { useSubscribe } from "@/app/context/SubscribeContext";
import { useShare } from "@/app/context/ShareContext"; // Import useShare
import Audio from "@/components/audio/Audio";

export default function Home() {
  const { showSubscribe } = useSubscribe();
  const { showShare } = useShare(); // Ambil showShare dari context

  return (
    <>
    <section className={Styles.section}>
      <Background />
      <div className={Styles.card}>
        <Profile />
        <ListLink />
        <SocialMedia />
        {showSubscribe && <Subscribe />}
        {showShare && <Share />} {/* Render Share jika true */}
      </div>
    </section>
    </>
  );
}
