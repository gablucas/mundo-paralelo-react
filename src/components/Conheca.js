import React, { useRef } from 'react';
import styles from './Conheca.module.css';
import Title from './Title';
import { motion } from 'framer-motion';


import imagem1 from '../assets/imgs/299543462_496611789136150_5657465179900029168_n.jpg';
import imagem2 from '../assets/imgs/300058936_499694242161238_5228224882406012160_n.jpg';
import imagem3 from '../assets/imgs/312324696_568267931970535_9211059687345466237_n.jpg';
import imagem4 from '../assets/imgs/312443958_558366792960649_345075046440387710_n.jpg';
import imagem5 from '../assets/imgs/314027274_571099978353997_7474914187686835569_n.jpg';
import imagem6 from '../assets/imgs/315986367_585164046947590_3521420843144914524_n.jpg';

import surf from '../assets/surfing.png';
import surfskate from '../assets/skate-board.png';
import helmet from '../assets/helmet.png';
import cool from '../assets/cool.png';

const images = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6];

const Conheca = () => {
  const [leftConstraint, setLeftConstraint] = React.useState(0);
  const imageContainer = useRef(null);

  React.useEffect(() => {
    const element = imageContainer.current;
    setLeftConstraint(element.scrollWidth - element.offsetWidth)
  }, [leftConstraint])

  return (
    <section id='conheca' className={`${styles.conheca}`}>
      <Title title={'Conheça o lugar'} />

      <div className='container'>
        <motion.div className={styles.carrouselContainer}>
          <motion.div ref={imageContainer} drag='x' dragConstraints={{ right: 0, left: -leftConstraint}} className={styles.carrousel}>
            {images.map((image, index) => (
              <img key={`image-${index}`} draggable='false' src={image} alt="" width='400'/>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.roleBackground}>

        <div className={styles.role}>
          <h2>O lugar ideal para os amantes do surf no concreto, para quem busca se divertir!</h2>

          <div>
            <div><img src={surf} alt="" width="64"/></div>
            <p>BORA SURFAR?</p>
            <p>R$ 10,00 a sessão</p>
          </div>

          <div>
          <div><img src={surfskate} alt="" width="64"/></div>
            <p>PEGA UM BOARD</p>  
            <p>Surfskates disponiveis pra você surfar</p>
          </div>

          <div>
          <div><img src={helmet} alt="" width="64"/></div>
            <p>PROTEJA SUAS IDEIAS</p>
            <p>Capacete disponivel e de uso obrigatório</p>
          </div>

          <div>
            <div><img src={cool} alt="" width="64"/></div>
            <p>DIVIRTA-SE</p>
            <p>Essa é a onda!</p>
          </div>
        </div>

      </div>

      

      {/* <DisplayImage image={pista} /> */}
    </section>
  )
}

export default Conheca