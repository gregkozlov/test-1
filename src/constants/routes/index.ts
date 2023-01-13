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

import { useTranslation } from "react-i18next";

import { linkItemType } from "./types";

export const LINKS_TOP: linkItemType[] = [
  {
    url: "/test-1/",
    title: "navigation.pages.dashboard",
    component: DashboardScreen,
    icon: Dashboard
  },
  {
    url: "/test-1/computers/spacemap",
    title: "navigation.pages.computers",
    component: ComputersScreen,
    icon: Computer,
    dropdown: [
      {
        // naming!!
        url: "/test-1/spacemap",
        title: "navigation.pages.spaceMap",
        component: SpaceMapScreen
      },
      {
        url: "/test-1/computerlist",
        title: "navigation.pages.profile",
        component: ComputerListScreen
      }
    ]
  },
  {
    url: "/test-1/products",
    title: "navigation.pages.marketplace",
    component: MarketplaceScreen,
    icon: Store,
    dropdown: [
      {
        url: "/test-1/marketplace/products",
        title: "navigation.pages.products",
        component: ProductsScreen
      },
      {
        url: "/test-1/marketplace/service",
        title: "navigation.pages.service",
        component: ServiceScreen
      }
    ]
  },
  {
    url: "/test-1/clients",
    title: "navigation.pages.clients",
    icon: Clients,
    component: ClientsScreen
  },
  {
    url: "/test-1/errorlog",
    title: "navigation.pages.logs",
    component: ErrorLogs,
    icon: Logs
  }
];

export const LINKS_BOTTOM: linkItemType[] = [
  {
    url: "/test-1/taxes",
    title: "navigation.pages.taxes",
    icon: Percent,
    component: TaxesScreen
  },
  {
    url: "/test-1/loyalty",
    title: "navigation.pages.loyalty",
    icon: Loyalty,
    component: LoyaltyScreen
  },
  {
    url: "/test-1/employees",
    title: "navigation.pages.employees",
    icon: People,
    component: EmployeesScreen
  },
  {
    url: "/test-1/content",
    title: "navigation.pages.content",
    icon: Book,
    component: ContentScreen
  },
  {
    url: "/test-1/reports",
    title: "navigation.pages.reports",
    icon: Cloud,
    component: ReportsScreen
  },
  {
    url: "/test-1/settings",
    title: "navigation.pages.settings",
    icon: Settings,
    component: SettingsScreen
  }
  // {
  //   url: "/*",
  //   title: "Wrong url",
  //   component: DashboardScreen
  // }
];
