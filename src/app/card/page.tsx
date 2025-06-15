"use client";

import Image from "next/image";
import styles from "./CardPage.module.css";

export default function Card() {
  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = event.currentTarget;
    const elRect = el.getBoundingClientRect();

    const x = event.clientX - elRect.x;
    const y = event.clientY - elRect.y;

    const midCardWidth = elRect.width / 2;
    const midCardHeight = elRect.height / 2;

    const angleY = (x - midCardWidth) / 8;
    const angleX = -(y - midCardHeight) / 8;

    el.children[0].setAttribute(
      "style",
      `transform: rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05); transition: transform 0.1s ease;`
    );

    const holo = el.querySelector(`.${styles.holoLayer}`) as HTMLElement;
    if (holo) {
      const posX = (x / elRect.width) * 100;
      const posY = (y / elRect.height) * 100;
      holo.style.backgroundPosition = `${posX}% ${posY}%`;
    }
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    const el = event.currentTarget;
    const elRect = el.getBoundingClientRect();

    const x = touch.clientX - elRect.left;
    const y = touch.clientY - elRect.top;

    const midX = elRect.width / 2;
    const midY = elRect.height / 2;

    const angleY = (x - midX) / 8;
    const angleX = -(y - midY) / 8;

    el.children[0].setAttribute(
      "style",
      `transform: rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05); transition: transform 0.1s ease;`
    );

    const holo = el.querySelector(`.${styles.holoLayer}`) as HTMLElement;
    if (holo) {
      const posX = (x / elRect.width) * 100;
      const posY = (y / elRect.height) * 100;
      holo.style.backgroundPosition = `${posX}% ${posY}%`;
    }
  };

  const resetMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = event.currentTarget;
    el.children[0].setAttribute(
      "style",
      "transform: rotateX(0deg) rotateY(0deg) scale(1); transition: transform 0.3s ease;"
    );
    const holo = el.querySelector(`.${styles.holoLayer}`) as HTMLElement;
    if (holo) {
      holo.style.backgroundPosition = `50% 50%`;
    }
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    el.children[0].setAttribute(
      "style",
      "transform: rotateX(0deg) rotateY(0deg) scale(1); transition: transform 0.3s ease;"
    );

    const holo = el.querySelector(`.${styles.holoLayer}`) as HTMLElement;
    if (holo) {
      holo.style.backgroundPosition = `50% 50%`;
    }
  };

  return (
    <main>
      <h1>Page Card</h1>
      <section className={styles.container}>
        <div
          className={styles.card}
          onMouseMove={handleMove}
          onMouseLeave={resetMove}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={styles.contentCard}>
            <Image
              src={"/Wankul_S1_158.webp"}
              alt="Wankul"
              width={300}
              height={419}
            />
            <div className={styles.holoLayer}></div>
            <div className={styles.illusion}></div>
          </div>
        </div>
      </section>
    </main>
  );
}
