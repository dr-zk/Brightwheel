import { CONSTANTS } from "../constants";

export const handleChange = (e, formValues, setFormValues) => {
  const { name, value } = e.target;
  const updatedValues = {
    ...formValues,
    [name]:
      name === CONSTANTS.KEYS.ADDRESS
        ? { ...formValues.address, address1: value }
        : value,
  };

  if (
    [
      CONSTANTS.KEYS.CITY,
      CONSTANTS.KEYS.POSTAL_CODE,
      CONSTANTS.KEYS.STATE,
    ].includes(name)
  ) {
    updatedValues.address = {
      ...formValues.address,
      [name]: value,
    };
  }

  setFormValues(updatedValues);
};
