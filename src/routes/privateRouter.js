import AdminLayout from "../Layouts/AdminLayout";
import AccountManagement from "../Pages/Admin/AccoutManagerment";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import CategoryManagement from "../Pages/Admin/CategoryManagement";

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
  {
    path: "/admin/categorymanagement",
    component: CategoryManagement,
    layout: AdminLayout,
  },
];
