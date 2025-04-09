import {
  Beauty,
  Clothing,
  Computers,
  Electronics,
  Food,
  HomeAppliances,
  HomeServices,
  Mobile,
  Properties,
  Travel,
} from "../pages/categories";

export const categoryRoutes = [
  {
    path: "travel",
    element: <Travel />,
  },
  {
    path: "food",
    element: <Food />,
  },
  {
    path: "home-appliances",
    element: <HomeAppliances />,
  },
  {
    path: "electronics",
    element: <Electronics />,
  },
  {
    path: "properties",
    element: <Properties />,
  },
  {
    path: "computers",
    element: <Computers />,
  },
  {
    path: "mobile",
    element: <Mobile />,
  },
  {
    path: "home-services",
    element: <HomeServices />,
  },
  {
    path: "beauty",
    element: <Beauty />,
  },
  {
    path: "clothing",
    element: <Clothing />,
  },
];
