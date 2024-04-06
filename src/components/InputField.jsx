import React from "react";
import { Form, Input } from "antd";

const InputField = ({ label, name, value, onChange, placeholder }) => {
  return (
    <Form.Item label={label}>
      <Input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};

export default InputField;
