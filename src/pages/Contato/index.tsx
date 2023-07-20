import styles from './Contato.module.css';

// Importação dos ícones da página
import { GoMail } from 'react-icons/go';
import { BsInstagram , BsYoutube, BsGithub, BsLinkedin} from 'react-icons/bs';

function Contato() {
  return ( 
      <section className={styles.contato}>
      <h2>Contato</h2>
      <h3>Entre em contato</h3>
      <p>Para que possamos conversar mais sobre.</p>
        <div className={styles.icones}>
          <a href="mailto:torquati.osvaldo@gmail.com" target='_blank' rel='noopener noreferrer'>
            <GoMail className={styles.icone} />
          </a>
          <a href="https://www.instagram.com/djthorkuat/" target='_blank' rel='noopener noreferrer'>
            <BsInstagram className={styles.icone} />
          </a>
          <a href="https://www.youtube.com/channel/UCTeNEpZE2PcFleWXpia5_9w" target='_blank' rel='noopener noreferrer'>
            <BsYoutube className={styles.icone} />
          </a>
          <a href="https://github.com/otorquati" target='_blank' rel='noopener noreferrer'>
            <BsGithub className={styles.icone} />
          </a>
          <a href="https://www.linkedin.com/in/osvaldo-t-4a8b4439/" target='_blank' rel='noopener noreferrer'>
            <BsLinkedin className={styles.icone} />
          </a>
        </div>
      </section>
   );
}

export default Contato;