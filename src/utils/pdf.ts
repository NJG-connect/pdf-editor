import fs from 'fs';
import electron from 'electron';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
import htmlFormat from './basicfile';

const { BrowserWindow } = require('electron').remote;

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function getPriceAssuredFromText(str: string) {
  const stringFind = str.match(/nous vous informons que nous prenons (.*?)€/);
  return stringFind ? stringFind[1] : undefined;
}

async function getTextFromPdfUrl(filePath: string) {
  let result = { sucess: false, data: undefined };
  try {
    const data = fs.readFileSync(filePath);
    const doc = await pdfjsLib.getDocument({ data }).promise;
    const pageTexts = Array.from({ length: doc.numPages }, async (v, i) => {
      return (await (await doc.getPage(i + 1)).getTextContent()).items
        .map((token) => token.str)
        .join(' ');
    });
    const str = (await Promise.all(pageTexts)).join('');
    const price = getPriceAssuredFromText(str);
    result = { ...result, sucess: true };
    return { ...result, data: price };
  } catch (error) {
    console.log(error);
    return result;
  }
}

async function generateSpecificPdf(
  directionPath: string,
  people: {
    immatrucalation: string;
    marque: string;
    modele: string;
    propriétaire: string;
    price: string | number;
  }
) {
  const windowToPDF = new BrowserWindow({
    show: false,
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
    },
  }); // to just open the browser in background

  windowToPDF.loadURL(
    `data:text/html;charset=UTF-8,${encodeURIComponent(
      htmlFormat({
        immatrucalation: people.immatrucalation,
        marque: people.marque,
        modele: people.modele,
        propriétaire: people.propriétaire,
        price: people.price,
      })
    )}`,
    { baseURLForDataURL: '/' }
  );

  const option = {
    marginsType: 0,
    pageSize: 'A4',
    printBackground: true,
    printSelectionOnly: false,
    landscape: false,
  };
  windowToPDF.webContents.on('did-finish-load', () => {
    windowToPDF.webContents
      .printToPDF(option)
      .then((data: BigUint64Array) => {
        fs.writeFileSync(directionPath, data);
        electron.shell.openExternal(`file://${directionPath}`);
        windowToPDF.close();
        return true;
      })
      .catch((err: Error) => {
        console.log(err);
        windowToPDF.close();
        return false;
      });
  });
}

// eslint-disable-next-line import/prefer-default-export
export { getTextFromPdfUrl, generateSpecificPdf };
