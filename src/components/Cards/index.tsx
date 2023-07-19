import styles from './Cards.module.css'
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython} from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';

function Cards({name, description, html_url}) {
  return ( 
    <section className={styles.card}>
      <div className={styles.card_header}>
        <h3>{name}</h3>
      </div>
      <p>{description}</p>
      <div className={styles.card_footer}>
        <div className={styles.card_icones}>
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaReact />
        <FaPython />
        </div>
        <Link to={html_url} className={styles.card_btn}>
          <BsArrowRight/>
        </Link>
      </div>
    </section>
   );
}

export default Cards;