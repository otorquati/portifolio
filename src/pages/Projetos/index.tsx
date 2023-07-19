import Cards from '../../components/Cards';
import styles from './Projetos.module.css'

function Projetos() {
  return ( 
    <>
      <section className={styles.projetos}>
        <h1>Projetos</h1>
        <div className={styles.projetos_cards}>
          <Cards />
          <Cards />
          <Cards />
        </div>
      </section>
    </>
   );
}

export default Projetos;