import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Layout } from "antd";
import { HeaderMenu } from "./HeaderMenu";

const DashboardWrapper = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Sidebar 
        className='fixed-sidebar'
        _this={{
          setIsSidebarOpen,
          isSidebarOpen,
        }}
      />

      <Layout className="h-screen">
        <Header className="bg-white">
          <HeaderMenu
            _this={{
              setIsSidebarOpen,
              isSidebarOpen,
            }}
          />
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: 280,
            overflow: "auto",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardWrapper;
