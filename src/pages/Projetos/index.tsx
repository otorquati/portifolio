import { useEffect, useState } from 'react';
import Cards from '../../components/Cards';
import styles from './Projetos.module.css'

function Projetos() {

  const [repositories,setRepositories] = useState([])

  useEffect(() => {
      const buscarRepositorios = async () => {
        const response = await fetch('https://api.github.com/users/otorquati/repos')
        const data:Array = await response.json()
        setRepositories(data)
      }
      buscarRepositorios()
  },[])
  return ( 
      <section className={styles.projetos}>
        <h2>Projetos</h2>
        {
          repositories.length >0 ? (
            <section className={styles.projetos_cards}>
              {
                repositories.map((repo) => (
                  <Cards 
                  name={repo.name}
                  description={repo.description}
                  html_url={repo.html_url} 
                  />
                ))
              }
          </section>
          ) : (
            <p>Não há projeto no repositório</p>
          )
        }
      </section>
   );
}

export default Projetos;