import React, { useEffect, useState } from 'react';
import images from '../assets/images';
import { SelectWithSearchBar, TextInput } from '../components';
import styles from './UserForm.module.css';
import People, { marquesAuto, assurances } from '../types/people';
import createId from '../utils/createId';

interface Podeoded extends HTMLElement {
  files?: OneFile[];
}

interface OneFile {
  path: string;
}
interface Props {
  onGoBack: () => void;
  people?: People;
  onCreateTicket: () => void;
  onSaveInfoUser: (value: People) => void;
  onGeneratePDF: () => void;
  onReadPDF: (path: string) => void;
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

const UserForm = ({
  onGoBack,
  people: peopleProps,
  onCreateTicket,
  onSaveInfoUser,
  onGeneratePDF,
  onReadPDF,
}: Props) => {
  const [people, setInfoPeople] = useState(
    peopleProps ? { ...initialPeople, ...peopleProps } : initialPeople
  );

  useEffect(() => {
    if (peopleProps) {
      setInfoPeople(peopleProps);
    }
  }, [peopleProps]);

  function onEntriesValue(newPeople?: People) {
    if (newPeople) {
      onSaveInfoUser(newPeople);
    } else {
      onSaveInfoUser(people);
    }
  }

  function trySomething() {
    const fileUpload: Podeoded | null = document.getElementById('file');
    if (fileUpload && fileUpload.files && fileUpload.files.length) {
      const { path } = fileUpload.files[0];
      onReadPDF(path);
    }
  }

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
            onBlur={() => onEntriesValue()}
          />
          <SelectWithSearchBar
            placeholder="Marque"
            value={people.marque}
            data={marquesAuto}
            onSelectIndex={(value) => {
              setInfoPeople({ ...people, marque: marquesAuto[value] });
              onEntriesValue({ ...people, marque: marquesAuto[value] });
            }}
          />
          <TextInput
            label="Modèle"
            onChange={(value: string) => {
              setInfoPeople({ ...people, modele: value });
            }}
            value={people.modele}
            onBlur={() => onEntriesValue()}
          />
          <SelectWithSearchBar
            placeholder="Assurance"
            value={people.assurance}
            data={assurances}
            onSelectIndex={(value) => {
              setInfoPeople({ ...people, assurance: assurances[value] });
              onEntriesValue({ ...people, assurance: assurances[value] });
            }}
          />
          <TextInput
            label="Propriétaire :"
            onChange={(value: string) => {
              setInfoPeople({ ...people, propriétaire: value });
            }}
            value={people.propriétaire}
            onBlur={() => onEntriesValue()}
          />
          <TextInput
            label="Mail :"
            onChange={(value: string) => {
              setInfoPeople({ ...people, email: value });
            }}
            value={people.email}
            onBlur={() => onEntriesValue()}
          />
          <TextInput
            label="Date de Dépot :"
            onChange={(value: string) => {
              setInfoPeople({ ...people, dateDepot: new Date(value) });
            }}
            value={people.dateDepot ? people.dateDepot.toString() : ''}
            onBlur={() => onEntriesValue()}
          />
          <TextInput
            label="Date de Récupération :"
            onChange={(value: string) => {
              setInfoPeople({ ...people, dateRecuperation: new Date(value) });
            }}
            value={
              people.dateRecuperation ? people.dateRecuperation.toString() : ''
            }
            onBlur={() => onEntriesValue()}
          />
          <TextInput
            label="Controle Technique :"
            onChange={(value: string) => {
              setInfoPeople({ ...people, technicalControl: value });
            }}
            value={people.technicalControl}
            onBlur={() => onEntriesValue()}
          />
          <TextInput
            label="Prix de Récupération :"
            onChange={(value: string) => {
              setInfoPeople({ ...people, price: Number(value) });
            }}
            value={people.price ? people.price.toString() : ''}
            onBlur={() => onEntriesValue()}
          />

          <TextInput
            label="Prix de l'assurance :"
            onChange={(value: string) => {
              setInfoPeople({ ...people, assurrancePrice: value });
            }}
            value={people.assurrancePrice}
            onBlur={() => onEntriesValue()}
          />

          <TextInput
            label="Prix Total :"
            onChange={(value: string) => {
              setInfoPeople({ ...people, finalPrice: value });
            }}
            value={people.finalPrice}
            onBlur={() => onEntriesValue()}
            disabled
          />
        </div>
        <div className={styles.contentButton} id="send">
          <div className={styles.dragAndDropContent}>
            Drag & Drop
            <input
              type="file"
              className={styles.inputFile}
              accept=".pdf"
              onChange={trySomething}
              id="file"
            />
          </div>
          <div className={styles.clustButton}>
            <div
              className={styles.button}
              onClick={onGeneratePDF}
              aria-hidden="true"
            >
              <p>Devis Assurance</p>
              <img className={styles.logoButton} src={images.pdf} alt="logo" />
            </div>
            <div
              className={styles.button}
              onClick={onCreateTicket}
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
