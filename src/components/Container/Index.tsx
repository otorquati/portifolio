import {ReactNode, ReactElement} from 'react';
import styles from './Container.module.css'


function Container({ children }:{children: ReactNode}): ReactElement {
  return (
    <section className={styles.container}>
      {children}
    </section>
    );
}

export default Container;