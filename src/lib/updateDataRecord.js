import { CONSTANTS } from "../constants";

export const updateDataRecord = async (
  recordToUpdate,
  formValues,
  setIsModalVisible,
  refetch
) => {
  const company = {
    name: formValues.name || recordToUpdate.name,
    description: formValues.description || recordToUpdate.description,
    address: {
      address1: formValues.address.address1 || recordToUpdate.address.address1,
      city: formValues.address.city || recordToUpdate.address.city,
      postalCode:
        formValues.address.postalCode || recordToUpdate.address.postalCode,
      state: formValues.address.state || recordToUpdate.address.state,
    },
  };

  try {
    const response = await fetch(
      `${CONSTANTS.URLS.BASE_URL}/search/${recordToUpdate.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(company),
      }
    );

    if (!response.ok) {
      throw new Error(CONSTANTS.API.ERROR);
    }

    refetch();
  } catch (error) {
    console.error(CONSTANTS.API.ERROR, error);
  }
  setIsModalVisible(false);
  refetch();
};
