"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "antd";

import styles from "./egg.module.css";

const FilmList = () => {
    const url = "http://localhost:5000/easteregg/";

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url);
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
                <h1 className={styles.title}>Curiosidades</h1>
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
                            <h2 className={styles.filmTitle}>{film.secrets}</h2>
                            <p className={styles.director}> {film.facts}</p>
                            <p className={styles.year}>{film.theories}</p>
                            <div className={styles.rating}>
                                <Link href="/" className={styles.link}>
                                    <span className={styles.score}>{film.rt_score}%</span>
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