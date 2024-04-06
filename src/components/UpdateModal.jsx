import { Modal, Form, Button } from "antd";
import { getFieldValue } from "../lib/fieldValue";
import InputField from "./InputField";
import { getCapitalizeLabel } from "../lib/getCapitalizeLabel";
import { CONSTANTS } from "../constants";

export const UpdateModal = ({
  isModalVisible,
  handleCancel,
  handleChange,
  handleUpdate,
  fields,
  formValues,
  modalTitle,
  isCompany = false,
}) => {
  return (
    <Modal
      title={modalTitle}
      open={isModalVisible}
      onCancel={handleCancel}
      footer={[
        <Button key={CONSTANTS.LABELS.CANCEL} onClick={handleCancel}>
          {CONSTANTS.LABELS.CANCEL}
        </Button>,
        <Button
          key={CONSTANTS.LABELS.UPDATE}
          type={CONSTANTS.TYPE.PRIMARY}
          onClick={handleUpdate}
        >
          {CONSTANTS.LABELS.UPDATE}
        </Button>,
      ]}
    >
      <Form>
        {fields.map((field) => (
          <InputField
            key={field}
            label={getCapitalizeLabel(field)}
            name={field}
            value={
              isCompany ? getFieldValue(formValues, field) : formValues[field]
            }
            onChange={handleChange}
          />
        ))}
      </Form>
    </Modal>
  );
};
