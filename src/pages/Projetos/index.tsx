import { useEffect, useState } from 'react';
import Cards from '../../components/Cards';
import styles from './Projetos.module.css'
import {Item} from '../../types/Item' 


function Projetos() {
  const [repositories,setRepositories] = useState<Item[]>([])

  useEffect(() => {
      const buscarRepositorios = async () => {

        const response = await fetch('https://api.github.com/users/otorquati/repos')
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data = await response.json()
        setRepositories(data)
        console.log(data)
      }
      buscarRepositorios()
  },[])
  return ( 
      <section className={styles.projetos}>
        <h2>Meus Projetos e Estudos</h2>
        {
          repositories.length > 0 ? (
            <section className={styles.projetos_cards}>
              {
                repositories.map((item) => (
                  <Cards list={item}   />
                ))
              }
          </section>
          ) : (
            <p>Carregando os projeto do repositório</p>
          )
        }
      </section>
   );
}

export default Projetos;