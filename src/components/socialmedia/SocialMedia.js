import React from "react";
import Styles from "../socialmedia/socialmedia.module.css";
import Image from "next/image";
import Link from "next/link";

export default function SocialMedia() {
  const socialLinks = [
    {
      href: "https://www.instagram.com/jeaj.je?igsh=MTgyMGF4NDZxeTM3aA==",
      src: "/assets/icons/instagram.png",
      alt: "Instagram",
    },
    {
      href: "https://x.com/40143_/status/1873231064560484420?t=kD6f98fqB_TRXVayNSTgOg&s=19",
      src: "/assets/icons/x.png",
      alt: "X",
    },
    {
      href: "https://www.tiktok.com/@40143_?_t=ZS-8tsAfmPc8Pw&_r=1",
      src: "/assets/icons/tiktok.png",
      alt: "TikTok",
    },
    {
      href: "https://whatsapp.com/channel/0029VazXO2cC6ZvbIHbh7d3k",
      src: "/assets/icons/whatsaap.png",
      alt: "WhatsApp",
    },
    {
      href: "/",
      src: "/assets/icons/threads.png",
      alt: "Threads",
    },
    {
      href: "/",
      src: "/assets/icons/facebook.png",
      alt: "Facebook",
    },
  ];

  return (
    <div className={Styles.socialMedia}>
      {socialLinks.map((link, index) => (
        <Link key={index} href={link.href}>
          <Image src={link.src} width={1080} height={1080} alt={link.alt} />
        </Link>
      ))}
    </div>
  );
}
