import React from "react";

function UrlInput({ url, setUrl, fetchData }) {
  return (
    <div className="">
      <div className="input-group">
        <input
          type="url"
          className="form-control"
          placeholder="Enter URL here"
          aria-label="Enter URL here"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={(e) => {
            if (url !== "" && url !== null) {
              fetchData();
            }
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default UrlInput;
