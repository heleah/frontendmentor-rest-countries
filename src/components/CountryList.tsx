import CountryCard from "./CountryCard";
import { Country } from "../utils/types";

interface CountryListProps {
  countries: Country[];
}

const CountryList = ({ countries }: CountryListProps) => {
  return (
    <>
      {countries.map((country: Country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </>
  );
};

export default CountryList;
