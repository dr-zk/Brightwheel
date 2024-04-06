import { CONSTANTS } from "../constants";

export const getFieldValue = (formValues, field) => {
  if (field === CONSTANTS.KEYS.NAME || field === CONSTANTS.KEYS.DESCRIPTION) {
    return formValues[field];
  } else if (field === CONSTANTS.KEYS.ADDRESS) {
    return formValues.address.address1;
  } else {
    return formValues.address[field];
  }
};
