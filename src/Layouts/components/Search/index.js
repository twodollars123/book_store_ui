import Tippy from "@tippyjs/react/headless";

import "./Search.scss";
import { Wrapper as PopperWrapper } from "../../../Components/Popper";

function Search() {
  return (
    <Tippy
      interactive
      render={(attrs) => (
        <div className="box__search--result" tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <span>Có phải bạn muốn tìm kiếms</span>
            <span>a</span>
            <span>b</span>
          </PopperWrapper>
        </div>
      )}
    >
      <div className="search__container">
        <input
          placeholder="enter name of books or authors"
          className="search__input"
        />
        <button className="search__btn--clear">
          <i className="fa fa-close" />
        </button>
        {/* <i className="fa fa-spinner search__spinner--loading" /> */}
        <button className="search__btn--search">
          <i className="fa fa-search" />
        </button>
      </div>
    </Tippy>
  );
}

export default Search;
