import Select from "react-select";

function MultiSelect({ options, onChange, defaultValue }) {
  return (
    <Select
      defaultValue={defaultValue}
      isMulti
      name="colors"
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={onChange}
    />
  );
}

export default MultiSelect;
