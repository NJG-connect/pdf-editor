import React, { useEffect, useState } from 'react';
import images from '../assets/images';
import { SelectWithSearchBar, TextInput } from '../components';
import styles from './UserForm.module.css';
import People, { marquesAuto, assurances } from '../types/people';
import createId from '../utils/createId';

interface Props {
  onGoBack: () => void;
  people?: People;
  onSubmit: () => void;
}

const initialPeople: People = {
  id: createId(),
  immatrucalation: '',
  marque: undefined,
  modele: '',
  assurance: undefined,
  propriétaire: '',
  email: '',
  dateDepot: undefined,
  dateRecuperation: undefined,
  technicalControl: '',
  price: undefined,
};

const UserForm = ({ onGoBack, people: peopleProps, onSubmit }: Props) => {
  const [people, setInfoPeople] = useState(peopleProps || initialPeople);

  useEffect(() => {
    if (peopleProps) {
      setInfoPeople(peopleProps);
    }
  }, [peopleProps]);

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={images.logoEntreprise} alt="logo" />
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <div onClick={onGoBack} aria-hidden="true">
            <img className={styles.logoBack} src={images.back} alt="logo" />
          </div>
          <p className={styles.title}>Création</p>
        </div>
        <div className={styles.form}>
          <TextInput
            label="Immatriculation"
            onChange={(value: string) => {
              setInfoPeople({ ...people, immatrucalation: value });
            }}
            value={people.immatrucalation}
          />
          <SelectWithSearchBar
            placeholder="Marque"
            value={people.marque}
            data={marquesAuto}
            onSelectIndex={(value) => {
              setInfoPeople({ ...people, marque: marquesAuto[value] });
            }}
          />
          <TextInput
            label="Modèle"
            onChange={(value: string) => {
              setInfoPeople({ ...people, modele: value });
            }}
            value={people.modele}
          />
          <SelectWithSearchBar
            placeholder="Assurance"
            value={people.assurance}
            data={assurances}
            onSelectIndex={(value) => {
              setInfoPeople({ ...people, assurance: assurances[value] });
            }}
          />
          <TextInput
            label="Propriétaire :"
            onChange={(value: string) => {
              setInfoPeople({ ...people, propriétaire: value });
            }}
            value={people.propriétaire}
          />
          <TextInput
            label="Mail :"
            onChange={(value: string) => {
              setInfoPeople({ ...people, email: value });
            }}
            value={people.email}
          />
          <TextInput
            label="Date de Dépot :"
            onChange={(value: string) => {
              setInfoPeople({ ...people, dateDepot: new Date(value) });
            }}
            value={people.dateDepot ? people.dateDepot.toString() : ''}
          />
          <TextInput
            label="Date de Récupération :"
            onChange={(value: string) => {
              setInfoPeople({ ...people, dateRecuperation: new Date(value) });
            }}
            value={
              people.dateRecuperation ? people.dateRecuperation.toString() : ''
            }
          />
          <TextInput
            label="Controle Technique :"
            onChange={(value: string) => {
              setInfoPeople({ ...people, technicalControl: value });
            }}
            value={people.technicalControl}
          />
          <TextInput
            label="Prix de Récupération :"
            onChange={(value: string) => {
              setInfoPeople({ ...people, price: Number(value) });
            }}
            value={people.price ? people.price.toString() : ''}
          />
        </div>
        <div className={styles.contentButton}>
          <div className={styles.dragAndDropContent}>
            <p>Drag & Drop</p>
          </div>
          <div className={styles.clustButton}>
            <div className={styles.button}>
              <p>Devis Assurance</p>
              <img className={styles.logoButton} src={images.pdf} alt="logo" />
            </div>
            <div
              className={styles.button}
              onClick={onSubmit}
              aria-hidden="true"
            >
              <p>Ticket Client</p>
              <img
                className={styles.logoButton}
                src={images.ticket}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.splashscreen} />
    </div>
  );
};

UserForm.defaultProps = {
  people: undefined,
};

export default UserForm;
