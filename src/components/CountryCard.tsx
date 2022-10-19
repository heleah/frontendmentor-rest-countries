import Card from "react-bootstrap/Card";
import { Country } from "../utils/types";

interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
  const { name, capital, population, region, flags } = country;

  return (
    <Card className="my-4 border border-0 shadow-sm" style={{ width: "80vw" }}>
      <Card.Img variant="top" src={flags.png} />
      <Card.Body className="p-4 pb-5">
        <Card.Title className="fw-bold">{name.common}</Card.Title>
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
