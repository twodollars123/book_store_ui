import "./SwitchButton.scss";

function SwitchButton({ id_togglebtn, isCheck, onClick }) {
  //   const clases = isCheck ? "toggleActiveBtn" : "toggleActiveBtn toggleActive";
  console.log("check", isCheck);
  return (
    <label className="toggleActiveBtn" htmlFor={id_togglebtn}>
      <input
        type="checkbox"
        className="toggleActiveBtn__input"
        id={id_togglebtn}
        defaultChecked={isCheck}
        // onChange={handleChange()}
        onClick={onClick}
      />
      <span className="toggleActiveBtn-track">
        <span className="toggleActiveBtn-indicator">
          <span className="checkMark">
            <svg
              viewBox="0 0 24 24"
              id="ghq-svg-check"
              role="presentation"
              aria-hidden="true"
            >
              <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
            </svg>
          </span>
        </span>
      </span>
    </label>
  );
}

export default SwitchButton;
