import React from "react";
import Image from "next/image";
import Styles from "../listlink/listlink.module.css";
import Links from "@/data/link/Links";

export default function ListLink() {
  return (
    <div className={Styles.list}>
      {Links.map((link, index) => (
        <a 
          key={index} 
          href={link.href} 
          className={Styles.button} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Image src={link.image} alt={link.text} width={512} height={512} className={Styles.linkImage} />
          <p>{link.text}</p>
        </a>
      ))}
    </div>
  );
}
