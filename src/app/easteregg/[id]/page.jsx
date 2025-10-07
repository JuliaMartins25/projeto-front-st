'use client'

import { useState, useEffect } from "react";
import styles from "./id.module.css";
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
                const res = await fetch(`${apiURL}/easteregg/${id}`);

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
            {character ? (
                <div className={styles.filmCard}>
                    <div className={styles.imageContainer}>
                        <img src={character.image} alt={character.name} className={styles.image} />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.filmTitle}>{character.filmTitle}</h1>
                        <p className={styles.conteudo}>{character.facts}</p>
                        <p className={styles.conteudo}>{character.secrets}</p>
                        <p className={styles.conteudo}>{character.theories}</p>
                    </div>
                </div>

            ) : (
                <p className={styles.loading}>Loading character data...</p>
            )}
            <div className={styles.header}>
                <Link href="/easteregg" className={styles.link}>
                    <Button type="primary" size="large" className={styles.botao}>
                        Voltar
                    </Button>
                </Link>
            </div>
        </div>
    )

}

