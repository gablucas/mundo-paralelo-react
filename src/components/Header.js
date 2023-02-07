import React from 'react';
import logo from '../assets/imgs/logo_mundo_paralelo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <nav>
        <a className={styles.logo} href="/"><img src={logo} alt="" width="170"/></a>
        <ul>
          <li><a href="#conheca">CONHEÇA O LUGAR</a></li>
          <li><a href="/">ATIVIDADES</a></li>
          <li><a href="/">CONTATO</a></li>
          <li><a href="/">LELO SKATEBOARDS</a></li>
          <li><a href="/">CAFUNDÓ BAR CULTURAL</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header