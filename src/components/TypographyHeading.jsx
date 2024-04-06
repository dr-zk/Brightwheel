import { Badge, Typography } from "antd";
import { CONSTANTS } from "../constants";

export const TypographyHeading = ({
  title,
  fontAlign,
  starredCount,
  level = 1,
  canStarred,
}) => {
  const { Title } = Typography;
  return (
    <div className={`d-flex flex-column ${fontAlign}`}>
      <Title level={level}>{title}</Title>
      {canStarred && (
        <Badge
          className="mb-3"
          count={`${CONSTANTS.TITLE.STARRED_COMPANIES_COUNT} ${starredCount}`}
          style={{ backgroundColor: "#52c41a" }}
        />
      )}
    </div>
  );
};
