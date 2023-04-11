import Select from "react-select";

function MultiSelect({ options, onChange }) {
  return (
    <Select
      // defaultValue={[colourOptions[2], colourOptions[3]]}
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
