import React from "react";

function FgColorPicker({ setFgColor }) {
  return (
    <div>
      <div className="input-group d-flex justify-content-between">
        <label>Chose foreground color: </label>
        <input
          type="color"
          className="form-control-color colorPicker"
          onChange={(e) => {
            setFgColor(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default FgColorPicker;
