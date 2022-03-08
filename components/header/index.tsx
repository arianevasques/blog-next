import styles from  './header.module.css'

export default function Home() {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Olá Mundo</h1>
    </header>
  )
}