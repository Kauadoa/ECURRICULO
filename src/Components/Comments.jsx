import styles from "./comments.module.css";

export function Comments() {
  return (
    <div className={styles.comments}>
      <img src="https://cdn3.iconfinder.com/data/icons/office-186/64/16_hard_skills_skill_portfolio_book_business_office-512.png?authuser=0" />
      <div className={styles.commentsBox}>
        <div className={styles.commentsContent}>
          <header>
            <div>
              <strong>Expericência 1</strong>
            </div>
          </header>
          <p>insira sua Experiência</p>
        </div>
      </div>
    </div>
  );
}
