import style from './sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img className={style.cover} src="https://images.unsplash.com/photo-1625535069654-cfeb8f829088?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&authuser=0" alt="imagem-sidebar" />
      <div className={style.profile}>
        <img className={style.avatar} src='https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png?authuser=0' alt="imagem-usuario"/>
        <strong>Kauã</strong>
        <span>Estudante</span>
      </div>

      <footer>
        <a href="">@seuGITHUB</a>
      </footer>
    </aside>
  )
}
