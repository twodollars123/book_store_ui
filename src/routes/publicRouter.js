import Home from "../Pages/User/Home";
import Category from "../Pages/User/Category";
import Loggin from "../Pages/User/Loggin";
import Signup from "../Pages/User/Signup";
import Payment from "../Pages/User/Payment";

export const publicRouter = [
  { path: "/", component: Home },
  { path: "/category", component: Category },
  { path: "/loggin", component: Loggin },
  { path: "/signup", component: Signup },
  { path: "/payment", component: Payment },
];
