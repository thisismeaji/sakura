"use client";

import React, { useEffect, useRef, useState } from "react";
import Styles from "../subscribe/subscribe.module.css";
import Image from "next/image";
import { useSubscribe } from "@/app/context/SubscribeContext";
import emailjs from "emailjs-com";

export default function Subscribe() {
  const { setShowSubscribe } = useSubscribe();
  const modalRef = useRef(null); // Buat referensi untuk modal subscribe
  const [email, setEmail] = useState(""); // State untuk menyimpan email pengguna
  const [message, setMessage] = useState(""); // State untuk notifikasi pesan

  // Fungsi untuk menangani klik di luar modal
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowSubscribe(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowSubscribe]);

  // Fungsi untuk mengirim email melalui Email.js
  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    const templateParams = {
      to_email: email, // Email yang diinput pengguna
      message: `New subscriber: ${email}`, // Isi pesan
    };

    emailjs
      .send(
        "service_dlbb4bq",   // Ganti dengan Service ID dari Email.js
        "template_wc1vz1i",  // Ganti dengan Template ID dari Email.js
        templateParams,
        "uGT73uo7LkH3JcB2m"    // Ganti dengan Public Key dari Email.js
      )
      .then(
        (response) => {
          setMessage("Thank you for subscribing! 🎉");
          setEmail(""); // Reset email input setelah sukses
        },
        (error) => {
          setMessage("Failed to subscribe 😢");
          console.error("Email.js Error:", error);
        }
      );
  };

  return (
    <div className={Styles.overlay}>
      <div className={Styles.subscribe} ref={modalRef}>
        <div className={Styles.cardPhoto}>
          <Image
            src="/assets/images/profile.png"
            width={1080}
            height={1080}
            alt="profile"
          />
          <h1>Subscribe to Sakura</h1>
          <p>Stay up to date with everything important.</p>
        </div>
        <div className={Styles.cardForm}>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          {message && <p className={Styles.message}>{message}</p>}
        </div>
        <div className={Styles.cardTOS}>
          <p>
            By subscribing, you agree to our Terms of Service and Privacy Policy.
            You can unsubscribe anytime.
          </p>
        </div>
        <div
          className={Styles.closeBtn}
          onClick={() => setShowSubscribe(false)}
          style={{ cursor: "pointer" }}
        >
          &times;
        </div>
      </div>
    </div>
  );
}
