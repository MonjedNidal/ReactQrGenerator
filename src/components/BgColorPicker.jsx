import React from "react";

function BgColorPicker({ setBgColor }) {
  return (
    <div className="row inputGroup">
      <label className="col-9">Chose background color: </label>
      <input
        type="color"
        className="col colorPicker form-control form-control-color"
        onChange={(e) => {
          setBgColor(e.target.value);
        }}
      />
    </div>
  );
}

export default BgColorPicker;
