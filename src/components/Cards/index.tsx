import styles from './Cards.module.css'
import {FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
function Cards() {
  return ( 
    <section className={styles.card}>
      <h3>Título do projeto</h3>
      <p>Texto descritivo</p>
      <div className={styles.card_footer}>
        <div className={styles.card_icones}>
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaReact />
        </div>
        <button className={styles.card_btn}>
          <BsArrowRight/>
        </button>
      </div>
    </section>
   );
}

export default Cards;