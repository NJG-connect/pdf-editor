import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import fs from 'fs';
import path from 'path';
import { UserForm } from '../scenes';
import People from '../types/people';
import createId from '../utils/createId';
import { generateSpecificPdf, getTextFromPdfUrl } from '../utils/pdf';

const bddPath = path.join(__dirname, './../.data.json');

const CreateUserScreen: React.FC = () => {
  const history = useHistory();
  const location = useLocation<{ indexPeopleUpdate: number | undefined }>();

  const [peoples, setPeoples] = useState<People[]>([]);
  const [indexPeople, setIndexPeople] = useState<number | undefined>(undefined);
  function handleGoBack() {
    history.goBack();
  }

  function handleCreateUser(data: People[]) {
    const newPeople = { id: createId() };
    data.push(newPeople);
    fs.writeFileSync(bddPath, JSON.stringify(data));
    setIndexPeople(data.length - 1);
    setPeoples(data);
  }

  function handleUpdateUser(data: People[]) {
    const index = location.state.indexPeopleUpdate;
    setIndexPeople(index);
    setPeoples(data);
  }

  useEffect(() => {
    (() => {
      const data: People[] = JSON.parse(fs.readFileSync(bddPath, 'utf8'));
      if (location.state) {
        handleUpdateUser(data);
      } else {
        handleCreateUser(data);
      }
    })();
  }, [location.state]);

  function onSaveInfoUser(newPeople: People) {
    const newPeoples = [...peoples];
    newPeoples[indexPeople!] = newPeople;
    setPeoples(newPeoples);
    fs.writeFileSync(bddPath, JSON.stringify(newPeoples));
  }

  function onCreateTicket() {}

  async function onGeneratePDF() {
    const pdfPath = path.join(__dirname, './../generated_pdf.pdf');
    const objForPrint: {
      immatrucalation: string;
      marque: string;
      modele: string;
      propriétaire: string;
      price: string | number;
    } = {
      immatrucalation:
        indexPeople !== undefined &&
        Object.prototype.hasOwnProperty.call(
          peoples[indexPeople],
          'immatrucalation'
        )
          ? peoples[indexPeople].immatrucalation || ''
          : '',
      marque:
        indexPeople !== undefined &&
        Object.prototype.hasOwnProperty.call(peoples[indexPeople], 'marque')
          ? peoples[indexPeople].marque || ''
          : '',
      modele:
        indexPeople !== undefined &&
        Object.prototype.hasOwnProperty.call(peoples[indexPeople], 'modele')
          ? peoples[indexPeople].modele || ''
          : '',
      propriétaire:
        indexPeople !== undefined &&
        Object.prototype.hasOwnProperty.call(
          peoples[indexPeople],
          'propriétaire'
        )
          ? peoples[indexPeople].propriétaire || ''
          : '',
      price:
        indexPeople !== undefined &&
        Object.prototype.hasOwnProperty.call(peoples[indexPeople], 'price')
          ? peoples[indexPeople].price || ''
          : '',
    };
    await generateSpecificPdf(pdfPath, objForPrint);
  }

  async function onReadPDF(urlPathFile: string) {
    const result = await getTextFromPdfUrl(urlPathFile);
    if (result.sucess && result.data !== undefined) {
      onSaveInfoUser({
        ...peoples[indexPeople!],
        assurrancePrice: result.data,
        finalPrice: (
          Number(peoples[indexPeople!].price || 0) - Number(result.data || 0)
        ).toString(),
      });
    }
  }

  const people = useMemo(() => {
    if (indexPeople === undefined || peoples.length === 0) {
      return undefined;
    }
    return peoples[indexPeople];
  }, [indexPeople, peoples]);

  return (
    <UserForm
      onReadPDF={onReadPDF}
      onGoBack={handleGoBack}
      onCreateTicket={onCreateTicket}
      people={people}
      onSaveInfoUser={onSaveInfoUser}
      onGeneratePDF={onGeneratePDF}
    />
  );
};

export default CreateUserScreen;
