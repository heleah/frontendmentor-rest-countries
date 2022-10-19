interface SearchInputProps {
  onSearch: (str: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      className="m-4 p-2 border border-0 shadow-sm rounded"
      style={{ width: "90vw", fontSize: "12px" }}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchInput;
