import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import {
  DashboardLayout,
  HomeLayout,
  Landing,
  Login,
  Register,
  Error,
  AllCampaigns,
  AddCampaign,
  Stats,
  Profile,
  EditCampaign,
} from "./pages";

import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { action as addCampaignAction } from "./pages/AddCampaign";
import { loader as allCampaignsLoader } from "./pages/AllCampaigns";
import { action as deleteCampaignAction } from "./pages/AllCampaigns";
import { loader as editCampaignLoader } from "./pages/EditCampaign";
import { action as editCampaignAction } from "./pages/EditCampaign";
import { loader as statsLoader } from "./pages/Stats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            loader: () => redirect("all-campaigns"),
          },
          {
            path: "add-campaign",
            element: <AddCampaign />,
            action: addCampaignAction,
          },
          {
            path: "all-campaigns",
            element: <AllCampaigns />,
            loader: allCampaignsLoader,
            action: deleteCampaignAction,
          },
          { path: "stats", element: <Stats />, loader: statsLoader },
          { path: "profile", element: <Profile /> },
          {
            path: "edit-campaign/:id",
            element: <EditCampaign />,
            loader: editCampaignLoader,
            action: editCampaignAction,
          },
        ],
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
