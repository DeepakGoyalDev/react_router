import React, { useState } from "react";

function Form() {
  const [data, setData] = useState({
    name: "",
    with_label: "",
    email: "",
    password: "",
    number: "",
    date: "",
    time: "",
    color: "",
    search: "",
    hidden: "",
    textarea: "",
    checkbox: [],
    file: "",
    reset: "",
    submit: "",
    radio: "",
    range: "",
  });

  console.log("Data->", data);
  const onChangeHandler = (event) => {
    const { value, name, type, checked, files } = event.target;
    if (type === "checkbox") {
      setData((prev) => ({
        ...prev,
        checkbox: checked
          ? [...prev.checkbox, value]
          : prev.checkbox.filter((item) => item !== value),
      }));
      return;
    } else if (type === "file") {
      setData((prev) => ({
        ...prev,
        [event.target.name]: files[0],
      }));
    }

    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const onResetHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler} onReset={onResetHandler}>
      Text Input Without label
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={onChangeHandler}
      />
      <hr />
      <label>
        text Input With label
        <input
          type="text"
          name="with_label"
          value={data.with_label}
          onChange={onChangeHandler}
        />
      </label>
      <hr />
      <label>
        Email Input
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={onChangeHandler}
        />
      </label>
      <hr />
      <label>
        Password Input
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={onChangeHandler}
        />
      </label>
      <hr />
      <label>
        Number Input
        <input
          type="number"
          name="number"
          value={data.number}
          onChange={onChangeHandler}
        />
      </label>
      <hr />
      <label>
        Date Input
        <input
          type="date"
          name="date"
          value={data.date}
          onChange={onChangeHandler}
        />
      </label>
      <hr />
      <label>
        Time Input
        <input
          type="time"
          name="time"
          value={data.time}
          onChange={onChangeHandler}
        />
      </label>
      <hr />
      <label>
        Color Input
        <input
          type="color"
          name="color"
          value={data.color}
          onChange={onChangeHandler}
        />
      </label>
      <hr />
      <label>
        Search Input
        <input
          type="search"
          name="search"
          value={data.search}
          onChange={onChangeHandler}
        />
      </label>
      <hr />
      <label>
        Hidden Input
        <input
          type="hidden"
          name="hidden"
          value={data.hidden}
          onChange={onChangeHandler}
        />
      </label>
      <hr />
      <label>
        File Input
        <input
          type="file"
          name="file"
          value={data.file}
          onChange={onChangeHandler}
        />
      </label>
      <hr />
      <label>
        Reset Input
        <input
          type="reset"
          name="reset"
          value={data.reset}
          onChange={onChangeHandler}
        />
      </label>
      <hr />
      <textarea
        name="textarea"
        onChange={onChangeHandler}
        value={data.textarea}
      />
      <hr />
      <label>
        <input
          type="checkbox"
          name="checkbox"
          value="checkbox-1"
          checked={data.checkbox.some((item) => item === "checkbox-1")}
          onChange={onChangeHandler}
        />
        Checkbox-1
      </label>
      <label>
        <input
          type="checkbox"
          name="checkbox"
          value="checkbox-2"
          checked={data.checkbox.some((item) => item === "checkbox-2")}
          onChange={onChangeHandler}
        />
        Checkbox-2
      </label>
      <label>
        <input
          type="checkbox"
          name="checkbox"
          value="checkbox-3"
          checked={data.checkbox.some((item) => item === "checkbox-3")}
          onChange={onChangeHandler}
        />
        Checkbox-3
      </label>
      <hr />
      <label>
        <input
          type="radio"
          name="radio"
          value="radio-1"
          checked={data.radio === "radio-1"}
          onChange={onChangeHandler}
        />
        Radio-1
      </label>
      <label>
        <input
          type="radio"
          name="radio"
          value="radio-2"
          checked={data.radio === "radio-2"}
          onChange={onChangeHandler}
        />
        Radio-2
      </label>
      <label>
        <input
          type="radio"
          name="radio"
          value="radio-3"
          checked={data.radio === "radio-3"}
          onChange={onChangeHandler}
        />
        Radio-3
      </label>
      <hr />
      <label>
        Range Input
        <input
          type="range"
          name="range"
          value={data.range}
          onChange={onChangeHandler}
          min={0} // optional
          max={100} // optional
          step={1} // optional
        />
      </label>
      <hr />
      <label>
        Dropdown Input
        <select name="select" value={data.select} onChange={onChangeHandler}>
          <option value="">Select option</option>
          <option value="option-1">option-1</option>
          <option value="option-2">option-2</option>
          <option value="option-3">option-3</option>
          <option value="option-4">option-4</option>
        </select>
      </label>
      <hr />
      <input type="reset" value="reset" />
      <input type="submit" value="submit" />
      <hr />
      <button type="reset">Reset</button>
      <button type="submit">Submit</button>
      <hr />
    </form>
  );
}

export default Form;
