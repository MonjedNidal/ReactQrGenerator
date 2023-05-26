import React from "react";

function UrlInput({ url, setUrl, fetchData, imageRef }) {
  return (
    <div className="">
      <div className="input-group inputGroup">
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
          className="btn"
          type="button"
          id="button-addon2"
          onClick={(e) => {
            if (url !== "" && url !== null) {
              fetchData();
              imageRef.current.scrollIntoView({ behavior: "smooth" });
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
