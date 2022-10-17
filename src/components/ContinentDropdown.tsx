import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const ContinentDropdown = () => {
  return (
    <DropdownButton
      title="Filter by Region"
      variant="secondary"
      className="align-self-start mx-3 my-2"
      size="sm"
    >
      <Dropdown.Item>Africa</Dropdown.Item>
      <Dropdown.Item>Americas</Dropdown.Item>
      <Dropdown.Item>Asia</Dropdown.Item>
      <Dropdown.Item>Europe</Dropdown.Item>
      <Dropdown.Item>Oceania</Dropdown.Item>
    </DropdownButton>
  );
};

export default ContinentDropdown;
