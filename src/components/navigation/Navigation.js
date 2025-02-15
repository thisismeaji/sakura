"use client";

import Image from "next/image";
import Styles from "../navigation/navigation.module.css";
import { useSubscribe } from "@/app/context/SubscribeContext";
import { useShare } from "@/app/context/ShareContext"; // Import useShare

export default function Navigation() {
  const { setShowSubscribe } = useSubscribe();
  const { setShowShare } = useShare(); // Gunakan setShowShare dari Context

  return (
    <nav className={Styles.nav}>
      <div
        className={Styles.logo}
        onClick={() => setShowSubscribe((prev) => !prev)}
        style={{ cursor: "pointer" }}
      >
        <Image
          src="/assets/icons/bell.png"
          alt="Subscribe"
          width={1000}
          height={1000}
        />
      </div>
      <div
        className={Styles.menu}
        onClick={() => setShowShare((prev) => !prev)} // Toggle Share
        style={{ cursor: "pointer" }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
