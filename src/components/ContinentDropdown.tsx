import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

interface ContinentDropdownProps {
  onClick: (region: string) => void;
}

const ContinentDropdown = ({ onClick }: ContinentDropdownProps) => {
  const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <DropdownButton
      title="Filter by Region"
      variant="secondary"
      className="align-self-start align-self-md-center mx-3 my-2"
      size="sm"
    >
      {REGIONS.map((region) => (
        <Dropdown.Item
          key={region}
          as="button"
          onClick={(e) => onClick((e.target as HTMLElement).innerText)}
        >
          {region}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default ContinentDropdown;
