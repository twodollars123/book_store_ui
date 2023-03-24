import Tippy from "@tippyjs/react/headless";

import "./Menu.scss";

function Menu({ hideOnClick = false, renderResult, children }) {
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
