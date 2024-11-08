import { Button } from "antd";
import { BarChart } from "lucide-react";
import React from "react";

export const HeaderMenu = ({ _this }) => {
  return (
    <div>
      <Button onClick={() => _this.setIsSidebarOpen(!_this.isSidebarOpen)}>
        <BarChart />
      </Button>
    </div>
  );
};
