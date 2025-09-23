'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "antd";
import styles from "./page.module.css";
import logo from "../../public/image/logo.png";

export default function Home() {
  const [clicks, setClicks] = useState(0);
  const [showEgg, setShowEgg] = useState(false);

  // reseta contador se o usuário demorar entre cliques
  useEffect(() => {
    if (!clicks) return;
    const t = setTimeout(() => setClicks(0), 1000);
    return () => clearTimeout(t);
  }, [clicks]);

  useEffect(() => {
    if (clicks >= 5) {
      setShowEgg(true);
      setClicks(0);
      const t = setTimeout(() => setShowEgg(false), 4500);
      return () => clearTimeout(t);
    }
  }, [clicks]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.titulo}>STRANGER THINGS</h1>
        <p className={styles.subtitulo}>Entre — mas cuidado com o Upside Down</p>

        <div className={styles.profile}>
          <div
            className={styles.avatar}
            role="button"
            tabIndex={0}
            onClick={() => setClicks((c) => c + 1)}
            onKeyDown={(e) => e.key === "Enter" && setClicks((c) => c + 1)}
            aria-label="Logo - clique para surpresa"
            title="Clique várias vezes para uma surpresa"
          >
            <Image src={logo} fill className={styles.object} alt="Logo" />
          </div>
        </div>

        <div className={styles.nome}>
          *clique 5 vezes no logo*
        </div>

        <blockquote className={styles.texto}>
          Um site interativo inspirado em Stranger Things, com informações sobre personagens,
          curiosidades e mistérios que foram despercebidos pelos fãs.
        </blockquote>

        <div className={styles.botoes}>
          <Link href="/characterlist" className={styles.link}>
            <Button type="primary" size="large" className={styles.botao}>
              Ver Personagens
            </Button>
          </Link>

          <Link href="/easteregg" className={styles.link}>
            <Button size="large" className={styles.botaoDois}>
              Curiosidades
            </Button>
          </Link>
        </div>
      </div>

      {showEgg && (
        <div className={styles.eggOverlay}>
          <div className={styles.eggCard}>
            <h2>Upside Down</h2>
            <p>Você encontrou o easter egg...</p>
            <div className={styles.eggGlitch} />
          </div>
        </div>
      )}
    </div>
  );
}
