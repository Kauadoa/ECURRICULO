import { Comments } from "./Comments"
import styles from "./post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png?authuser=0"/>
            <div className={styles.authorinfo}>
                <strong>Nome do Profissional</strong>
                <span>Cargo/Função</span>
            </div>
            </div>
        </header>
        <div className={styles.content}>
            <p>SObre Você</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro hic id repellat, enim dolore quod assumenda numquam laboriosam ut debitis.</p>

            <p><a href="">Link Repositório</a></p>
            <p><a href="">Último Projeto</a></p>
        </div>

        <form className={styles.commentsForm}>
            <strong>Experiência Profissional</strong>
        </form>
        <div>
            <Comments />
        </div>

    </article>
  )
}
