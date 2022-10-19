export type Country = {
  name: { common: string; official: string };
  cioc: string;
  capital: [];
  region: string;
  population: number;
  flags: { png: string; svg: string };
};
