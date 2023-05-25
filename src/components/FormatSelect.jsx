import React from "react";

function FormatSelect({ setSelectedFormat }) {
  return (
    <div>
      <div className="row">
        <label className="col" htmlFor="select">
          Chose the format
        </label>
        <select
          id="select"
          className="form-select col"
          aria-label="Default select example"
          onChange={(e) => {
            setSelectedFormat(e.target.value);
          }}
        >
          <option selected value="png">
            .png
          </option>
          <option value="jpg">.jpg</option>
          <option value="jpeg">.jpeg</option>
          <option value="svg">.svg</option>
        </select>
      </div>
    </div>
  );
}

export default FormatSelect;
