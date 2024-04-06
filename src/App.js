import React, { useState } from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Menu, theme, Layout } from "antd";
import Companies from "./pages/Companies";
import { CONSTANTS } from "./constants";
import { useFetch } from "./hooks/useFetch";

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    CONSTANTS.TITLE.COMPANIES,
    CONSTANTS.KEYS.COMPANIES,
    <HomeOutlined />
  ),
];

const App = () => {
  const [selectedItem, setSelectedItem] = useState(items[0].key);
  const [search, setSearch] = useState("");
  const {
    data: companiesOriginalData,
    loading: companiesLoading,
    error: companiesError,
    setData: setCompaniesOriginalData,
    refetchData: companiesRefetch,
  } = useFetch(`${CONSTANTS.URLS.BASE_URL}/search?q=${search}&_limit=10`);

  const handleMenuClick = ({ key }) => {
    setSelectedItem(key);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header
        className="h2 d-flex align-items-center justify-content-center"
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        {CONSTANTS.TITLE.APP_NAME}
      </Header>
      <Content style={{ margin: "0 16px" }}>
        {selectedItem === CONSTANTS.KEYS.COMPANIES && (
          <Companies
            originalData={companiesOriginalData}
            setOriginalData={setCompaniesOriginalData}
            loading={companiesLoading}
            error={companiesError}
            refetch={companiesRefetch}
            search={search}
            setSearch={setSearch}
          />
        )}
      </Content>
    </div>
  );
};

export default App;
