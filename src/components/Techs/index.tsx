import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'
import sql from './images/icon-sql.svg'
// Importacão do Estilo
import styles from './Techs.module.css'

function Techs() {
  return ( 
    <>
      <div className={styles.techs}>
      <h3>Techs</h3>
      <div className={styles.icones}>
        <img src={html} alt="icon do html" />
        <img src={css} alt="icon do css" />
        <img src={js} alt="icon do js" />
        <img src={react} alt="icon do react" />
        <img src={node} alt="icon do node" />
        <img src={sql} alt="icon do sql" />
      </div>
    </div>
    </>
   );
}

export default Techs;