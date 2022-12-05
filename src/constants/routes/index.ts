import {
  ComputerListScreen,
  ComputersScreen,
  DashboardScreen,
  SpaceMapScreen,
  MarketplaceScreen,
  ProductsScreen,
  ServiceScreen,
  ClientsScreen,
  ErrorLogs,
  ContentScreen,
  EmployeesScreen,
  LoyaltyScreen,
  ReportsScreen,
  SettingsScreen,
  TaxesScreen
} from "../../screens";

export const LINKS = [
  {
    url: "/",
    title: "Dashboard",
    component: DashboardScreen
  },
  {
    url: "/computers",
    title: "Computers",
    component: ComputersScreen
  },
  {
    // naming!!
    url: "/computers/spacemap",
    title: "Space map",
    component: SpaceMapScreen
  },
  {
    url: "/computers/computerlist",
    title: "Profile",
    component: ComputerListScreen
  },
  {
    url: "/marketplace",
    title: "Marketplace",
    component: MarketplaceScreen
  },
  {
    url: "/marketplace/products",
    title: "Products",
    component: ProductsScreen
  },
  {
    url: "/marketplace/service",
    title: "Service",
    component: ServiceScreen
  },
  {
    url: "/clients",
    title: "Clients",
    component: ClientsScreen
  },
  {
    url: "/errorlog",
    title: "Error Log",
    component: ErrorLogs
  },
  {
    url: "/taxes",
    title: "Taxes",
    component: TaxesScreen
  },
  {
    url: "/loyalty",
    title: "Loyalty system",
    component: LoyaltyScreen
  },
  {
    url: "/employees",
    title: "Employees",
    component: EmployeesScreen
  },
  {
    url: "/content",
    title: "Content",
    component: ContentScreen
  },
  {
    url: "/reports",
    title: "Reports",
    component: ReportsScreen
  },
  {
    url: "/settings",
    title: "Settings",
    component: SettingsScreen
  },
  {
    url: "/*",
    title: "Wrong url",
    component: DashboardScreen
  }
];
