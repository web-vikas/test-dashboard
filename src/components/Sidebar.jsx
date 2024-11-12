import { Layout, Menu } from "antd";
import { ChartCandlestickIcon, ChartLineIcon, HandCoinsIcon, LayoutDashboardIcon, PiggyBankIcon, SquarePlusIcon, Users2Icon } from "lucide-react";
const { Sider } = Layout;

const menuItems = [
  { key: "1", icon: <LayoutDashboardIcon />, label: "Dashboard", path: "/dashboard"},
  { key: "2", icon: <HandCoinsIcon />, label: "expenss" },
  { key: "3", icon: <PiggyBankIcon />, label: "income" },
  { key: "4", icon: <ChartCandlestickIcon />, label: "buget" },
  { key: "5", icon: <SquarePlusIcon />, label: "categories "  },
  { key: "6", icon: <ChartLineIcon absoluteStrokeWidth />, label: "report " },
];

export const Sidebar = ({ _this }) => {
  return (
    <Sider
      className="bg-white border"
      trigger={null}
      collapsible
      collapsed={_this.isSidebarOpen}
      collapsedWidth={80} // Adjust width to fit only icons
    >
      <Menu mode="inline" defaultSelectedKeys={["1"]} className="flex flex-col justify-start gap-3">
        <div className="logo  px-2 text-xl font-bold">{!_this.isSidebarOpen && "Expenses Tracker"}</div>
        <div className=" pl-2 mb-7 -mt-2 flex justify-center items-center">
          {_this.isSidebarOpen && <Users2Icon />}
        </div>
        {menuItems.map((item) => (
          <Menu.Item to={item.path} key={item.key} className="flex items-center">
            <div className="mr-2">
            {item.icon}
            </div>
            <div className="font-semibold text-base capitalize">
            {!_this.isSidebarOpen && <span>{item.label}</span>}
            </div>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};
