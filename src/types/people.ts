interface People {
  id: string;
  immatrucalation?: string;
  marque?: MarquesAuto;
  modele?: string;
  assurance?: Assurances;
  propriétaire?: string;
  email?: string;
  dateDepot?: Date;
  dateRecuperation?: Date;
  technicalControl?: string;
  price?: number;
  assurrancePrice?: string;
  finalPrice?: string;
}

export enum MarquesAuto {
  'Alfa Romeo' = 'Alfa Romeo',
  'Audi' = 'Audi',
  'Bentley' = 'Bentley',
  'BMW' = 'BMW',
  'Bugatti' = 'Bugatti',
  'Chevrolet' = 'Chevrolet',
  'Citroën' = 'Citroën',
  'Dodge' = 'Dodge',
  'Ferrari' = 'Ferrari',
  'Ford' = 'Ford',
  'Harley-Davidson' = 'Harley-Davidson',
  'Hyundai' = 'Hyundai',
  'Jaguar' = 'Jaguar',
  'Maserati' = 'Maserati',
  'Mazda' = 'Mazda',
  'Mustang' = 'Mustang',
  'Peugeot' = 'Peugeot',
  'Porsche' = 'Porsche',
  'Renault' = 'Renault',
  'Subaru' = 'Subaru',
  'Tesla' = 'Tesla',
  'Toyota' = 'Toyota',
  'Volkswagen' = 'Volkswagen',
  'Volvo' = 'Volvo',
  'Opel' = 'Opel',
  'Kia Motors' = 'Kia Motors',
}
export const marquesAuto: MarquesAuto[] = [
  MarquesAuto['Alfa Romeo'],
  MarquesAuto.Audi,
  MarquesAuto.Bentley,
  MarquesAuto.BMW,
  MarquesAuto.Bugatti,
  MarquesAuto.Chevrolet,
  MarquesAuto['Citroën'],
  MarquesAuto.Dodge,
  MarquesAuto.Ferrari,
  MarquesAuto.Ford,
  MarquesAuto['Harley-Davidson'],
  MarquesAuto.Hyundai,
  MarquesAuto.Jaguar,
  MarquesAuto.Maserati,
  MarquesAuto.Mazda,
  MarquesAuto.Mustang,
  MarquesAuto.Peugeot,
  MarquesAuto.Porsche,
  MarquesAuto.Renault,
  MarquesAuto.Subaru,
  MarquesAuto.Tesla,
  MarquesAuto.Toyota,
  MarquesAuto.Volkswagen,
  MarquesAuto.Volvo,
  MarquesAuto.Opel,
  MarquesAuto['Kia Motors'],
];

export enum Assurances {
  'NEXX' = 'NEXX',
  'GAN' = 'GAN',
  'HYPERASSUR' = 'HYPERASSUR',
  'LE LYNX' = 'LE LYNX',
  'MACIF' = 'MACIF',
  'MAAF' = 'MAAF',
  'LES FURETS' = 'LES FURETS',
  'MATMUT' = 'MATMUT',
  'AXA' = 'AXA',
  'EUROFIL' = 'EUROFIL',
  'DIRECT ASSURANCE' = 'DIRECT ASSURANCE',
  'ASSURONLINE' = 'ASSURONLINE',
  'GENERALI ASSURANCES' = 'GENERALI ASSURANCES',
  'ALLIANZ' = 'ALLIANZ',
  'NETASSURANCES' = 'NETASSURANCES',
  'GMF' = 'GMF',
  'AVIVA' = 'AVIVA',
  'MMA' = 'MMA',
  'BANQUE POSTALE' = 'BANQUE POSTALE',
  'AMAGUIZ' = 'AMAGUIZ',
}

export const assurances = [
  Assurances.MACIF,
  Assurances.NEXX,
  Assurances.GAN,
  Assurances.HYPERASSUR,
  Assurances['LE LYNX'],
  Assurances.MACIF,
  Assurances.MAAF,
  Assurances['LES FURETS'],
  Assurances.MATMUT,
  Assurances.AXA,
  Assurances.EUROFIL,
  Assurances['DIRECT ASSURANCE'],
  Assurances.ASSURONLINE,
  Assurances['GENERALI ASSURANCES'],
  Assurances.ALLIANZ,
  Assurances.NETASSURANCES,
  Assurances.GMF,
  Assurances.AVIVA,
  Assurances.MMA,
  Assurances['BANQUE POSTALE'],
  Assurances.AMAGUIZ,
];

export default People;
