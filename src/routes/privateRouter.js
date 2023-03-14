import AdminLayout from "../Layouts/AdminLayout";
import AccountManagement from "../Pages/Admin/AccoutManagerment";
import AdminDashboard from "../Pages/Admin/AdminDashboard";

export const privateRouter = [
  {
    path: "/admin",
    component: AdminDashboard,
    layout: AdminLayout,
  },
  {
    path: "/admin/accountmanagement",
    component: AccountManagement,
    layout: AdminLayout,
  },
];
