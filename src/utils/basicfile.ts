import formatDate from './date';

interface Props {
  modele: string;
  marque: string;
  immatrucalation: string;
  propriétaire: string;
  price: string | number;
}
function htmlFormat({
  modele,
  marque,
  immatrucalation,
  propriétaire,
  price,
}: Props) {
  const html = `
  <html>
    <head>
      <meta charset="UTF-8">
      <title>PDF GENERATED</title>
    </head>
    <style type="text/css">
    body {
      padding: 20px 100px;
    }
      p {
        margin: 0;
        padding: 0;
        margin: 2px 0px ;
      }
      .logoEntreprise {
        height: 150px;
        width: auto;
      }
      .head {
        color: black;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
      }
      .object:first-child {
        margin-top: 50px;
      }
      .object {
        margin-bottom: 75px;
      }
      .footer {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        margin-right: 100px;
      }
      </style>
    <body>
      <img src="../assets/images/logoEntreprise.png" class="logoEntreprise"/>
      <div class="head">
        <p>MACIF</p>
        <p>6 avenue rené charot</p>
        <p>77200 - TORCY</p>
        <p>FRANCE</p>
      </div>
      <div>
        <p class="object">Objet : Remboursement des frais de réparation</p>
        <p class="object">Véhicule concerné : ${marque} ${modele} - ${immatrucalation}</p>
        <p>Bonjour,</p>
          <p> Par la présente, nous vous informons que la société BAKAUTO est intervenu sur le véhicule  </p>
          <p> de monsieur ${propriétaire} spécifié plus haut dans le cadre d'un diagnostic.  </p>
          <p>Il s'avère que les frais de réparation s'élève au montant de ${price}€ </p>
        
        <br />
        <p>
          Nous restons dans l'attente du montant de la part remboursé par votre agence afin de facturé la somme restante à notre client.
        </p>
        <br/>
        <p>Cordialement</p>
        <div class="footer">
         <p>Le ${formatDate(new Date(), '/')}</p>
         <p>A Lognes</p>
         <p> Monsieur PINTA Robert</p>
        </div>
      </div>
    </body>
  </html>`;
  return html;
}

export default htmlFormat;
