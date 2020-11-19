import "./FilterBar.css";
import { useRef } from "react";
const FilterBar = ({ filter }) => {
  const form = useRef(null);

  const inputChange = (e) => {
    const {
      current: { elements },
    } = form;

    const filterKeys = ["name", "gender"];
    const filterObj = {};
    const elementsArr = Array.from(elements);
    filterKeys.forEach((key) => {
      const filterElement = (el) => {
        const classes = Array.from(el.classList);
        return classes.includes(key);
      };
      const input = elementsArr.find(filterElement);
      filterObj[key] = input.value ? input.value : null;
    });
    filter(filterObj);
  };

  return (
    <div className="top-bar">
      <form ref={form} className="form">
        <div className="name-div">
          <input
            type="text"
            onChange={inputChange}
            placeholder="John Doe"
            className="name input"
          />
        </div>
        <div className="gender-div">
          <select
            onChange={inputChange}
            name="gender"
            id=""
            className="gender input"
          >
            <option value="none" defaultChecked>
              Select Gender
            </option>
            <option value="female"> female</option>
            <option value="male"> male</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default FilterBar;
