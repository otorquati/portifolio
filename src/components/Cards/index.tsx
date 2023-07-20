import styles from './Cards.module.css'
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython} from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import {Item} from '../../types/Item'

type Props = { 
  list: Item }

export const Cards = ({list}:Props) => {
  return ( 
    <section className={styles.card}>
      <div className={styles.card_header}>
        <h3>{list.name}</h3>
      </div>
      <p>{list.description}</p>
      <div className={styles.card_footer}>
        <div className={styles.card_icones}>
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaReact />
        <FaPython />
        </div>
        <Link to={list.html_url} className={styles.card_btn}>
          <BsArrowRight/>
        </Link>
      </div>
    </section>
   );
}

export default Cards;