import { CONSTANTS } from "../constants";

export const formFields = [
  CONSTANTS.KEYS.NAME,
  CONSTANTS.KEYS.DESCRIPTION,
  CONSTANTS.KEYS.ADDRESS,
  CONSTANTS.KEYS.CITY,
  CONSTANTS.KEYS.STATE,
  CONSTANTS.KEYS.POSTAL_CODE,
];

// Initialize formValues with empty strings for each field
export const initialFormValues = formFields.reduce((acc, field) => {
  acc[field] = "";
  return acc;
}, {});
