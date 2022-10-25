export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: { [lang: string]: { official: string; common: string } };
  };
  tld: string[];
  cca3: string;
  currencies: any;
  capital: [];
  region: string;
  subregion: string;
  languages: any;
  borders: string[];
  population: number;
  flags: { png: string; svg: string };
};

/* type Currency = {
  [curr: string]: string;
};

type Language = {
  [short: string]: string;
}; */
