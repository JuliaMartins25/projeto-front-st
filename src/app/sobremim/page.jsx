
import Image from "next/image";
import Link from "next/link";
import { Button } from "antd";
import styles from "./sobre.module.css";
import sobre from "../../../public/image/sobremim.jpg"


export default function Sobre() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.titulo}>SOBRE MIM</h1>
                <p className={styles.subtitulo}>Julia de Arruda Martins</p>

                <div className={styles.profile}>
                    <div className={styles.avatar}>
                        <Image src={sobre} fill className={styles.object} alt="Logo" />
                    </div>
                </div>

                <blockquote className={styles.texto}>
                    Quando comecei esse curso, eu não tinha muito interesse em programação. Sempre me identifiquei mais com outras áreas e via tudo isso como algo que eu precisava apenas cumprir. Mas, com o tempo, acabei me envolvendo mais do que imaginei.

                    Para o projeto final, escolhi um tema livre e decidi fazer algo relacionado a Stranger Things, minha série favorita. Foi uma forma de unir algo que gosto com o que estava aprendendo no curso. No início, eu achava que programar seria apenas seguir códigos e regras, mas aos poucos percebi o quanto é possível criar coisas legais e funcionais com isso.

                    Durante o desenvolvimento, percebi que o que realmente me interessava era o back-end, a parte lógica, onde tudo acontece por trás da interface. Gosto da ideia de fazer o sistema funcionar, de ver as informações sendo processadas e organizadas, mesmo que ninguém veja essa parte. Já o visual, o design, nunca foi o que mais me atraiu. Prefiro deixar o “bonito” para quem tem paciência e talento pra isso.

                    No fim das contas, esse projeto me mostrou que, mesmo quando a gente começa algo sem muito interesse, pode acabar descobrindo um lado novo e até se surpreendendo com o que é capaz de fazer.
                </blockquote>

                <div className={styles.botoes}>
                    <Link href="/" className={styles.link}>
                        <Button type="primary" size="large" className={styles.botao}>
                            Voltar para Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
