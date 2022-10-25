import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import { Country } from "../utils/types";

interface CountryDetailsProps {
  country: Country;
}

const CountryDetails = (props: CountryDetailsProps) => {
  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = props.country;

  console.log("details", props.country);

  return (
    props.country && (
      <>
        <Image
          src={flags.png}
          alt={`Flag of ${name.common}`}
          className="py-4"
          style={{ width: "inherit" }}
        />
        <section className="lh-lg">
          <h3>{name.common}</h3>
          <br />
          <p>
            <span className="fw-semibold">Native Name:</span>{" "}
            {Object.values(name.nativeName)[0]["common"]}
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
          <br />
          <p>
            <span className="fw-semibold">Top Level Domain:</span>{" "}
            {tld.join(", ")}
          </p>
          <p>
            <span className="fw-semibold">Currencies:</span>{" "}
            {currencies &&
              Object.values(currencies)
                .map((curr: any) => curr.name)
                .join(", ")}
          </p>
          <p>
            <span className="fw-semibold">Languages:</span>{" "}
            {languages &&
              Object.values(languages)
                .map((lang) => lang)
                .join(", ")}
          </p>
          <br />
          {borders?.length !== 0 && (
            <>
              <h5>Border Countries:</h5>
              {Object.values(borders).map((border) => (
                <Badge
                  key={border}
                  bg="light"
                  text="dark"
                  className="m-1 p-2 shadow"
                >
                  {border}
                </Badge>
              ))}
            </>
          )}
        </section>
      </>
    )
  );
};

export default CountryDetails;
