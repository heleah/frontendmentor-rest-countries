import Card from "react-bootstrap/Card";
import { Country } from "../utils/types";
import { useRouter } from "next/router";

interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
  const router = useRouter();
  const { name, capital, population, region, flags, alpha3Code } = country;

  return (
    <Card
      className="my-4 border border-0 shadow-sm country-card"
      onClick={() => router.push(`/${alpha3Code.toLowerCase()}`)}
    >
      <Card.Img
        variant="top"
        src={flags.png}
        role="button"
        className="card-img"
      />
      <Card.Body className="p-4 pb-5 card-body">
        <Card.Title className="fw-bold">{name}</Card.Title>
        <Card.Text>
          <span className="fw-semibold">Population:</span>{" "}
          {population.toLocaleString("en-US")}
        </Card.Text>
        <Card.Text>
          <span className="fw-semibold">Region:</span> {region}
        </Card.Text>
        <Card.Text>
          <span className="fw-semibold">Capital:</span> {capital}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
