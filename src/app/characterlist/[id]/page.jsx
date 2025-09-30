'use client'

import { useState, useEffect } from "react";
import styles from "./character.module.css";
import Link from "next/link";
import { Button } from "antd";

export default function CharacterPage({ params }) {
    const [id, setId] = useState(null);
    const [character, setCharacter] = useState(null);

    const apiURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

    useEffect(() => {
        const getParams = async () => {
            const resolvedParams = await params;
            console.log(resolvedParams.id);

            setId(resolvedParams.id);
        }

        getParams();
    }, [params]);

    useEffect(() => {
        if (!id) return;

        const fetchCharacter = async () => {
            try {
                const res = await fetch(`${apiURL}/characters/${id}`);

                const data = await res.json();
                console.log(data);

                setCharacter(data);
            } catch (error) {
                console.error("Failed to fetch character data:", error);
                setCharacter(null);
            }
        };
        fetchCharacter();
    }, [id]);

    return (
    <div className={styles.container}>
        <div className={styles.header}>
                <Link href="/characterlist" className={styles.link}>
                    <Button type="primary" size="large" className={styles.botao}>
                        Voltar para Home
                    </Button>
                </Link>
            </div>
        {character ? (
            <div className={styles.filmCard}>
                <div className={styles.imageContainer}>
                    <img src={character.image} alt={character.name} className={styles.image} />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.filmTitle}>{character.name}</h1>
                    <p className={styles.filmSubTitle}>Primeira aparição: {character.firstEp}</p>
                    <p className={styles.conteudo}>{character.description}</p>
                </div>
            </div>
        ) : (
            <p className={styles.loading}>Loading character data...</p>
        )}
    </div>
)

}

