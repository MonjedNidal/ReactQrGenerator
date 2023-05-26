import React from "react";

function MyFooter() {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <p className="footerText">
          {`Copyright © Upbeat Code ${year} - `}{" "}
          <a className="footerLink" href="https://github.com/monjednidal">
            MonjedNidal
          </a>
        </p>
      </footer>
    </div>
  );
}

export default MyFooter;
