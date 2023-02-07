import React from 'react';
import styles from './Home.module.css';


const Home = () => {
  return (
    <main className={`${styles.home} container`} >

      <div className='animeLeft'>
        <p>Rua Pastor Oswald Hesse, 388 - Ribeirão Fresco, Blumenau - SC, 89015-100</p>
        <p>Segunda a Domingo - 14:00 ás 22:00</p>
        <p>Surfar todo dia, essa é a onda!</p>
      </div>

    </main>
  )
}

export default Home