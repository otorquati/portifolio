import Container from '../../components/Container/Index';
import Header from '../../components/Header';
import styles from './Home.module.css'

function Home() {
  return ( 
    <>
      <Header />
      <Container>
      <section className={styles.home}>
        <div  className='apresentacao'>
          <p>
            Olá sou <br/>
            <span>Osvaldo Torquati</span><br/>
            Dev Full Stack
          </p>
          <link to="/sobre" className='btn btn-red'>
            Saiba mais sobre mim...
          </link>
        </div>
        <figure>
          <img className='img-home' src="/public/developer-red.svg" alt="Imagem de Home" /></figure>
      </section>
      </Container>
    </>
   );
}

export default Home;