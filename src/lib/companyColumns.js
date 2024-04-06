import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { CONSTANTS } from "../constants";

export const companyColumns = (showModal, handleDelete, handleStar) => [
  {
    title: CONSTANTS.TITLE.STARRED,
    dataIndex: CONSTANTS.KEYS.STARRED,
    key: CONSTANTS.KEYS.STARRED,
    width: '5%',
    render: (text, record) => (
      <span className="w-75">
        {record.starred ? <StarFilled /> : <StarOutlined />}
      </span>
    ),
  },
  {
    title: CONSTANTS.TITLE.NAME,
    dataIndex: CONSTANTS.KEYS.NAME,
    key: CONSTANTS.KEYS.NAME,
    width: '10%',
  },
  {
    title: CONSTANTS.TITLE.DESCRIPTION,
    dataIndex: CONSTANTS.KEYS.DESCRIPTION,
    key: CONSTANTS.KEYS.DESCRIPTION,
    width: '20%',
  },
  {
    title: CONSTANTS.TITLE.ADDRESS,
    dataIndex: CONSTANTS.KEYS.ADDRESS,
    key: CONSTANTS.KEYS.ADDRESS,
    width: '20%',
    render: (text, record) => (
      <span>
        {record.address.address1}, {record.address.city}, {record.address.state}
        , {record.address.postalCode}
      </span>
    ),
  },
  {
    title: CONSTANTS.TITLE.ACTIONS,
    key: CONSTANTS.KEYS.ACTIONS,
    width: '25%',
    render: (text, record) => (
      <span>
        {record.starred ? (
          <Button className="mr-2" onClick={() => handleStar(record)}>
            {CONSTANTS.LABELS.UNSTAR}
          </Button>
        ) : (
          <Button className="mr-2" onClick={() => handleStar(record)}>
            {CONSTANTS.LABELS.STAR}
          </Button>
        )}
        <Button
          className="mr-2"
          onClick={(event) => {
            event.stopPropagation();
            showModal(record);
          }}
        >
          {CONSTANTS.LABELS.UPDATE}
        </Button>
        <Button
          danger
          onClick={(event) => {
            event.stopPropagation();
            handleDelete(record);
          }}
        >
          {CONSTANTS.LABELS.DELETE}
        </Button>
      </span>
    ),
  },
];
