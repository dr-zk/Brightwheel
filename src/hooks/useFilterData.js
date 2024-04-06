import { useEffect } from "react";

const useFilteredData = (originalData, key, name, search, setFilteredData) => {
  useEffect(() => {
    if (originalData) {
      const filteredData = originalData.filter((item) =>
        item[name].toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filteredData);
    }
  }, [originalData, search, key, name, setFilteredData]);
};

export default useFilteredData;
