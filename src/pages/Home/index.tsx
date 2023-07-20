import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
  return ( 
      <section className={styles.home}>
        <div  className={styles.apresentacao}>
          <p>
            Olá sou <br/>
            <span>Osvaldo Torquati</span><br/>
            Consutor & Dev Full Stack
          </p>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
            Saiba mais sobre mim...
          </Link>
        </div>
        <figure>
          <img className={styles.home_img} src="/product_iteration.svg" alt="Imagem de Home" /></figure>
      </section>
   );
}

export default Home;