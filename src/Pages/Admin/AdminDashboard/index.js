import classNames from "classnames/bind";

import style from "./AdminDashboard.module.scss";
import BannerTilte from "../../../Layouts/AdminLayout/components/BannerTitle";
import { LineChart } from "./Line";
import { BarChart } from "./Bar";
import { PieChart } from "./Pie";

const cx = classNames.bind(style);

function AdminDashboard() {
  return (
    <div className={cx("container")}>
      <BannerTilte titlePage={"Dashboard"} />
      <div className={cx("content")}>
        <div className={cx("barchart")}>
          <BarChart />
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
