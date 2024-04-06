import { Table } from "antd";
import { TypographyHeading } from "./TypographyHeading";

export const DataTable = ({
  data,
  showModal,
  handleDelete,
  handleStar,
  columns,
  title,
  starredCount,
  canStarred = false,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <TypographyHeading
            level={2}
            title={title}
            fontAlign="text-left"
            starredCount={starredCount}
            canStarred={canStarred}
          />
          {!!data && (
            <div className="table-responsive">
              <Table
                dataSource={data}
                columns={columns(showModal, handleDelete, handleStar)}
                {...(!!handleStar && {
                  onRow: (record) => {
                    return {
                      onClick: () => handleStar(record),
                    };
                  },
                })}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
