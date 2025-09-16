"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./personagem.module.css";

const FilmList =() => {
    const url = "http://localhost:5000/characters/";

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
            <h1 className={styles.title}>Personagens de Stranger Things</h1>
            <div className={styles.filmGrid}>
                {films.map((film) => (
                    <div key={film.id} className={styles.filmCard}>
                        <div className={styles.imageContainer}>
                            <img src={film.image} alt={film.title} className={styles.image} />
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.filmTitle}>{film.name}</h2>
                            <p className={styles.director}> {film.age}</p>
                            <p className={styles.year}>{film.release_date}</p>
                            <div className={styles.rating}>
                                <span className={styles.score}>{film.rt_score}%</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FilmList;