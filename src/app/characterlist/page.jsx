"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "antd";
import styles from "./personagem.module.css";

const FilmList = () => {
    const apiURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';


    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                setLoading(true);
                const response = await axios.get(apiURL + "/characters");
                setFilms(response.data);
                setLoading(false);
            } catch (error) {
                console.log("Erro ao buscar os filmes na API");
                setError("Não foi possível carregar os filmes. Tente novamente mais tarde.");
                setLoading(false);
            }
        };
        fetchFilms();
    }, []);

    if (loading) {
        return (
            <div className={styles.loading}>
                Carregando filmes...
            </div>
        )
    }

    if (error) {
        return (
            <div className={styles.error}>
                {error}
            </div>
        )
    }
    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <h1 className={styles.title}>Personagens de Stranger Things</h1>
                <Link href="/" className={styles.link}>
                    <Button type="primary" size="large" className={styles.botao}>
                        Voltar para Home
                    </Button>
                </Link>
            </div>
            <div className={styles.filmGrid}>
                {films.map((film) => (
                    <div key={film.id} className={styles.filmCard}>
                        <div className={styles.imageContainer}>
                            <img src={film.image} alt={film.title} className={styles.image} />
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.filmTitle}>{film.name}</h2>
                            <h2 className={styles.filmSubTitle}>Primeira aparição: {film.firstEp}</h2>
                            <div className={styles.rating}>
                                <Link href={`/characterlist/${film.id}`} className={styles.link}>
                                    <span className={styles.score}>{film.rt_score}Saiba Mais</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FilmList;