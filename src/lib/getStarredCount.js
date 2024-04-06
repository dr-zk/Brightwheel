import { CONSTANTS } from "../constants";

export const getStarredCount = async () => {
  const response = await fetch(`${CONSTANTS.URLS.BASE_URL}/search`);
  if (!response.ok) {
    throw new Error(CONSTANTS.API.ERROR);
  }
  const allCompanies = await response.json();

  const starredCompanies = await allCompanies.filter(
    (company) => company.starred === true
  );
  return starredCompanies.length;
};
