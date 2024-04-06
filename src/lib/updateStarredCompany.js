import { CONSTANTS } from "../constants";

export const updateStarredCompany = async (company, refetch) => {
  try {
    const payload = {
      starred: !company.starred,
    };
    const response = await fetch(
      `${CONSTANTS.URLS.BASE_URL}/search/${company.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error(CONSTANTS.API.ERROR);
    }

    refetch();
  } catch (error) {
    console.error(CONSTANTS.API.ERROR, error);
  }
  refetch();
};
