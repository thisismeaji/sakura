import React, { useEffect, useRef, useState } from "react";
import Styles from "../share/share.module.css";
import { useShare } from "@/app/context/ShareContext";
import Image from "next/image";

export default function Share() {
  const { setShowShare } = useShare();
  const modalRef = useRef(null);
  const [copyMessage, setCopyMessage] = useState("");

  // Menutup modal saat klik di luar area modal
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowShare(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowShare]);

  const shareIcons = [
    { name: "copy", alt: "share url", text: "Copy Url" },
    { name: "facebook", alt: "share facebook", text: "Facebook" },
    { name: "x", alt: "share twitter / x", text: "Twitter" },
    { name: "whatsaap", alt: "share whatsaap", text: "whatsaap" },
  ];

  const handleShare = (name) => {
    const url = "https://jeiya.my.id";
    if (name === "copy") {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          setCopyMessage("URL berhasil dicopy");
          setTimeout(() => setCopyMessage(""), 2000);
        })
        .catch(() => {
          setCopyMessage("Gagal copy URL");
          setTimeout(() => setCopyMessage(""), 2000);
        });
    } else if (name === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        "_blank"
      );
    } else if (name === "x") {
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
        "_blank"
      );
    } else if (name === "whatsaap") {
      window.open(
        `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`,
        "_blank"
      );
    }
  };

  return (
    <div className={Styles.overlay}>
      <div className={Styles.share} ref={modalRef}>
        <div className={Styles.close} onClick={() => setShowShare(false)}>
          &times;
        </div>
        <h2>Share Link Sakura</h2>

        {copyMessage && (
          <div className={Styles.copyNotification}>{copyMessage}</div>
        )}

        <div className={Styles.shareImg}>
          <Image
            src="/assets/images/share-img.png"
            width={1920}
            height={1080}
            alt="share thumbnail"
          />
        </div>

        <div className={Styles.shareIcon}>
          {shareIcons.map((icon) => (
            <div key={icon.name} onClick={() => handleShare(icon.name)}>
              <Image
                src={`/assets/icons/${icon.name}.png`}
                width={512}
                height={512}
                alt={icon.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
