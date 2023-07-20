import Techs from '../../components/Techs';
import styles from './Sobre.module.css';
import whatsapp from './images/icons8-whatsapp.svg'
// import das imagens
import avatar from './images/Torquati_180x180.png'

function Sobre() {
  return ( 
    <>
        <section className={styles.sobre}>
          <div className={styles.bio}>
            <img className={styles.avatar} src={avatar} alt="" />
            <div className={styles.textos}>
              <h2>Sobre</h2>
              <p><span>Sou Osvaldo Torquati </span><br />
                 <strong>Consultor da Qualidade</strong> e <br/>
                 Dev Full Stack </p>
              <p>Trabalho auxiliando empresas na implementação e auditoria <br />
              de sistemas de gestão da qualidade e meio ambiente</p>
              <p>Atuo também no desenvolvimento de aplicações <br/>
              web com foco na experiência do usuário</p>
              <p>
              <img className={styles.sobre_img} src={whatsapp} alt="imagem-whatsapp" /> (12) 988-395-065
              </p>
            </div>
          </div>
          <Techs />
        </section>
    </>
   );
}

export default Sobre;