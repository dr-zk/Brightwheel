import { CONSTANTS } from "../constants";

export const deleteDataRecord = async (record, refetch) => {
  try {
    const response = await fetch(
      `${CONSTANTS.URLS.BASE_URL}/search/${record.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(CONSTANTS.API.ERROR);
    }

    refetch();
  } catch (error) {
    console.error(CONSTANTS.API.ERROR, error);
  }
};
