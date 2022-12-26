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

import {
  Logs,
  Clients,
  Computer,
  Dashboard,
  Store,
  Percent,
  Loyalty,
  People,
  Book,
  Cloud,
  Settings
} from "../../shared/images";

import { linkItemType } from "./types";

export const LINKS_TOP: linkItemType[] = [
  {
    url: "/",
    title: "Dashboard",
    component: DashboardScreen,
    icon: Dashboard
  },
  {
    url: "/computers/spacemap",
    title: "Computers",
    component: ComputersScreen,
    icon: Computer,
    dropdown: [
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
      }
    ]
  },
  {
    url: "/marketplace/products",
    title: "Marketplace",
    component: MarketplaceScreen,
    icon: Store,
    dropdown: [
      {
        url: "/marketplace/products",
        title: "Products",
        component: ProductsScreen
      },
      {
        url: "/marketplace/service",
        title: "Service",
        component: ServiceScreen
      }
    ]
  },
  {
    url: "/clients",
    title: "Clients",
    icon: Clients,
    component: ClientsScreen
  },
  {
    url: "/errorlog",
    title: "Error Log",
    component: ErrorLogs,
    icon: Logs
  }
];

export const LINKS_BOTTOM: linkItemType[] = [
  {
    url: "/taxes",
    title: "Taxes",
    icon: Percent,
    component: TaxesScreen
  },
  {
    url: "/loyalty",
    title: "Loyalty system",
    icon: Loyalty,
    component: LoyaltyScreen
  },
  {
    url: "/employees",
    title: "Employees",
    icon: People,
    component: EmployeesScreen
  },
  {
    url: "/content",
    title: "Content",
    icon: Book,
    component: ContentScreen
  },
  {
    url: "/reports",
    title: "Reports",
    icon: Cloud,
    component: ReportsScreen
  },
  {
    url: "/settings",
    title: "Settings",
    icon: Settings,
    component: SettingsScreen
  }
  // {
  //   url: "/*",
  //   title: "Wrong url",
  //   component: DashboardScreen
  // }
];
