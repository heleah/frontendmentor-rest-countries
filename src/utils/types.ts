export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: { [lang: string]: { official: string; common: string } };
  };
  tld: string;
  cioc: string;
  currencies: { [curr: string]: { name: string; symbol: string } };
  capital: [];
  region: string;
  subregion: string;
  languages: Language;
  borders: string[];
  population: number;
  flags: { png: string; svg: string };
};

type Language = {
  [short: string]: string;
};
