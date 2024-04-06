import { CONSTANTS } from "../constants";
import InputField from "./InputField";

export const SearchBar = ({ search, setSearch, modalName }) => {
  return (
    <>
      <InputField
        name={CONSTANTS.KEYS.SEARCH}
        placeholder={`${CONSTANTS.PLACEHOLDERS.SEARCH} ${modalName}`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};
