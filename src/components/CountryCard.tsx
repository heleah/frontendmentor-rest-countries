import Card from "react-bootstrap/Card";

const CountryCard = () => {
  return (
    <Card className="my-4 border border-0 shadow-sm" style={{ width: "80vw" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title className="fw-bold">Country Name</Card.Title>
        <Card.Text>
          <span className="fw-semibold">Population:</span> 1000
        </Card.Text>
        <Card.Text>
          <span className="fw-semibold">Region:</span> Continent
        </Card.Text>
        <Card.Text>
          <span className="fw-semibold">Capital:</span> Capital
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
