export const showModal = (
  record,
  setRecordToUpdate,
  fields,
  setFormValues,
  setIsModalVisible
) => {
  setRecordToUpdate(record);
  const recordValues = fields.reduce((acc, field) => {
    acc[field] = record[field];
    return acc;
  }, {});
  setFormValues(recordValues);
  setIsModalVisible(true);
};
