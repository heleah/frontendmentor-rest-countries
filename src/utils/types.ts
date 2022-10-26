export type Country = {
  name: CountryName;
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

type CountryName = {
  common: string;
  official: string;
  nativeName: { [lang: string]: { official: string; common: string } };
};

export type Border = {
  name: CountryName;
  cca3: string;
};

/* type Currency = {
  [curr: string]: string;
};

type Language = {
  [short: string]: string;
}; */
