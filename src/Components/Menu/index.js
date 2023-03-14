import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";

import "./Menu.scss";

function Menu({ hideOnClick = false, titleHeader, children, dataItemMenu }) {
  const renderResult = (attrs) => (
    <div className="menu__list" tabIndex="-1" {...attrs}>
      <div className="menu__popper">
        {titleHeader && <header className="menu__header">{titleHeader}</header>}
        <div className="menu__body">
          {dataItemMenu &&
            dataItemMenu.length > 0 &&
            dataItemMenu.map((item, index) => {
              return (
                <Link to={item.to} key={index}>
                  <div className="menu__item">{item.name}</div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
  return (
    <Tippy
      interactive
      delay={[0, 200]}
      offset={[12, 8]}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={renderResult}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
