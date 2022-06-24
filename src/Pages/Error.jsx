import React from "react";
import "../stylesheet/Error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="error">
      <div>
        <h1 className="error__404">404</h1>
        <div className="error__text">
          Maybe this page got deleted? Never existed in the first place?
          <p>
            Let's go
            <Link className="error__Link" to="/">
              {" "}
              home{" "}
            </Link>
            and try from there.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Error;
