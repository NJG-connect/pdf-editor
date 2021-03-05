import React, { useState } from 'react';
import images from '../assets/images';
import { SelectWithSearchBar } from '../components';
// import styles from './Home.css';
import styles from './Home.module.css';

interface Props {
  onCreateUser: () => void;
}

const data = ['XYZ-jeremy nohile', 'ABC-cindy de la fuente'];

const Home = ({ onCreateUser }: Props) => {
  const [search] = useState(undefined);
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={images.logoEntreprise} alt="logo" />

      <div className={styles.splashscreen} />
      <div className={styles.content}>
        <div className={styles.contentAvatar}>
          <p className={styles.username}>Jeremy Nohile</p>
          <img className={styles.logoAvatar} src={images.avatar} alt="logo" />
        </div>
        <div className={styles.form}>
          <SelectWithSearchBar
            placeholder="Immatriculation, Nom client, ..."
            value={search}
            data={data}
            onSelectIndex={(value) => {
              console.log('value : ', value);
            }}
          />
          <div
            className={styles.contentlogoMore}
            onClick={onCreateUser}
            aria-hidden="true"
          >
            <img className={styles.logoMore} src={images.more} alt="logo" />
          </div>
        </div>
        <div className={styles.contentButton}>
          <div className={styles.button}>
            <p>Exporter la base de donnée</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
