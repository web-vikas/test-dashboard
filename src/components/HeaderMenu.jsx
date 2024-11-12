import { Avatar, Button, Space } from "antd";
import {LogsIcon, WrapTextIcon } from "lucide-react";
import { UserOutlined } from '@ant-design/icons';



export const HeaderMenu = ({ _this }) => {
  return (
    // Button to toggle sidebar open/close
    <div className="flex justify-between items-center">
      < Button onClick={() => _this.setIsSidebarOpen(!_this.isSidebarOpen)} className="border-none -ml-9" >
      {_this.isSidebarOpen && <LogsIcon />}
      {!_this.isSidebarOpen && <WrapTextIcon />}
      </Button>
      <Space size={16} wrap>
        <Avatar
        style={{
          backgroundColor: '#87d068',
        }}
        icon={<UserOutlined />}
      />
      </Space>
    </div>
  );
};
