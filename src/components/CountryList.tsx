import CountryCard from "./CountryCard";
import { Country } from "../utils/types";

interface CountryListProps {
  countries: Country[];
}

const CountryList = ({ countries }: CountryListProps) => {
  return (
    <section className="d-md-flex flex-md-wrap gap-md-5 justify-content-md-center">
      {countries.map((country: Country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </section>
  );
};

export default CountryList;
