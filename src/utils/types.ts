export type Country = {
  name: string;
  nativeName: string;
  topLevelDomain: string[];
  alpha3Code: string;
  currencies: any;
  capital: string;
  region: string;
  subregion: string;
  languages: any;
  borders: string[];
  population: number;
  flags: { png: string; svg: string };
};

export type Border = {
  name: string;
  alpha3Code: string;
};
