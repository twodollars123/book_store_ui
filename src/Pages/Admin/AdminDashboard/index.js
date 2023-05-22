import classNames from "classnames/bind";

import style from "./AdminDashboard.module.scss";
import BannerTilte from "../../../Layouts/AdminLayout/components/BannerTitle";
import { LineChart } from "./Line";
import { BarChart } from "./Bar";
import { PieChart } from "./Pie";
import { getAllOrder } from "../../../ApiServices/orderApi";
import { useEffect, useState } from "react";

const cx = classNames.bind(style);

function AdminDashboard() {
  const [dataOrders, setDataOrders] = useState([]);
  const fetchAllOrder = async () => {
    const res = await getAllOrder();
    setDataOrders(res);
  };

  useEffect(() => {
    fetchAllOrder();
  }, []);
  return (
    <div className={cx("container")}>
      <BannerTilte titlePage={"Dashboard"} />
      <div className={cx("content")}>
        <div className={cx("barchart")}>
          <BarChart dataOrders={dataOrders} />
        </div>
        <div className={cx("dashboard__wraper")}>
          <div className={cx("linechart")}>
            <LineChart />
          </div>
          {/* <div className={cx("dashboard__wraper")}> */}
          <div className={cx("piechart")}>
            <PieChart />
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
