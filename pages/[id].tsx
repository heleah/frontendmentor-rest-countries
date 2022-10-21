import Header from "../src/components/Header";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Country } from "../src/utils/types";

export async function getStaticPaths() {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=cca3");
  const data = await res.json();

  const paths = data.map((e: Country) => ({
    params: { id: e.cca3 },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }: any) {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${params.id}?fields=cca3,name,flags,population,region,capital,subregion,tld,currencies,borders`
    );
    const country = await res.json();

    return {
      props: { country },
    };
  } catch (e) {
    console.log(e);
  }
}

interface CountryDetailsProps {
  country: Country;
}

const CountryDetails = ({ country }: CountryDetailsProps) => {
  console.log({ country });

  /* const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
  } = country;
 */
  return (
    <>
      <Header />
      <main className="p-3" style={{ width: "90vw" }}>
        <Button variant="light" className="my-4 shadow">
          Back
        </Button>
        {/* <Image
          src={flags.png}
          alt={`Flag of ${name.common}`}
          className="py-4"
        />
        <h3>{name.common}</h3>
        <p>
          <span className="fw-semibold">Native Name:</span>{" "}
          {name.nativeName[0].common}
        </p>
        <p>
          <span className="fw-semibold">Population:</span>{" "}
          {population.toLocaleString("en-US")}
        </p>
        <p>
          <span className="fw-semibold">Region:</span> {region}
        </p>
        <p>
          <span className="fw-semibold">Sub Region:</span> {subregion}
        </p>
        <p>
          <span className="fw-semibold">Capital:</span> {capital}
        </p>
        <p>
          <span className="fw-semibold">Top Level Domain:</span> {tld}
        </p>
        <p>
          <span className="fw-semibold">Currencies:</span> {currencies[0].name}
        </p>
        <p>
          <span className="fw-semibold">Languages:</span> {languages[0]}
        </p> */}
      </main>
    </>
  );
};

export default CountryDetails;
